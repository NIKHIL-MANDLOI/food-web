const { verifyAccessToken } = require('../utils/tokens');
const { ApiError } = require('../utils/ApiError');
const { User } = require('../models/User');

async function requireAuth(req, res, next) {
  try {
    const bearerToken = req.headers.authorization?.startsWith('Bearer ')
      ? req.headers.authorization.slice(7)
      : null;
    const cookieToken = req.cookies?.token || null;
    const token = bearerToken || cookieToken;

    if (!token) {
      throw new ApiError(401, 'Authentication required');
    }

    const decoded = verifyAccessToken(token);
    const user = await User.findById(decoded.id).select('-password');

    if (!user || user.isBlocked) {
      throw new ApiError(401, 'Invalid authentication session');
    }

    req.user = user;
    next();
  } catch (error) {
    next(error.statusCode ? error : new ApiError(401, 'Invalid or expired token'));
  }
}

function requireRole(...roles) {
  return function roleGuard(req, res, next) {
    if (!req.user || !roles.includes(req.user.role)) {
      return next(new ApiError(403, 'Forbidden'));
    }

    return next();
  };
}

module.exports = { requireAuth, requireRole };
