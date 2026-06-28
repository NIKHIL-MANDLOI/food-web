const featuredItems = [
    {
        name: 'Veg Burger + Fries + Coke',
        image: 'photo/fd17.jpg',
        price: 'Rs. 160/-',
        originalPrice: 'Rs. 200',
        offer: 'Flat 20% OFF',
        description: 'A bestselling combo with a clean price anchor and strong promotional positioning.'
    },
    {
        name: 'Mrgharita Pizza',
        image: 'photo/fd27.jpg',
        price: 'Rs. 200/-',
        originalPrice: 'Rs. 250',
        offer: 'Flat 20% OFF',
        description: 'A premium pizza offer designed to feel familiar, indulgent, and highly clickable.'
    },
    {
        name: 'Special Paneer Masala Dosa',
        image: 'photo/fd26.jpg',
        price: 'Rs. 144/-',
        originalPrice: 'Rs. 180',
        offer: 'Flat 20% OFF',
        description: 'A plated specialty that balances comfort food appeal with a premium visual format.'
    },
    {
        name: 'Veg Biryani with Raita',
        image: 'photo/fd25.jpg',
        price: 'Rs. 165/-',
        originalPrice: 'Rs. 220',
        offer: 'Flat 25% OFF',
        description: 'A generous bowl-style serving built to showcase volume, value, and appetite appeal.'
    },
    {
        name: 'Veg Crunchy Taco',
        image: 'photo/fd24.jpg',
        price: 'Rs. 120/-',
        originalPrice: 'Rs. 150',
        offer: 'Flat 20% OFF',
        description: 'A crunchy handheld option ideal for quick-order menus and visual variety.'
    },
    {
        name: 'Veg Roll',
        image: 'photo/fd28.jpg',
        price: 'Rs. 72/-',
        originalPrice: 'Rs. 80',
        offer: 'Flat 10% OFF',
        description: 'A compact snack item with strong repetition value for fast-service menus.'
    },
    {
        name: 'Veg Noodles',
        image: 'photo/fd30.jpg',
        price: 'Rs. 105/-',
        originalPrice: 'Rs. 130',
        offer: 'Flat 20% OFF',
        description: 'A familiar, broad-appeal dish that fits both lunch and late-evening ordering.'
    },
    {
        name: 'Schezwan Fries Rice',
        image: 'photo/fd31.jpg',
        price: 'Rs. 140/-',
        originalPrice: 'Rs. 200',
        offer: 'Flat 30% OFF',
        description: 'A bold flavor-forward dish that works well as a hero offer in the bestseller section.'
    }
];

