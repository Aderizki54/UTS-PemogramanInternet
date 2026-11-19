/**
 * VOLTWEAR - Shopping Cart Engine
 * Manages LocalStorage Cart State, Drawer UI, Free Shipping Meter, and Calculations
 */

const CART_STORAGE_KEY = 'voltwear_cart';
const COUPON_STORAGE_KEY = 'voltwear_coupon';
const FREE_SHIPPING_THRESHOLD = 100.00;
const STANDARD_SHIPPING_FEE = 9.99;

// Available promo codes
const VALID_PROMO_CODES = {
  'VOLT15': { discountPercent: 15, description: '15% Off Your Entire Order' },
  'PUMP10': { discountPercent: 10, description: '10% Off Your Entire Order' },
  'FREESHIP': { freeShipping: true, description: 'Free Express Shipping' }
};

// Retrieve Cart from LocalStorage
function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Error reading cart from localStorage", e);
    return [];
  }
}

// Save Cart to LocalStorage and trigger updates
function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('voltwear_cart_updated', { detail: { cart } }));
    updateCartBadges();
    renderCartDrawer();
  } catch (e) {
    console.error("Error saving cart to localStorage", e);
  }
}

// Active Coupon Management
function getActiveCoupon() {
  try {
    const raw = localStorage.getItem(COUPON_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function applyCoupon(code) {
  const cleanCode = (code || '').trim().toUpperCase();
  if (VALID_PROMO_CODES[cleanCode]) {
    const couponData = { code: cleanCode, ...VALID_PROMO_CODES[cleanCode] };
    localStorage.setItem(COUPON_STORAGE_KEY, JSON.stringify(couponData));
    window.dispatchEvent(new CustomEvent('voltwear_cart_updated'));
    return { success: true, message: `Coupon ${cleanCode} applied! ${couponData.description}` };
  }
  return { success: false, message: 'Invalid or expired promo code. Try VOLT15 for 15% off!' };
}

function removeCoupon() {
  localStorage.removeItem(COUPON_STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('voltwear_cart_updated'));
}

// Add Item to Cart
function addToCart(product, colorName, size, quantity = 1, customImage = null) {
  if (!product) return false;
  if (!size) {
    showToast("⚠️ Please select a size before adding to bag.", "warning");
    return false;
  }

  const cart = getCart();
  const selectedColor = colorName || (product.colors && product.colors[0] ? product.colors[0].name : "Default");
  const itemImage = customImage || (product.colors && product.colors[0] ? product.colors[0].images[0] : "");

  // Check if identical variant already exists in cart
  const existingIndex = cart.findIndex(
    item => String(item.productId) === String(product.id) &&
      item.color === selectedColor &&
      item.size === size
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += Number(quantity);
  } else {
    cart.push({
      productId: String(product.id),
      sku: product.sku || `VW-${product.id}`,
      name: product.name,
      subtitle: product.subtitle || '',
      price: Number(product.price),
      originalPrice: product.originalPrice ? Number(product.originalPrice) : null,
      color: selectedColor,
      size: size,
      image: itemImage,
      quantity: Number(quantity),
      addedAt: Date.now()
    });
  }

  saveCart(cart);
  showToast(`⚡ Added to Bag: ${product.name} (${selectedColor} / Size ${size})`, "success");

  // Smoothly open cart drawer to provide immediate feedback
  openCartDrawer();
  return true;
}

// Update Item Quantity
function updateCartQuantity(index, newQty) {
  const cart = getCart();
  if (index < 0 || index >= cart.length) return;

  const qty = parseInt(newQty, 10);
  if (qty <= 0) {
    removeFromCart(index);
    return;
  }

  cart[index].quantity = qty;
  saveCart(cart);
}

// Remove Item from Cart
function removeFromCart(index) {
  const cart = getCart();
  if (index < 0 || index >= cart.length) return;
  const removedItem = cart.splice(index, 1)[0];
  saveCart(cart);
  if (removedItem) {
    showToast(`Removed ${removedItem.name} from bag`, "info");
  }
}

// Clear entire cart
function clearCart() {
  saveCart([]);
}

// Financial Calculations
function getCartSubtotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getCartCount() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function calculateOrderSummary() {
  const subtotal = getCartSubtotal();
  const coupon = getActiveCoupon();
  let discount = 0;
  let shipping = subtotal > 0 ? STANDARD_SHIPPING_FEE : 0;

  if (coupon) {
    if (coupon.discountPercent) {
      discount = (subtotal * coupon.discountPercent) / 100;
    }
    if (coupon.freeShipping) {
      shipping = 0;
    }
  }

  // Free shipping threshold qualification
  if (subtotal >= FREE_SHIPPING_THRESHOLD) {
    shipping = 0;
  }

  const taxableSubtotal = Math.max(0, subtotal - discount);
  const tax = taxableSubtotal > 0 ? taxableSubtotal * 0.08 : 0; // 8% estimated tax
  const total = taxableSubtotal + shipping + tax;

  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return {
    subtotal,
    discount,
    shipping,
    tax,
    total,
    coupon,
    freeShippingProgress,
    amountToFreeShipping,
    isFreeShippingUnlocked: subtotal >= FREE_SHIPPING_THRESHOLD || (coupon && coupon.freeShipping)
  };
}

// Update Cart Badge Count Across All Pages
function updateCartBadges() {
  const count = getCartCount();
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(badge => {
    badge.textContent = count;
    if (count > 0) {
      badge.classList.remove('hidden');
      badge.classList.add('pulse-anim');
      setTimeout(() => badge.classList.remove('pulse-anim'), 400);
    } else {
      badge.classList.add('hidden');
    }
  });
}

// Cart Drawer Controller
function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartDrawerOverlay');
  if (drawer && overlay) {
    renderCartDrawer();
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('drawer-open');
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartDrawerOverlay');
  if (drawer && overlay) {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('drawer-open');
  }
}

// Render Cart Drawer Content
function renderCartDrawer() {
  const container = document.getElementById('cartDrawerItems');
  const emptyState = document.getElementById('cartDrawerEmpty');
  const footer = document.getElementById('cartDrawerFooter');
  const freeShippingMeter = document.getElementById('cartFreeShippingMeter');
  if (!container) return;

  const cart = getCart();
  const summary = calculateOrderSummary();

  // Free Shipping Progress Bar in Drawer
  if (freeShippingMeter) {
    if (cart.length === 0) {
      freeShippingMeter.innerHTML = `
        <div class="shipping-meter-text">
          <span>Add items to unlock <strong>Free Express Shipping</strong> ($100+)</span>
        </div>
        <div class="meter-bar-track"><div class="meter-bar-fill" style="width: 0%"></div></div>
      `;
    } else if (summary.isFreeShippingUnlocked) {
      freeShippingMeter.innerHTML = `
        <div class="shipping-meter-text unlocked">
          <span>⚡ <strong>FREE EXPRESS SHIPPING UNLOCKED!</strong></span>
        </div>
        <div class="meter-bar-track"><div class="meter-bar-fill unlocked" style="width: 100%"></div></div>
      `;
    } else {
      freeShippingMeter.innerHTML = `
        <div class="shipping-meter-text">
          <span>Add <strong>$${summary.amountToFreeShipping.toFixed(2)}</strong> more for <strong>Free Worldwide Shipping</strong></span>
        </div>
        <div class="meter-bar-track"><div class="meter-bar-fill" style="width: ${summary.freeShippingProgress}%"></div></div>
      `;
    }
  }

  // Cart Items or Empty State
  if (cart.length === 0) {
    if (emptyState) emptyState.style.display = 'flex';
    if (container) container.style.display = 'none';
    if (footer) footer.style.display = 'none';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (container) container.style.display = 'block';
  if (footer) footer.style.display = 'block';

  let itemsHtml = '';
  cart.forEach((item, index) => {
    itemsHtml += `
      <div class="drawer-item" data-index="${index}">
        <div class="drawer-item-img-wrap">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="drawer-item-details">
          <div class="drawer-item-header">
            <h4 class="drawer-item-title"><a href="product.html?id=${item.productId}">${item.name}</a></h4>
            <button class="drawer-item-remove" onclick="removeFromCart(${index})" title="Remove item">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
          <div class="drawer-item-meta">
            <span class="meta-tag">${item.color}</span>
            <span class="meta-separator">•</span>
            <span class="meta-tag">Size: <strong>${item.size}</strong></span>
          </div>
          <div class="drawer-item-bottom">
            <div class="qty-stepper">
              <button type="button" class="qty-btn" onclick="updateCartQuantity(${index}, ${item.quantity - 1})">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button type="button" class="qty-btn" onclick="updateCartQuantity(${index}, ${item.quantity + 1})">+</button>
            </div>
            <div class="drawer-item-price">
              ${item.originalPrice ? `<span class="orig-price">$${(item.originalPrice * item.quantity).toFixed(2)}</span>` : ''}
              <span class="curr-price">$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = itemsHtml;

  // Render Footer calculations
  if (footer) {
    const subtotalEl = document.getElementById('drawerSubtotalVal');
    const totalEl = document.getElementById('drawerTotalVal');
    const shippingEl = document.getElementById('drawerShippingVal');

    if (subtotalEl) subtotalEl.textContent = `$${summary.subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = summary.shipping === 0 ? 'FREE' : `$${summary.shipping.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${summary.total.toFixed(2)}`;
  }
}

// Toast Notification Engine
function showToast(message, type = "success") {
  let toastContainer = document.getElementById('voltwearToastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'voltwearToastContainer';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast-item toast-${type}`;

  let iconClass = 'fa-solid fa-bolt';
  if (type === 'warning') iconClass = 'fa-solid fa-triangle-exclamation';
  if (type === 'info') iconClass = 'fa-solid fa-circle-info';

  toast.innerHTML = `
    <div class="toast-icon"><i class="${iconClass}"></i></div>
    <div class="toast-message">${message}</div>
    <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
  `;

  toastContainer.appendChild(toast);

  // Auto remove after 3.8s
  setTimeout(() => {
    toast.classList.add('toast-fade-out');
    setTimeout(() => toast.remove(), 400);
  }, 3800);
}

// Global Event Listeners for Cart sync
window.addEventListener('storage', (e) => {
  if (e.key === CART_STORAGE_KEY) {
    updateCartBadges();
    renderCartDrawer();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadges();
  renderCartDrawer();

  // Attach overlay click to close
  const overlay = document.getElementById('cartDrawerOverlay');
  if (overlay) {
    overlay.addEventListener('click', closeCartDrawer);
  }

  const closeBtn = document.getElementById('closeCartDrawerBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeCartDrawer);
  }

  // Cart bag icons in navbar
  document.querySelectorAll('.cart-trigger-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });
});
