require('dotenv').config();

const { connectDatabase } = require('./src/config/db');
const { createApp } = require('./src/app');

const PORT = process.env.PORT || 5000;

async function startServer() {
  await connectDatabase();
  const app = createApp();
  app.listen(PORT, () => {
    console.log(`A1 Fast Food server running on port ${PORT}`);
  });
}

startServer().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