const menuItems = [
    {
        name: 'Ice Cream',
        image: 'photo/fd6.jpg',
        price: 'Rs. 60/-',
        originalPrice: 'Rs. 100',
        offer: 'Upto 40% OFF',
        description: 'A simple dessert option that rounds out the menu and adds finish-friendly variety.'
    },
    {
        name: 'Double Aloo Patty Burger',
        image: 'photo/fd1.jpg',
        price: 'Rs. 72/-',
        originalPrice: 'Rs. 80',
        offer: 'Upto 10% OFF',
        description: 'A hearty burger variant with a value-first message and broad appeal.'
    },
    {
        name: 'Veg Burger',
        image: 'photo/fd2.jpg',
        price: 'Rs. 200/-',
        originalPrice: 'Combo of 3 @200',
        offer: 'Bundle Offer',
        description: 'A high-visibility combo item for customer acquisition and basket-building.'
    },
    {
        name: 'Cheese Pizza',
        image: 'photo/fd3.jpg',
        price: 'Rs. 120/-',
        originalPrice: 'Rs. 150',
        offer: 'Upto 20% OFF',
        description: 'A classic pizza product that fits both dinner orders and promotional slots.'
    },
    {
        name: 'Pizza',
        image: 'photo/fd9.jpg',
        price: 'Rs. 180/-',
        originalPrice: 'Rs. 180',
        offer: 'Buy 1 Get 1 Free',
        description: 'A simple hero listing that keeps the original offer language intact.'
    },
    {
        name: 'Brownie',
        image: 'photo/fd5.jpg',
        price: 'Rs. 84/-',
        originalPrice: 'Rs. 120',
        offer: 'Upto 30% OFF',
        description: 'A dessert item that supports impulse purchases and post-meal add-ons.'
    },
    {
        name: 'Masala Dosa',
        image: 'photo/fd7.jpg',
        price: 'Rs. 80/-',
        originalPrice: 'Rs. 115',
        offer: 'Upto 30% OFF',
        description: 'A reliable all-day seller that adds regional variety to the menu.'
    },
    {
        name: 'Chole Bhature',
        image: 'photo/fd8.jpg',
        price: 'Rs. 80/-',
        originalPrice: 'Rs. 99',
        offer: 'Flat 20% OFF',
        description: 'A rich, filling dish that increases perceived value and menu depth.'
    },
    {
        name: 'Paneer Tikka',
        image: 'photo/fd13.jpg',
        price: 'Rs. 112/-',
        originalPrice: 'Rs. 140',
        offer: 'Upto 20% OFF',
        description: 'A premium vegetarian option with strong dinner-service conversion potential.'
    },
    {
        name: 'Kadhai Paneer',
        image: 'photo/fd12.jpg',
        price: 'Rs. 128/-',
        originalPrice: 'Rs. 150',
        offer: 'Flat 15% OFF',
        description: 'A richer curry choice that strengthens the restaurant-style perception of the menu.'
    },
    {
        name: 'Veg Grilled Sandwich',
        image: 'photo/fd11.jpg',
        price: 'Rs. 63/-',
        originalPrice: 'Rs. 70',
        offer: 'Upto 10% OFF',
        description: 'A quick-serve item designed for casual snack ordering and frequent repeat traffic.'
    },
    {
        name: 'Veg Chowmein',
        image: 'photo/fd10.jpg',
        price: 'Rs. 54/-',
        originalPrice: 'Rs. 60',
        offer: 'Upto 10% OFF',
        description: 'A low-friction menu staple with strong evening and delivery appeal.'
    },
    {
        name: 'Paneer Grilled Sandwich',
        image: 'photo/fd14.jpg',
        price: 'Rs. 84/-',
        originalPrice: 'Rs. 99',
        offer: 'Flat 15% OFF',
        description: 'A protein-forward sandwich that supports a more premium snack position.'
    },
    {
        name: 'Veg Manchurian',
        image: 'photo/fd15.jpg',
        price: 'Rs. 113/-',
        originalPrice: 'Rs. 150',
        offer: 'Flat 25% OFF',
        description: 'A strong takeout-friendly dish with a familiar spice profile and value cue.'
    },
    {
        name: 'Paneer Roll',
        image: 'photo/fd16.jpg',
        price: 'Rs. 90/-',
        originalPrice: 'Rs. 100',
        offer: 'Upto 10% OFF',
        description: 'A wrap-style item that fits well in a mobile-first food ordering experience.'
    }
];

const galleryItems = [
    { image: 'photo/g1.jpg', alt: 'Food gallery image 1' },
    { image: 'photo/g2.jpg', alt: 'Food gallery image 2' },
    { image: 'photo/fd3.jpg', alt: 'Food gallery image 3' },
    { image: 'photo/g4.jpg', alt: 'Food gallery image 4' },
    { image: 'photo/g5.png', alt: 'Food gallery image 5' },
    { image: 'photo/fd5.jpg', alt: 'Food gallery image 6' },
    { image: 'photo/fd6.jpg', alt: 'Food gallery image 7' },
    { image: 'photo/g6.png', alt: 'Food gallery image 8' }
];

const fallbackCategories = [
    { name: 'Burgers', slug: 'burgers' },
    { name: 'Pizza', slug: 'pizza' },
    { name: 'North Indian', slug: 'north-indian' },
    { name: 'Snacks', slug: 'snacks' },
    { name: 'Desserts', slug: 'desserts' }
];

