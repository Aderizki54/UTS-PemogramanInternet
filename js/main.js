/**
 * VOLTWEAR - Main Core JavaScript
 * Handles navigation, mobile menu, search engine, catalog filters & sorting,
 * quick view modal, newsletter, and cart page rendering.
 */

// Global Filter & Catalog State
let activeCategory = 'all';
let activeGender = 'all';
let activeSort = 'featured';
let activeSearchQuery = '';
let activeSizeFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initSearch();
  initCatalogFilters();
  initQuickViewModal();
  initNewsletter();
  initCartPage();
});

/* ==========================================================================
   1. NAVBAR & ANNOUNCEMENT BAR
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.site-header');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Announcement Bar dismiss or ticker
  const announcementClose = document.getElementById('closeAnnouncementBtn');
  const announcementBar = document.getElementById('announcementBar');
  if (announcementClose && announcementBar) {
    announcementClose.addEventListener('click', () => {
      announcementBar.style.display = 'none';
    });
  }
}

/* ==========================================================================
   2. MOBILE NAVIGATION
   ========================================================================== */
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNavDrawer');
  const mobileOverlay = document.getElementById('mobileNavOverlay');
  const closeBtn = document.getElementById('closeMobileNavBtn');

  if (!hamburgerBtn || !mobileNav) return;

  const openNav = () => {
    mobileNav.classList.add('active');
    if (mobileOverlay) mobileOverlay.classList.add('active');
    document.body.classList.add('drawer-open');
  };

  const closeNav = () => {
    mobileNav.classList.remove('active');
    if (mobileOverlay) mobileOverlay.classList.remove('active');
    document.body.classList.remove('drawer-open');
  };

  hamburgerBtn.addEventListener('click', openNav);
  if (closeBtn) closeBtn.addEventListener('click', closeNav);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeNav);

  // Close when tapping mobile links
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });
}

/* ==========================================================================
   3. SEARCH MODAL & INSTANT ENGINE
   ========================================================================== */
function initSearch() {
  const searchTriggers = document.querySelectorAll('.search-trigger-btn');
  const searchModal = document.getElementById('searchModal');
  const closeSearchBtn = document.getElementById('closeSearchModalBtn');
  const searchInput = document.getElementById('searchInput');
  const searchResultsGrid = document.getElementById('searchResultsGrid');
  const searchEmpty = document.getElementById('searchEmpty');

  if (!searchModal) return;

  const openSearch = () => {
    searchModal.classList.add('active');
    document.body.classList.add('modal-open');
    if (searchInput) {
      searchInput.value = '';
      setTimeout(() => searchInput.focus(), 150);
    }
    renderLiveSearchResults('');
  };

  const closeSearch = () => {
    searchModal.classList.remove('active');
    document.body.classList.remove('modal-open');
  };

  searchTriggers.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openSearch();
  }));

  if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearch);

  // Escape key closes search & modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearch();
      closeCartDrawer();
      const qvModal = document.getElementById('quickViewModal');
      if (qvModal) qvModal.classList.remove('active');
      document.body.classList.remove('modal-open');
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      renderLiveSearchResults(query);
    });
  }
}

