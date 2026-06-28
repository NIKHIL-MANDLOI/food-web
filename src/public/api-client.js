const apiClient = {
  baseUrl: '/api',

  async request(path, options = {}) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      },
      ...options
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.message || 'Request failed');
    }
    return data;
  },

  auth: {
    register(payload) {
      return apiClient.request('/auth/register', { method: 'POST', body: JSON.stringify(payload) });
    },
    login(payload) {
      return apiClient.request('/auth/login', { method: 'POST', body: JSON.stringify(payload) });
    },
    logout() {
      return apiClient.request('/auth/logout', { method: 'POST' });
    },
    me() {
      return apiClient.request('/auth/me');
    }
  },
  catalog: {
    foods(params = '') {
      return apiClient.request(`/catalog/foods${params}`);
    },
    categories() {
      return apiClient.request('/catalog/categories');
    }
  },
  cart: {
    get() {
      return apiClient.request('/cart');
    },
    add(payload) {
      return apiClient.request('/cart/items', { method: 'POST', body: JSON.stringify(payload) });
    },
    update(payload) {
      return apiClient.request('/cart/items', { method: 'PATCH', body: JSON.stringify(payload) });
    },
    remove(foodId) {
      return apiClient.request(`/cart/items/${foodId}`, { method: 'DELETE' });
    },
    clear() {
      return apiClient.request('/cart', { method: 'DELETE' });
    }
  },
  wishlist: {
    get() {
      return apiClient.request('/wishlist');
    },
    toggle(payload) {
      return apiClient.request('/wishlist/toggle', { method: 'POST', body: JSON.stringify(payload) });
    }
  },
  orders: {
    checkout(payload) {
      return apiClient.request('/orders/checkout', { method: 'POST', body: JSON.stringify(payload) });
    },
    mine() {
      return apiClient.request('/orders');
    },
    confirmPayment(payload) {
      return apiClient.request('/orders/confirm-payment', { method: 'POST', body: JSON.stringify(payload) });
    }
  }
};

window.apiClient = apiClient;