const featuredGrid = document.querySelector('#featured-grid');
const menuGrid = document.querySelector('#menu-grid');
const galleryGrid = document.querySelector('#gallery-grid');
const modal = document.querySelector('#food-modal');
const modalImage = document.querySelector('#modal-image');
const modalTitle = document.querySelector('#modal-title');
const modalPrice = document.querySelector('#modal-price');
const modalDescription = document.querySelector('#modal-description');
const modalOffer = document.querySelector('#modal-offer');
const navToggle = document.querySelector('.nav-toggle');
const siteHeader = document.querySelector('.site-header');
const authStatus = document.querySelector('#auth-status');
const authTabs = document.querySelectorAll('[data-auth-tab]');
const authForms = document.querySelectorAll('[data-auth-form]');
const loginForm = document.querySelector('[data-auth-form="login"]');
const registerForm = document.querySelector('[data-auth-form="register"]');
const forgotForm = document.querySelector('[data-auth-form="forgot"]');
const resetForm = document.querySelector('[data-auth-form="reset"]');
const logoutButton = document.querySelector('#logout-button');
const accountButton = document.querySelector('#account-button');
const cartButton = document.querySelector('#cart-button');
const cartDrawer = document.querySelector('#cart-drawer');
const cartItems = document.querySelector('#cart-items');
const cartSubtotal = document.querySelector('#cart-subtotal');
const cartDelivery = document.querySelector('#cart-delivery');
const cartTax = document.querySelector('#cart-tax');
const cartTotal = document.querySelector('#cart-total');
const checkoutForm = document.querySelector('#checkout-form');
const saveCartButton = document.querySelector('#save-cart-button');
const loadOrdersButton = document.querySelector('#load-orders-button');
const ordersList = document.querySelector('#orders-list');
const catalogSearch = document.querySelector('#catalog-search');
const catalogCategory = document.querySelector('#catalog-category');
const catalogSort = document.querySelector('#catalog-sort');
const catalogClear = document.querySelector('#catalog-clear');
const catalogSummary = document.querySelector('#catalog-summary');
const toastRoot = document.querySelector('#toast-root');

const state = {
    user: null,
    categories: [],
    foods: [],
    cart: [],
    orders: [],
    filteredFoods: [],
    activeFood: null,
    drawerOpen: false,
    filters: {
        search: '',
        category: '',
        sort: 'featured'
    }
};

function fallbackFoodCatalog() {
    return [
        ...featuredItems.map((item) => ({
            _id: item.name,
            name: item.name,
            slug: item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            description: item.description,
            shortDescription: item.description,
            price: Number(String(item.price).replace(/[^0-9.]/g, '')) || 0,
            originalPrice: Number(String(item.originalPrice).replace(/[^0-9.]/g, '')) || 0,
            offerText: item.offer,
            images: [item.image],
            tags: ['featured'],
            ingredients: [],
            ratingAverage: 4.6,
            ratingCount: 100,
            isFeatured: true,
            category: { name: 'Bestsellers', slug: 'bestsellers' },
            displayPrice: item.price,
            displayOriginalPrice: item.originalPrice,
            displayOffer: item.offer
        })),
        ...menuItems.map((item) => ({
            _id: item.name,
            name: item.name,
            slug: item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            description: item.description,
            shortDescription: item.description,
            price: Number(String(item.price).replace(/[^0-9.]/g, '')) || 0,
            originalPrice: Number(String(item.originalPrice).replace(/[^0-9.]/g, '')) || 0,
            offerText: item.offer,
            images: [item.image],
            tags: ['menu'],
            ingredients: [],
            ratingAverage: 4.4,
            ratingCount: 48,
            isFeatured: false,
            category: { name: 'Menu', slug: 'menu' },
            displayPrice: item.price,
            displayOriginalPrice: item.originalPrice,
            displayOffer: item.offer
        }))
    ];
}

function showToast(message, type = 'info') {
    if (!toastRoot) return;

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.textContent = message;
    toastRoot.appendChild(toast);

    window.setTimeout(() => {
        toast.remove();
    }, 3200);
}

function formatMoney(value) {
    return `Rs. ${Math.round(Number(value) || 0)}/-`;
}