function renderLiveSearchResults(query) {
  const grid = document.getElementById('searchResultsGrid');
  const empty = document.getElementById('searchEmpty');
  const countDisplay = document.getElementById('searchCountDisplay');
  if (!grid) return;

  let filtered = VOLTWEAR_PRODUCTS;

  if (query) {
    filtered = VOLTWEAR_PRODUCTS.filter(p => {
      return p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.subtitle.toLowerCase().includes(query) ||
        (p.sku && p.sku.toLowerCase().includes(query));
    });
  }

  if (countDisplay) {
    countDisplay.textContent = query
      ? `Found ${filtered.length} products for "${query}"`
      : `Trending Products (${filtered.length})`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.style.display = 'block';
    return;
  }

  if (empty) empty.style.display = 'none';

  let html = '';
  filtered.forEach(p => {
    const mainImg = p.colors[0].images[0];
    html += `
      <div class="search-item-card">
        <a href="product.html?id=${p.id}" class="search-item-img">
          <img src="${mainImg}" alt="${p.name}" loading="lazy" />
        </a>
        <div class="search-item-info">
          <span class="search-item-cat">${p.category}</span>
          <h4 class="search-item-title"><a href="product.html?id=${p.id}">${p.name}</a></h4>
          <div class="search-item-price">
            <span class="price-val">$${p.price.toFixed(2)}</span>
            ${p.originalPrice ? `<span class="orig-val">$${p.originalPrice.toFixed(2)}</span>` : ''}
          </div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;
}

/* ==========================================================================
   4. CATALOG FILTERING & SORTING ENGINE (HOMEPAGE & SHOP)
   ========================================================================== */
function initCatalogFilters() {
  const catalogGrid = document.getElementById('mainCatalogGrid');
  if (!catalogGrid) return;

  // Category Buttons
  const categoryBtns = document.querySelectorAll('.filter-category-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      renderCatalogProducts();
    });
  });

  // Gender Filter
  const genderBtns = document.querySelectorAll('.filter-gender-btn');
  genderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      genderBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeGender = btn.getAttribute('data-gender');
      renderCatalogProducts();
    });
  });

  // Size Filter
  const sizeBtns = document.querySelectorAll('.filter-size-btn');
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeSizeFilter = btn.getAttribute('data-size');
      renderCatalogProducts();
    });
  });

  // Sort Dropdown
  const sortSelect = document.getElementById('catalogSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeSort = e.target.value;
      renderCatalogProducts();
    });
  }

  // Price range filter
  const priceRange = document.getElementById('filterPriceMax');
  const priceValDisplay = document.getElementById('filterPriceValue');
  if (priceRange && priceValDisplay) {
    priceRange.addEventListener('input', (e) => {
      priceValDisplay.textContent = `$${e.target.value}`;
      renderCatalogProducts();
    });
  }

  renderCatalogProducts();
  renderHomeSections();
}

function renderCatalogProducts() {
  const grid = document.getElementById('mainCatalogGrid');
  const emptyState = document.getElementById('catalogEmptyState');
  const productCountDisplay = document.getElementById('catalogProductCount');
  if (!grid) return;

  let products = [...VOLTWEAR_PRODUCTS];

  // Category filter
  if (activeCategory !== 'all') {
    products = products.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
  }

  // Gender filter
  if (activeGender !== 'all') {
    products = products.filter(p => p.gender.toLowerCase() === activeGender.toLowerCase() || p.gender.toLowerCase() === 'unisex');
  }

  // Size filter
  if (activeSizeFilter !== 'all') {
    products = products.filter(p => p.sizes && p.sizes.includes(activeSizeFilter));
  }

  // Price Range Filter
  const priceRange = document.getElementById('filterPriceMax');
  if (priceRange) {
    const maxPrice = parseFloat(priceRange.value);
    products = products.filter(p => p.price <= maxPrice);
  }

  // Sorting
  if (activeSort === 'price-low') {
    products.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-high') {
    products.sort((a, b) => b.price - a.price);
  } else if (activeSort === 'newest') {
    products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  } else if (activeSort === 'rating') {
    products.sort((a, b) => b.rating - a.rating);
  }

  if (productCountDisplay) {
    productCountDisplay.textContent = `Showing ${products.length} Products`;
  }

  if (products.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  let html = '';
  products.forEach(prod => {
    html += generateProductCardHtml(prod);
  });

  grid.innerHTML = html;
}

// Generate Standard Product Card HTML
function generateProductCardHtml(prod) {
  const defaultColor = prod.colors[0];
  const primaryImg = defaultColor.images[0];
  const hoverImg = defaultColor.images[1] || primaryImg;

  let colorDots = '';
  prod.colors.forEach((col, i) => {
    colorDots += `
      <span class="card-color-dot ${i === 0 ? 'active' : ''}" 
        style="background-color: ${col.hex};" 
        title="${col.name}">
      </span>
    `;
  });

  let sizePills = '';
  prod.sizes.forEach(sz => {
    sizePills += `<button type="button" class="card-quick-size" onclick="quickAddToCart(event, '${prod.id}', '${sz}')">${sz}</button>`;
  });

  return `
    <div class="product-card" data-id="${prod.id}">
      <div class="card-media">
        <a href="product.html?id=${prod.id}">
          <img src="${primaryImg}" alt="${prod.name}" class="primary-img" loading="lazy" />
          <img src="${hoverImg}" alt="${prod.name}" class="hover-img" loading="lazy" />
        </a>
        
        ${prod.badge ? `<span class="product-badge">${prod.badge}</span>` : ''}
        ${prod.discountPercent ? `<span class="product-discount-tag">-${prod.discountPercent}%</span>` : ''}

        <div class="card-quick-actions">
          <button class="quick-view-btn" onclick="openQuickView('${prod.id}')">
            <i class="fa-solid fa-eye"></i> Quick View
          </button>
        </div>

        <div class="card-size-hover-drawer">
          <span class="quick-size-label">Quick Add Size:</span>
          <div class="quick-size-buttons">
            ${sizePills}
          </div>
        </div>
      </div>

      <div class="card-content">
        <div class="card-color-dots">
          ${colorDots}
          <span class="color-count">+${prod.colors.length}</span>
        </div>
        <span class="card-category">${prod.category}</span>
        <h3 class="card-title"><a href="product.html?id=${prod.id}">${prod.name}</a></h3>
        <div class="card-price-row">
          <span class="current-price">$${prod.price.toFixed(2)}</span>
          ${prod.originalPrice ? `<span class="original-price">$${prod.originalPrice.toFixed(2)}</span>` : ''}
        </div>
        <div class="card-rating-row">
          <span class="stars"><i class="fa-solid fa-star"></i> ${prod.rating.toFixed(1)}</span>
          <span class="reviews-count">(${prod.reviewCount})</span>
        </div>
      </div>
    </div>
  `;
}

// Quick Add to Cart direct from Catalog Card
function quickAddToCart(e, productId, size) {
  e.preventDefault();
  e.stopPropagation();
  const prod = getProductById(productId);
  if (!prod) return;
  const defaultColor = prod.colors[0].name;
  const defaultImage = prod.colors[0].images[0];
  addToCart(prod, defaultColor, size, 1, defaultImage);
}

// Render Featured Sections on Homepage
function renderHomeSections() {
  const newArrivalsGrid = document.getElementById('newArrivalsGrid');
  const bestSellersGrid = document.getElementById('bestSellersGrid');

  if (newArrivalsGrid) {
    const items = getNewArrivals(4);
    let html = '';
    items.forEach(item => html += generateProductCardHtml(item));
    newArrivalsGrid.innerHTML = html;
  }

  if (bestSellersGrid) {
    const items = getBestSellers(4);
    let html = '';
    items.forEach(item => html += generateProductCardHtml(item));
    bestSellersGrid.innerHTML = html;
  }
}

/* ==========================================================================
   5. QUICK VIEW MODAL
   ========================================================================== */
let qvProduct = null;
let qvColorIndex = 0;
let qvSelectedSize = null;

function initQuickViewModal() {
  const modal = document.getElementById('quickViewModal');
  const closeBtn = document.getElementById('closeQuickViewBtn');

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    }
  });

  const qvAddBtn = document.getElementById('qvAddToCartBtn');
  if (qvAddBtn) {
    qvAddBtn.addEventListener('click', () => {
      if (!qvSelectedSize) {
        showToast("⚠️ Please select a size first", "warning");
        return;
      }
      const color = qvProduct.colors[qvColorIndex];
      addToCart(qvProduct, color.name, qvSelectedSize, 1, color.images[0]);
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    });
  }
}

function openQuickView(productId) {
  qvProduct = getProductById(productId);
  if (!qvProduct) return;

  qvColorIndex = 0;
  qvSelectedSize = null;

  const modal = document.getElementById('quickViewModal');
  const imgEl = document.getElementById('qvProductImg');
  const titleEl = document.getElementById('qvProductTitle');
  const priceEl = document.getElementById('qvProductPrice');
  const descEl = document.getElementById('qvProductDesc');
  const swatchesEl = document.getElementById('qvColorSwatches');
  const sizesEl = document.getElementById('qvSizes');
  const fullLink = document.getElementById('qvFullDetailsLink');

  if (!modal) return;

  const color = qvProduct.colors[0];
  if (imgEl) imgEl.src = color.images[0];
  if (titleEl) titleEl.textContent = qvProduct.name;
  if (priceEl) priceEl.innerHTML = `$${qvProduct.price.toFixed(2)} ${qvProduct.originalPrice ? `<span class="orig-price">$${qvProduct.originalPrice.toFixed(2)}</span>` : ''}`;
  if (descEl) descEl.textContent = qvProduct.description.substring(0, 160) + '...';
  if (fullLink) fullLink.href = `product.html?id=${qvProduct.id}`;

  // Color Swatches
  if (swatchesEl) {
    let sHtml = '';
    qvProduct.colors.forEach((c, idx) => {
      sHtml += `
        <button type="button" class="color-swatch-btn ${idx === 0 ? 'active' : ''}" 
          style="--swatch-color: ${c.hex};" 
          onclick="handleQuickViewColor(${idx})"
          title="${c.name}">
          <span class="swatch-circle" style="background-color: ${c.hex};"></span>
        </button>
      `;
    });
    swatchesEl.innerHTML = sHtml;
  }

  // Sizes
  if (sizesEl) {
    let szHtml = '';
    qvProduct.sizes.forEach(sz => {
      szHtml += `
        <button type="button" class="size-pill-btn" onclick="handleQuickViewSize(this, '${sz}')">${sz}</button>
      `;
    });
    sizesEl.innerHTML = szHtml;
  }

  modal.classList.add('active');
  document.body.classList.add('modal-open');
}

function handleQuickViewColor(idx) {
  qvColorIndex = idx;
  const color = qvProduct.colors[idx];
  const imgEl = document.getElementById('qvProductImg');
  if (imgEl) imgEl.src = color.images[0];

  document.querySelectorAll('#qvColorSwatches .color-swatch-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === idx);
  });
}

function handleQuickViewSize(btn, sz) {
  qvSelectedSize = sz;
  document.querySelectorAll('#qvSizes .size-pill-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/* ==========================================================================
   6. NEWSLETTER SUBSCRIPTION
   ========================================================================== */
function initNewsletter() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      if (!emailInput || !emailInput.value) return;

      const email = emailInput.value.trim();
      const btn = form.querySelector('button[type="submit"]');

      if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;
      }

      setTimeout(() => {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = `✓ UNLOCKED`;
        }
        showToast(`⚡ Welcome to the Volt Club! Use code <strong>VOLT15</strong> for 15% off.`, "success");
        emailInput.value = '';
      }, 700);
    });
  });
}

/* ==========================================================================
   7. DEDICATED CART PAGE LOGIC (cart.html)
   ========================================================================== */
function initCartPage() {
  const cartTableBody = document.getElementById('cartPageItemsTable');
  if (!cartTableBody) return; // not on cart.html

  renderCartPage();

  window.addEventListener('voltwear_cart_updated', renderCartPage);

  // Promo Code Form
  const promoForm = document.getElementById('cartPromoForm');
  if (promoForm) {
    promoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const codeInput = document.getElementById('promoCodeInput');
      if (!codeInput) return;
      const res = applyCoupon(codeInput.value);
      if (res.success) {
        showToast(res.message, "success");
        codeInput.value = '';
      } else {
        showToast(res.message, "warning");
      }
    });
  }

  // Checkout Simulation Trigger
  const checkoutBtn = document.getElementById('cartCheckoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', openCheckoutModal);
  }
}

function renderCartPage() {
  const tableBody = document.getElementById('cartPageItemsTable');
  const emptyState = document.getElementById('cartPageEmpty');
  const cartContent = document.getElementById('cartPageContent');
  if (!tableBody) return;

  const cart = getCart();
  const summary = calculateOrderSummary();

  if (cart.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (cartContent) cartContent.style.display = 'none';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (cartContent) cartContent.style.display = 'grid';

  // Free shipping progress bar on full page
  const shippingMeter = document.getElementById('cartPageShippingMeter');
  if (shippingMeter) {
    if (summary.isFreeShippingUnlocked) {
      shippingMeter.innerHTML = `
        <div class="shipping-meter-text unlocked">
          <span>⚡ <strong>FREE EXPRESS WORLDWIDE SHIPPING UNLOCKED!</strong></span>
        </div>
        <div class="meter-bar-track"><div class="meter-bar-fill unlocked" style="width: 100%"></div></div>
      `;
    } else {
      shippingMeter.innerHTML = `
        <div class="shipping-meter-text">
          <span>Add <strong>$${summary.amountToFreeShipping.toFixed(2)}</strong> more to unlock <strong>Free Worldwide Shipping</strong></span>
        </div>
        <div class="meter-bar-track"><div class="meter-bar-fill" style="width: ${summary.freeShippingProgress}%"></div></div>
      `;
    }
  }

  // Render Table Rows
  let rowsHtml = '';
  cart.forEach((item, index) => {
    rowsHtml += `
      <tr class="cart-table-row">
        <td class="cart-col-product">
          <div class="cart-product-cell">
            <a href="product.html?id=${item.productId}" class="cart-cell-thumb">
              <img src="${item.image}" alt="${item.name}" loading="lazy" />
            </a>
            <div class="cart-cell-info">
              <h3 class="cell-title"><a href="product.html?id=${item.productId}">${item.name}</a></h3>
              <div class="cell-variants">
                <span>Color: <strong>${item.color}</strong></span>
                <span>•</span>
                <span>Size: <strong>${item.size}</strong></span>
              </div>
              <div class="cell-price-mobile">$${item.price.toFixed(2)}</div>
              <button type="button" class="cell-remove-btn" onclick="removeFromCart(${index})">
                <i class="fa-solid fa-trash-can"></i> Remove
              </button>
            </div>
          </div>
        </td>

        <td class="cart-col-price">
          <div class="price-val">$${item.price.toFixed(2)}</div>
          ${item.originalPrice ? `<div class="orig-val">$${item.originalPrice.toFixed(2)}</div>` : ''}
        </td>

        <td class="cart-col-quantity">
          <div class="qty-stepper">
            <button type="button" class="qty-btn" onclick="updateCartQuantity(${index}, ${item.quantity - 1})">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button type="button" class="qty-btn" onclick="updateCartQuantity(${index}, ${item.quantity + 1})">+</button>
          </div>
        </td>

        <td class="cart-col-total">
          <span class="item-subtotal-val">$${(item.price * item.quantity).toFixed(2)}</span>
        </td>
      </tr>
    `;
  });

  tableBody.innerHTML = rowsHtml;

  // Render Summary Box
  const subtotalVal = document.getElementById('summarySubtotalVal');
  const discountRow = document.getElementById('summaryDiscountRow');
  const discountVal = document.getElementById('summaryDiscountVal');
  const couponBadge = document.getElementById('summaryCouponBadge');
  const shippingVal = document.getElementById('summaryShippingVal');
  const taxVal = document.getElementById('summaryTaxVal');
  const grandTotalVal = document.getElementById('summaryGrandTotalVal');

  if (subtotalVal) subtotalVal.textContent = `$${summary.subtotal.toFixed(2)}`;

  if (discountRow) {
    if (summary.discount > 0) {
      discountRow.style.display = 'flex';
      if (discountVal) discountVal.textContent = `-$${summary.discount.toFixed(2)}`;
      if (couponBadge) {
        couponBadge.innerHTML = `
          <span>Code: <strong>${summary.coupon.code}</strong> (${summary.coupon.discountPercent}% OFF)</span>
          <button type="button" class="remove-coupon-btn" onclick="removeCoupon()">&times;</button>
        `;
        couponBadge.style.display = 'inline-flex';
      }
    } else {
      discountRow.style.display = 'none';
      if (couponBadge) couponBadge.style.display = 'none';
    }
  }

  if (shippingVal) {
    shippingVal.textContent = summary.shipping === 0 ? 'FREE' : `$${summary.shipping.toFixed(2)}`;
  }

  if (taxVal) taxVal.textContent = `$${summary.tax.toFixed(2)}`;
  if (grandTotalVal) grandTotalVal.textContent = `$${summary.total.toFixed(2)}`;
}

// Checkout Modal Simulation
function openCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (!modal) return;

  const summary = calculateOrderSummary();
  const checkoutTotal = document.getElementById('checkoutModalTotal');
  if (checkoutTotal) checkoutTotal.textContent = `$${summary.total.toFixed(2)}`;

  modal.classList.add('active');
  document.body.classList.add('modal-open');

  const form = document.getElementById('mockCheckoutForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> PROCESSING PAYMENT...`;
      }

      setTimeout(() => {
        clearCart();
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
        showToast("⚡ ORDER PLACED! Confirmation email sent with tracking number.", "success");
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1200);
      }, 1500);
    });
  }

  const closeBtn = document.getElementById('closeCheckoutModalBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    });
  }
}