function setAuthStatus(message) {
    if (authStatus) {
        authStatus.textContent = message;
    }
}

function setActiveAuthTab(tabName) {
    authTabs.forEach((tab) => {
        const isActive = tab.dataset.authTab === tabName;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', String(isActive));
    });

    authForms.forEach((form) => {
        const isActive = form.dataset.authForm === tabName;
        form.hidden = !isActive;
        form.classList.toggle('is-active', isActive);
    });
}

function serializeForm(form) {
    return Object.fromEntries(new FormData(form).entries());
}

function normalizeFood(food) {
    const image = food.images?.[0] || food.image || 'photo/fd2.jpg';
    const priceValue = typeof food.price === 'number' ? food.price : Number(String(food.price || '').replace(/[^0-9.]/g, '')) || 0;
    const originalPriceValue = typeof food.originalPrice === 'number'
        ? food.originalPrice
        : Number(String(food.originalPrice || '').replace(/[^0-9.]/g, '')) || 0;

    return {
        ...food,
        image,
        displayPrice: food.displayPrice || `Rs. ${priceValue}/-`,
        displayOriginalPrice: food.displayOriginalPrice || (originalPriceValue ? `Rs. ${originalPriceValue}` : ''),
        displayOffer: food.displayOffer || food.offerText || '',
        displayCategory: food.category?.name || food.category || 'Food',
        priceValue,
        originalPriceValue
    };
}

function applyFoodFilters(foods) {
    const search = state.filters.search.trim().toLowerCase();
    const category = state.filters.category;
    const sort = state.filters.sort;

    let filtered = foods.slice();

    if (search) {
        filtered = filtered.filter((food) => {
            const haystack = [
                food.name,
                food.description,
                food.shortDescription,
                food.offerText,
                food.displayCategory,
                ...(food.tags || []),
                ...(food.ingredients || [])
            ].join(' ').toLowerCase();

            return haystack.includes(search);
        });
    }

    if (category) {
        filtered = filtered.filter((food) => {
            const currentCategory = food.category?.slug || food.category?.name || food.category || '';
            return currentCategory.toLowerCase() === category.toLowerCase();
        });
    }

    const sorters = {
        featured: (a, b) => Number(b.isFeatured) - Number(a.isFeatured) || (b.ratingAverage || 0) - (a.ratingAverage || 0),
        price_asc: (a, b) => a.priceValue - b.priceValue,
        price_desc: (a, b) => b.priceValue - a.priceValue,
        rating_desc: (a, b) => (b.ratingAverage || 0) - (a.ratingAverage || 0),
        newest: (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
    };

    filtered.sort(sorters[sort] || sorters.featured);
    return filtered;
}

function renderFoodCard(food, index, sectionLabel) {
    const article = document.createElement('article');
    article.className = 'food-card reveal is-visible';
    article.innerHTML = `
        <div class="food-card__media">
            <img src="${food.image}" alt="${food.name}" loading="lazy" decoding="async" width="600" height="450">
        </div>
        <div class="food-card__body">
            <p class="food-card__price"><s>${food.displayOriginalPrice || ''}</s> <span>${food.displayPrice}</span></p>
            <h3 class="food-card__title">${food.name}</h3>
            <p class="food-card__meta">${food.displayOffer || food.offerText || ''}</p>
            <button class="food-card__button" type="button" data-food-index="${sectionLabel}:${index}">View Details</button>
        </div>
    `;
    return article;
}

function renderCatalog() {
    if (!featuredGrid || !menuGrid) return;

    const visibleFoods = applyFoodFilters(state.foods);
    state.filteredFoods = visibleFoods;

    const featuredFoods = visibleFoods.filter((food) => food.isFeatured);
    const menuFoods = visibleFoods.filter((food) => !food.isFeatured);

    const featuredSource = featuredFoods.length ? featuredFoods : visibleFoods.slice(0, 8);
    const menuSource = menuFoods.length ? menuFoods : visibleFoods;

    featuredGrid.replaceChildren();
    menuGrid.replaceChildren();

    const featuredFragment = document.createDocumentFragment();
    featuredSource.forEach((food, index) => {
        featuredFragment.appendChild(renderFoodCard(food, index, 'featured'));
    });
    featuredGrid.appendChild(featuredFragment);

    const menuFragment = document.createDocumentFragment();
    menuSource.forEach((food, index) => {
        menuFragment.appendChild(renderFoodCard(food, index, 'menu'));
    });
    menuGrid.appendChild(menuFragment);

    if (catalogSummary) {
        catalogSummary.textContent = `${visibleFoods.length} food item${visibleFoods.length === 1 ? '' : 's'} available right now.`;
    }

    window.foodCatalogState = {
        featured: featuredSource,
        menu: menuSource
    };
}

function getCartPayload() {
    return state.cart.map((item) => ({
        food: item.food?._id || item.food,
        name: item.name || item.food?.name,
        image: item.image || item.food?.images?.[0] || '',
        price: item.price || item.food?.price || 0,
        quantity: item.quantity || 1
    }));
}

function renderCart() {
    if (!cartItems) return;

    cartItems.replaceChildren();

    if (!state.cart.length) {
        const empty = document.createElement('p');
        empty.className = 'catalog-summary';
        empty.textContent = 'Your cart is empty. Add items from the menu to begin checkout.';
        cartItems.appendChild(empty);
    } else {
        const fragment = document.createDocumentFragment();
        state.cart.forEach((item) => {
            const food = item.food || {};
            const row = document.createElement('article');
            row.className = 'cart-row';
            row.innerHTML = `
                <img src="${item.image || food.images?.[0] || 'photo/fd2.jpg'}" alt="${item.name || food.name || 'Cart item'}" loading="lazy" decoding="async">
                <div class="cart-row__meta">
                    <strong>${item.name || food.name || 'Food item'}</strong>
                    <span>${formatMoney(item.price || food.price || 0)} x ${item.quantity || 1}</span>
                </div>
                <div class="cart-row__actions">
                    <button type="button" data-cart-action="decrease" data-food-id="${food._id || item.food}">-</button>
                    <button type="button" data-cart-action="increase" data-food-id="${food._id || item.food}">+</button>
                    <button type="button" data-cart-action="remove" data-food-id="${food._id || item.food}">Remove</button>
                </div>
            `;
            fragment.appendChild(row);
        });
        cartItems.appendChild(fragment);
    }

    const totals = state.cart.reduce((accumulator, item) => {
        const price = Number(item.price || item.food?.price || 0);
        const quantity = Number(item.quantity || 1);
        accumulator.subtotal += price * quantity;
        return accumulator;
    }, { subtotal: 0 });

    const delivery = totals.subtotal >= 499 || totals.subtotal === 0 ? 0 : 39;
    const tax = Math.round(totals.subtotal * 0.05);
    const total = totals.subtotal + delivery + tax;

    if (cartSubtotal) cartSubtotal.textContent = formatMoney(totals.subtotal);
    if (cartDelivery) cartDelivery.textContent = formatMoney(delivery);
    if (cartTax) cartTax.textContent = formatMoney(tax);
    if (cartTotal) cartTotal.textContent = formatMoney(total);
}

async function refreshCart() {
    if (!window.apiClient?.cart) return;

    try {
        const response = await window.apiClient.cart.get();
        state.cart = response?.data?.cart?.items || [];
    } catch (error) {
        state.cart = [];
    }

    renderCart();
}

function openCartDrawer() {
    if (!cartDrawer) return;
    cartDrawer.hidden = false;
    document.body.classList.add('drawer-open');
    state.drawerOpen = true;
}

function closeCartDrawer() {
    if (!cartDrawer) return;
    cartDrawer.hidden = true;
    document.body.classList.remove('drawer-open');
    state.drawerOpen = false;
}

function renderOrders() {
    if (!ordersList) return;

    ordersList.replaceChildren();

    if (!state.orders.length) {
        const empty = document.createElement('p');
        empty.className = 'catalog-summary';
        empty.textContent = 'No orders loaded yet.';
        ordersList.appendChild(empty);
        return;
    }

    const fragment = document.createDocumentFragment();
    state.orders.forEach((order) => {
        const card = document.createElement('article');
        card.className = 'order-card';
        card.innerHTML = `
            <strong>Order ${String(order._id || '').slice(-6)}</strong>
            <span>Status: ${order.orderStatus || 'placed'} | Payment: ${order.paymentStatus || 'pending'}</span>
            <span>Total: ${formatMoney(order.total || 0)} | Items: ${(order.items || []).length}</span>
        `;
        fragment.appendChild(card);
    });
    ordersList.appendChild(fragment);
}

async function loadOrders() {
    if (!window.apiClient?.orders) return;

    try {
        const response = await window.apiClient.orders.mine();
        state.orders = response?.data?.orders || [];
        renderOrders();
    } catch (error) {
        showToast(error.message, 'error');
    }
}

function renderGallery() {
    if (!galleryGrid) return;

    const fragment = document.createDocumentFragment();
    galleryItems.forEach((item) => {
        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.alt;
        image.loading = 'lazy';
        image.decoding = 'async';
        image.width = 500;
        image.height = 500;
        fragment.appendChild(image);
    });
    galleryGrid.appendChild(fragment);
}

function openModal(food, trigger) {
    state.activeFood = food;
    modalImage.src = food.image;
    modalImage.alt = food.name;
    modalTitle.textContent = food.name;
    modalPrice.textContent = `${food.displayPrice} - Was ${food.displayOriginalPrice || 'N/A'}`;
    modalDescription.textContent = food.description || food.shortDescription || '';
    modalOffer.textContent = food.displayOffer || food.offerText || '';
    modal.hidden = false;
    document.body.classList.add('modal-open');

    const closeButton = modal.querySelector('[data-close-modal]');
    if (closeButton) {
        closeButton.focus();
    }
}

function closeModal() {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    if (state.activeFood?.__trigger && typeof state.activeFood.__trigger.focus === 'function') {
        state.activeFood.__trigger.focus();
    }
    state.activeFood = null;
}

function setupRevealObserver() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        revealElements.forEach((element) => element.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                currentObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach((element) => observer.observe(element));
}

function populateCategories() {
    if (!catalogCategory) return;

    const categories = state.categories.length ? state.categories : fallbackCategories;
    const existing = catalogCategory.value;
    catalogCategory.replaceChildren();

    const allOption = document.createElement('option');
    allOption.value = '';
    allOption.textContent = 'All Categories';
    catalogCategory.appendChild(allOption);

    categories.forEach((category) => {
        const option = document.createElement('option');
        option.value = category.slug || category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        option.textContent = category.name;
        catalogCategory.appendChild(option);
    });

    catalogCategory.value = existing;
}

async function loadCatalog() {
    try {
        const [foodsResponse, categoriesResponse] = await Promise.all([
            window.apiClient.catalog.foods(),
            window.apiClient.catalog.categories()
        ]);

        state.foods = (foodsResponse?.data?.foods || []).map(normalizeFood);
        state.categories = categoriesResponse?.data?.categories || [];
        populateCategories();
        renderCatalog();
        showToast('Catalog loaded from the API.', 'success');
    } catch (error) {
        state.foods = fallbackFoodCatalog();
        state.categories = fallbackCategories;
        populateCategories();
        renderCatalog();
        showToast('Live catalog unavailable, showing fallback content.', 'info');
    }
}

async function refreshSession() {
    try {
        const response = await window.apiClient.auth.me();
        state.user = response?.data?.user || null;
        if (state.user) {
            setAuthStatus(`Welcome back, ${state.user.name}.`);
            showToast(`Signed in as ${state.user.name}.`, 'success');
            await loadOrders();
        } else {
            setAuthStatus('Sign in to save carts, wishlists, and orders.');
        }
    } catch (error) {
        state.user = null;
        setAuthStatus('Sign in to save carts, wishlists, and orders.');
    }
}

async function handleLoginSubmit(event) {
    event.preventDefault();
    const payload = serializeForm(event.currentTarget);
    try {
        await window.apiClient.auth.login(payload);
        showToast('Logged in successfully.', 'success');
        await refreshSession();
    } catch (error) {
        showToast(error.message, 'error');
    }
}

async function handleRegisterSubmit(event) {
    event.preventDefault();
    const payload = serializeForm(event.currentTarget);
    try {
        await window.apiClient.auth.register(payload);
        showToast('Account created and signed in.', 'success');
        await refreshSession();
        setActiveAuthTab('login');
    } catch (error) {
        showToast(error.message, 'error');
    }
}

async function submitForgotPassword(event) {
    event.preventDefault();
    const payload = serializeForm(event.currentTarget);
    try {
        await window.apiClient.request('/auth/forgot-password', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
        showToast('Reset token generated. Check the API response or server logs.', 'success');
    } catch (error) {
        showToast(error.message, 'error');
    }
}

async function submitResetPassword(event) {
    event.preventDefault();
    const payload = serializeForm(event.currentTarget);
    try {
        await window.apiClient.request('/auth/reset-password', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
        showToast('Password reset completed.', 'success');
        setActiveAuthTab('login');
    } catch (error) {
        showToast(error.message, 'error');
    }
}

async function handleLogout() {
    try {
        await window.apiClient.auth.logout();
        state.user = null;
        state.orders = [];
        state.cart = [];
        setAuthStatus('You have been logged out.');
        showToast('Logged out.', 'success');
        renderCart();
        renderOrders();
    } catch (error) {
        showToast(error.message, 'error');
    }
}

function resolveActiveFood(foodIndex) {
    const [sectionLabel, rawIndex] = foodIndex.split(':');
    const index = Number(rawIndex);
    const sourceItems = window.foodCatalogState?.[sectionLabel] || [];
    return sourceItems[index] || null;
}

async function handleModalAction(action) {
    const food = state.activeFood;
    if (!food) return;

    try {
        if (action === 'cart') {
            await window.apiClient.cart.add({ foodId: food._id || food.id, quantity: 1 });
            showToast(`${food.name} added to cart.`, 'success');
            await refreshCart();
            return;
        }

        if (action === 'wishlist') {
            await window.apiClient.wishlist.toggle({ foodId: food._id || food.id });
            showToast(`${food.name} saved to wishlist.`, 'success');
            return;
        }

        if (action === 'buy-now') {
            await window.apiClient.cart.add({ foodId: food._id || food.id, quantity: 1 });
            await refreshCart();
            openCartDrawer();
            showToast(`Proceed to checkout from the cart flow for ${food.name}.`, 'info');
        }
    } catch (error) {
        showToast(error.message, 'error');
    }
}

function wireAuthTabs() {
    authTabs.forEach((tab) => {
        tab.addEventListener('click', () => setActiveAuthTab(tab.dataset.authTab));
    });
}

function wireCatalogControls() {
    catalogSearch?.addEventListener('input', (event) => {
        state.filters.search = event.target.value;
        renderCatalog();
    });

    catalogCategory?.addEventListener('change', (event) => {
        state.filters.category = event.target.value;
        renderCatalog();
    });

    catalogSort?.addEventListener('change', (event) => {
        state.filters.sort = event.target.value;
        renderCatalog();
    });

    catalogClear?.addEventListener('click', () => {
        state.filters = { search: '', category: '', sort: 'featured' };
        if (catalogSearch) catalogSearch.value = '';
        if (catalogCategory) catalogCategory.value = '';
        if (catalogSort) catalogSort.value = 'featured';
        renderCatalog();
    });
}

function wireModalActions() {
    modal?.addEventListener('click', (event) => {
        if (event.target.closest('[data-close-modal]')) {
            closeModal();
            return;
        }

        const button = event.target.closest('[data-modal-action]');
        if (button) {
            handleModalAction(button.dataset.modalAction);
        }
    });

    modal?.querySelector('.modal__dialog')?.addEventListener('click', (event) => {
        event.stopPropagation();
    });
}

function wireFoodCardClicks() {
    document.addEventListener('click', (event) => {
        const cardButton = event.target.closest('[data-food-index]');
        if (!cardButton) return;

        const item = resolveActiveFood(cardButton.dataset.foodIndex);
        if (item) {
            item.__trigger = cardButton;
            openModal(item, cardButton);
        }
    });
}

function wireKeyboardShortcuts() {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.hidden) {
            closeModal();
        }
    });
}

function wireHeaderToggle() {
    navToggle?.addEventListener('click', () => {
        const isOpen = siteHeader.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.site-nav a').forEach((link) => {
        link.addEventListener('click', () => {
            if (siteHeader.classList.contains('is-open')) {
                siteHeader.classList.remove('is-open');
                navToggle?.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

function wireCartDrawer() {
    cartButton?.addEventListener('click', async () => {
        openCartDrawer();
        await refreshCart();
    });

    accountButton?.addEventListener('click', () => {
        setActiveAuthTab('login');
        document.querySelector('.login-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    cartDrawer?.addEventListener('click', async (event) => {
        if (event.target.closest('[data-close-drawer]')) {
            closeCartDrawer();
            return;
        }

        const actionButton = event.target.closest('[data-cart-action]');
        if (!actionButton) return;

        const foodId = actionButton.dataset.foodId;
        const currentItem = state.cart.find((item) => (item.food?._id || item.food)?.toString() === foodId);
        if (!currentItem) return;

        const nextQuantity = actionButton.dataset.cartAction === 'increase'
            ? currentItem.quantity + 1
            : actionButton.dataset.cartAction === 'decrease'
                ? currentItem.quantity - 1
                : 0;

        try {
            if (actionButton.dataset.cartAction === 'remove') {
                await window.apiClient.cart.remove(foodId);
            } else {
                await window.apiClient.cart.update({ foodId, quantity: nextQuantity });
            }
            await refreshCart();
        } catch (error) {
            showToast(error.message, 'error');
        }
    });

    checkoutForm?.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = serializeForm(checkoutForm);
        const address = {
            label: 'Delivery',
            name: formData.name,
            phone: formData.phone,
            line1: formData.line1,
            line2: formData.line2 || '',
            city: formData.city,
            state: formData.state,
            country: 'India',
            pincode: formData.pincode
        };

        try {
            const response = await window.apiClient.orders.checkout({
                address,
                paymentMethod: formData.paymentMethod,
                customerNote: formData.customerNote || ''
            });

            showToast(`Order placed successfully. Order #${response?.data?.order?._id?.slice(-6) || 'saved'}.`, 'success');
            await refreshCart();
            await loadOrders();
            checkoutForm.reset();
            closeCartDrawer();
        } catch (error) {
            showToast(error.message, 'error');
        }
    });

    saveCartButton?.addEventListener('click', async () => {
        try {
            await window.apiClient.cart.save({ items: getCartPayload() });
            showToast('Cart saved to your account.', 'success');
        } catch (error) {
            showToast(error.message, 'error');
        }
    });

    loadOrdersButton?.addEventListener('click', loadOrders);
}

function wireAuthForms() {
    loginForm?.addEventListener('submit', handleLoginSubmit);
    registerForm?.addEventListener('submit', handleRegisterSubmit);
    forgotForm?.addEventListener('submit', submitForgotPassword);
    resetForm?.addEventListener('submit', submitResetPassword);
    logoutButton?.addEventListener('click', handleLogout);
}

function initializeStaticSections() {
    renderGallery();
    setupRevealObserver();
}

async function bootstrap() {
    initializeStaticSections();
    wireAuthTabs();
    wireCatalogControls();
    wireModalActions();
    wireFoodCardClicks();
    wireKeyboardShortcuts();
    wireHeaderToggle();
    wireCartDrawer();
    wireAuthForms();

    setActiveAuthTab('login');
    populateCategories();
    state.foods = fallbackFoodCatalog();
    renderCatalog();
    renderCart();
    renderOrders();

    if (window.apiClient) {
        await Promise.allSettled([loadCatalog(), refreshSession(), refreshCart()]);
    }
}

bootstrap();
