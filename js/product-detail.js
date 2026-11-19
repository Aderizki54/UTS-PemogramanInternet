/**
 * VOLTWEAR - Product Detail Page Engine
 * Handles dynamic product loading, gallery switcher, zoom lens, swatches, 
 * size guide modal, accordions, review system, and sticky add-to-cart bar.
 */

let currentProduct = null;
let currentColorIndex = 0;
let currentImageIndex = 0;
let selectedSize = null;
let selectedQuantity = 1;

document.addEventListener('DOMContentLoaded', () => {
  initProductDetail();
});

function initProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || '4185';

  currentProduct = getProductById(productId);
  if (!currentProduct) {
    currentProduct = VOLTWEAR_PRODUCTS[0];
  }

  // Update Page Title
  document.title = `${currentProduct.name} | VOLTWEAR® Official`;

  // Render Product Components
  renderBreadcrumbs();
  renderProductInfo();
  renderColorSwatches();
  renderSizes();
  renderGallery();
  renderAccordions();
  renderReviews();
  renderRelatedProducts();
  initStickyBar();
  initZoomLens();
  initSizeGuideModal();
  initReviewModal();

  // Quantity Stepper Handlers
  const qtyMinus = document.getElementById('pdpQtyMinus');
  const qtyPlus = document.getElementById('pdpQtyPlus');
  const qtyInput = document.getElementById('pdpQtyInput');

  if (qtyMinus && qtyPlus && qtyInput) {
    qtyMinus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value, 10) || 1;
      if (val > 1) {
        val--;
        qtyInput.value = val;
        selectedQuantity = val;
      }
    });

    qtyPlus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value, 10) || 1;
      if (val < 10) {
        val++;
        qtyInput.value = val;
        selectedQuantity = val;
      }
    });

    qtyInput.addEventListener('change', () => {
      let val = parseInt(qtyInput.value, 10);
      if (isNaN(val) || val < 1) val = 1;
      if (val > 10) val = 10;
      qtyInput.value = val;
      selectedQuantity = val;
    });
  }

  // Add to Bag Button
  const addToCartBtn = document.getElementById('pdpAddToCartBtn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', handleAddToCart);
  }

  // Buy Now Button
  const buyNowBtn = document.getElementById('pdpBuyNowBtn');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      if (handleAddToCart()) {
        setTimeout(() => {
          window.location.href = 'cart.html';
        }, 400);
      }
    });
  }
}

// Render Breadcrumbs
function renderBreadcrumbs() {
  const breadcrumb = document.getElementById('pdpBreadcrumbs');
  if (!breadcrumb) return;

  breadcrumb.innerHTML = `
    <a href="index.html">Home</a>
    <i class="fa-solid fa-chevron-right divider"></i>
    <a href="index.html#catalog">${currentProduct.gender || 'Men'}</a>
    <i class="fa-solid fa-chevron-right divider"></i>
    <a href="index.html#catalog">${currentProduct.category}</a>
    <i class="fa-solid fa-chevron-right divider"></i>
    <span class="current">${currentProduct.name}</span>
  `;
}

// Render Product Information
function renderProductInfo() {
  const titleEl = document.getElementById('pdpTitle');
  const subtitleEl = document.getElementById('pdpSubtitle');
  const skuEl = document.getElementById('pdpSku');
  const priceCurrentEl = document.getElementById('pdpPriceCurrent');
  const priceOriginalEl = document.getElementById('pdpPriceOriginal');
  const discountBadgeEl = document.getElementById('pdpDiscountBadge');
  const installmentsEl = document.getElementById('pdpInstallments');
  const ratingStarsEl = document.getElementById('pdpRatingStars');
  const ratingScoreEl = document.getElementById('pdpRatingScore');
  const reviewCountEl = document.getElementById('pdpReviewCount');
  const descriptionEl = document.getElementById('pdpDescription');
  const materialEl = document.getElementById('pdpMaterial');
  const fitEl = document.getElementById('pdpFit');
  const modelInfoEl = document.getElementById('pdpModelInfo');
  const badgeEl = document.getElementById('pdpBadge');

  if (titleEl) titleEl.textContent = currentProduct.name;
  if (subtitleEl) subtitleEl.textContent = currentProduct.subtitle;
  if (skuEl) skuEl.textContent = `SKU: ${currentProduct.sku}`;
  if (priceCurrentEl) priceCurrentEl.textContent = `$${currentProduct.price.toFixed(2)}`;

  if (currentProduct.originalPrice && currentProduct.originalPrice > currentProduct.price) {
    if (priceOriginalEl) {
      priceOriginalEl.textContent = `$${currentProduct.originalPrice.toFixed(2)}`;
      priceOriginalEl.style.display = 'inline-block';
    }
    if (discountBadgeEl) {
      discountBadgeEl.textContent = `SAVE ${currentProduct.discountPercent}%`;
      discountBadgeEl.style.display = 'inline-block';
    }
  } else {
    if (priceOriginalEl) priceOriginalEl.style.display = 'none';
    if (discountBadgeEl) discountBadgeEl.style.display = 'none';
  }

  if (installmentsEl) {
    const installment = (currentProduct.price / 4).toFixed(2);
    installmentsEl.innerHTML = `Or 4 interest-free payments of <strong>$${installment}</strong> with <span class="klarna-text">Klarna</span> or <span class="afterpay-text">afterpay</span> <i class="fa-solid fa-circle-info info-icon"></i>`;
  }

  if (ratingStarsEl) {
    ratingStarsEl.innerHTML = renderStarRating(currentProduct.rating);
  }
  if (ratingScoreEl) ratingScoreEl.textContent = currentProduct.rating.toFixed(1);
  if (reviewCountEl) reviewCountEl.textContent = `(${currentProduct.reviewCount} Reviews)`;

  if (descriptionEl) descriptionEl.textContent = currentProduct.description;
  if (materialEl) materialEl.textContent = currentProduct.materialInfo;
  if (fitEl) fitEl.textContent = currentProduct.fit;
  if (modelInfoEl) modelInfoEl.innerHTML = `<strong>Fit Notice:</strong> ${currentProduct.modelInfo}`;

  if (badgeEl) {
    if (currentProduct.badge) {
      badgeEl.textContent = currentProduct.badge;
      badgeEl.style.display = 'inline-block';
    } else {
      badgeEl.style.display = 'none';
    }
  }
}

// Star Rating HTML Helper
function renderStarRating(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.4;
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars += '<i class="fa-solid fa-star"></i>';
    } else if (i === fullStars + 1 && hasHalf) {
      stars += '<i class="fa-solid fa-star-half-stroke"></i>';
    } else {
      stars += '<i class="fa-regular fa-star"></i>';
    }
  }
  return stars;
}

// Render Color Swatches
function renderColorSwatches() {
  const container = document.getElementById('pdpColorSwatches');
  const colorLabel = document.getElementById('pdpSelectedColorName');
  if (!container) return;

  const colors = currentProduct.colors || [];
  if (colors.length === 0) return;

  if (colorLabel) {
    colorLabel.textContent = colors[currentColorIndex].name;
  }

  let html = '';
  colors.forEach((col, idx) => {
    const isActive = idx === currentColorIndex;
    html += `
      <button type="button" 
        class="color-swatch-btn ${isActive ? 'active' : ''}" 
        data-index="${idx}" 
        title="${col.name}"
        style="--swatch-color: ${col.hex};"
      >
        <span class="swatch-circle" style="background-color: ${col.hex};"></span>
        <span class="swatch-tooltip">${col.name}</span>
      </button>
    `;
  });

  container.innerHTML = html;

  container.querySelectorAll('.color-swatch-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      switchColor(idx);
    });
  });
}

function switchColor(idx) {
  if (idx === currentColorIndex) return;
  currentColorIndex = idx;
  currentImageIndex = 0; // reset to primary image of new color

  const color = currentProduct.colors[currentColorIndex];
  const colorLabel = document.getElementById('pdpSelectedColorName');
  if (colorLabel && color) {
    colorLabel.textContent = color.name;
  }

  // Update active class on swatches
  document.querySelectorAll('#pdpColorSwatches .color-swatch-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === currentColorIndex);
  });

  renderGallery();
  updateStickyBar();
}

// Render Size Selector
function renderSizes() {
  const container = document.getElementById('pdpSizeSelector');
  const stockAlert = document.getElementById('pdpStockAlert');
  if (!container) return;

  const sizes = currentProduct.sizes || ["S", "M", "L", "XL", "XXL"];
  let html = '';

  sizes.forEach(sz => {
    const stockQty = currentProduct.stock ? (currentProduct.stock[sz] ?? 10) : 10;
    const isOutOfStock = stockQty === 0;
    const isSelected = selectedSize === sz;

    html += `
      <button type="button" 
        class="size-pill-btn ${isSelected ? 'active' : ''} ${isOutOfStock ? 'disabled' : ''}" 
        data-size="${sz}"
        ${isOutOfStock ? 'disabled' : ''}
      >
        ${sz}
        ${isOutOfStock ? '<span class="strike-line"></span>' : ''}
      </button>
    `;
  });

  container.innerHTML = html;

  container.querySelectorAll('.size-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('disabled')) return;
      const sz = btn.getAttribute('data-size');
      selectSize(sz);
    });
  });

  updateStockAlert();
}

function selectSize(sz) {
  selectedSize = sz;
  document.querySelectorAll('#pdpSizeSelector .size-pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-size') === sz);
  });

  // Hide validation warning if previously shown
  const validationAlert = document.getElementById('pdpSizeValidation');
  if (validationAlert) validationAlert.style.display = 'none';

  updateStockAlert();
  updateStickyBar();
}

function updateStockAlert() {
  const stockAlert = document.getElementById('pdpStockAlert');
  if (!stockAlert) return;

  if (!selectedSize) {
    stockAlert.style.display = 'none';
    return;
  }

  const stockQty = currentProduct.stock ? (currentProduct.stock[selectedSize] ?? 10) : 10;
  if (stockQty <= 5 && stockQty > 0) {
    stockAlert.innerHTML = `<i class="fa-solid fa-fire"></i> <strong>High Demand:</strong> Only ${stockQty} left in size <strong>${selectedSize}</strong>. Order soon!`;
    stockAlert.style.display = 'flex';
  } else {
    stockAlert.style.display = 'none';
  }
}

// Render Gallery (Main Image & Thumbnails)
function renderGallery() {
  const mainImg = document.getElementById('pdpMainImage');
  const thumbContainer = document.getElementById('pdpThumbnails');
  const color = currentProduct.colors[currentColorIndex];
  const images = (color && color.images && color.images.length > 0)
    ? color.images
    : [currentProduct.colors[0].images[0]];

  if (mainImg) {
    mainImg.src = images[currentImageIndex] || images[0];
    mainImg.alt = `${currentProduct.name} - ${color.name}`;
    mainImg.dataset.zoomSrc = images[currentImageIndex] || images[0];
  }

  if (thumbContainer) {
    let thumbHtml = '';
    images.forEach((imgSrc, idx) => {
      const isActive = idx === currentImageIndex;
      thumbHtml += `
        <div class="gallery-thumb-item ${isActive ? 'active' : ''}" data-index="${idx}">
          <img src="${imgSrc}" alt="${currentProduct.name} thumbnail ${idx + 1}" loading="lazy" />
        </div>
      `;
    });
    thumbContainer.innerHTML = thumbHtml;

    thumbContainer.querySelectorAll('.gallery-thumb-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.getAttribute('data-index'), 10);
        switchMainImage(idx);
      });
    });
  }
}

function switchMainImage(idx) {
  currentImageIndex = idx;
  const color = currentProduct.colors[currentColorIndex];
  const images = color.images || [];
  const mainImg = document.getElementById('pdpMainImage');

  if (mainImg && images[idx]) {
    mainImg.classList.add('fade-transition');
    setTimeout(() => {
      mainImg.src = images[idx];
      mainImg.dataset.zoomSrc = images[idx];
      mainImg.classList.remove('fade-transition');
    }, 150);
  }

  document.querySelectorAll('#pdpThumbnails .gallery-thumb-item').forEach((item, i) => {
    item.classList.toggle('active', i === idx);
  });
}

// Image Zoom Lens System
function initZoomLens() {
  const container = document.getElementById('pdpMainImageContainer');
  const img = document.getElementById('pdpMainImage');
  const zoomLens = document.getElementById('pdpZoomLens');
  const zoomModal = document.getElementById('pdpLightboxModal');
  const zoomModalImg = document.getElementById('pdpLightboxImg');
  const expandBtn = document.getElementById('pdpExpandImageBtn');

  if (!container || !img) return;

  // Zoom on hover (Desktop)
  container.addEventListener('mousemove', (e) => {
    if (window.innerWidth <= 992) return; // desktop only
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    img.style.transform = 'scale(1.85)';
  });

  container.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
    img.style.transformOrigin = 'center center';
  });

  // Lightbox Fullscreen Modal
  const openLightbox = () => {
    if (zoomModal && zoomModalImg) {
      zoomModalImg.src = img.src;
      zoomModal.classList.add('active');
      document.body.classList.add('modal-open');
    }
  };

  if (expandBtn) expandBtn.addEventListener('click', openLightbox);
  img.addEventListener('click', openLightbox);

  const closeLightboxBtn = document.getElementById('closeLightboxBtn');
  if (closeLightboxBtn && zoomModal) {
    closeLightboxBtn.addEventListener('click', () => {
      zoomModal.classList.remove('active');
      document.body.classList.remove('modal-open');
    });
  }
}

// Add to Cart Validation and Execution
function handleAddToCart() {
  if (!selectedSize) {
    const alertBox = document.getElementById('pdpSizeValidation');
    if (alertBox) {
      alertBox.style.display = 'block';
      alertBox.classList.add('shake-anim');
      setTimeout(() => alertBox.classList.remove('shake-anim'), 500);
    }
    // Scroll size selector into view smoothly if not visible
    const sizeSelector = document.getElementById('pdpSizeSelector');
    if (sizeSelector) {
      sizeSelector.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    showToast("⚠️ Please select a size before adding to your bag.", "warning");
    return false;
  }

  const currentColor = currentProduct.colors[currentColorIndex];
  const activeImage = currentColor.images[0];

  const added = addToCart(currentProduct, currentColor.name, selectedSize, selectedQuantity, activeImage);

  if (added) {
    const btn = document.getElementById('pdpAddToCartBtn');
    if (btn) {
      const originalText = btn.innerHTML;
      btn.innerHTML = `<i class="fa-solid fa-check"></i> ADDED TO BAG`;
      btn.classList.add('btn-success-state');
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.classList.remove('btn-success-state');
      }, 2000);
    }
  }

  return added;
}

// Accordion Collapsible Sections
function renderAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('active');

      // Optional: close other accordions or allow multi-open
      item.classList.toggle('active', !isOpen);
    });
  });
}

// Size Guide Modal Controller
function initSizeGuideModal() {
  const openBtn = document.getElementById('pdpSizeGuideBtn');
  const modal = document.getElementById('sizeGuideModal');
  const closeBtn = document.getElementById('closeSizeGuideBtn');
  const unitTabs = document.querySelectorAll('.unit-tab-btn');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.classList.add('active');
      document.body.classList.add('modal-open');
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    });
  }

  // Close modal on backdrop click
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
      }
    });
  }

  // Toggle CM / Inches Tabs
  unitTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      unitTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const unit = tab.getAttribute('data-unit');
      const tableCm = document.getElementById('sizeTableCm');
      const tableIn = document.getElementById('sizeTableIn');
      if (tableCm && tableIn) {
        tableCm.style.display = unit === 'cm' ? 'table' : 'none';
        tableIn.style.display = unit === 'in' ? 'table' : 'none';
      }
    });
  });
}

// Customer Reviews Controller
function renderReviews() {
  const listContainer = document.getElementById('pdpReviewsList');
  const totalReviewsCount = document.getElementById('pdpTotalReviewsCount');
  const averageRatingNum = document.getElementById('pdpAverageRatingNum');
  const overallStars = document.getElementById('pdpOverallStars');
  if (!listContainer) return;

  const reviews = currentProduct.reviews || [];

  if (totalReviewsCount) totalReviewsCount.textContent = `Based on ${currentProduct.reviewCount} reviews`;
  if (averageRatingNum) averageRatingNum.textContent = currentProduct.rating.toFixed(1);
  if (overallStars) overallStars.innerHTML = renderStarRating(currentProduct.rating);

  let html = '';
  reviews.forEach(rev => {
    html += `
      <div class="review-card">
        <div class="review-card-header">
          <div class="reviewer-meta">
            <div class="reviewer-avatar">${rev.name.charAt(0)}</div>
            <div>
              <div class="reviewer-name-row">
                <span class="reviewer-name">${rev.name}</span>
                ${rev.verified ? `<span class="verified-badge"><i class="fa-solid fa-circle-check"></i> Verified Buyer</span>` : ''}
              </div>
              <div class="review-date">${rev.date}</div>
            </div>
          </div>
          <div class="review-stars-wrap">
            ${renderStarRating(rev.rating)}
          </div>
        </div>

        <div class="review-spec-pills">
          <span class="spec-pill">Size: <strong>${rev.sizePurchased || 'L'}</strong></span>
          <span class="spec-pill">Fit: <strong>${rev.fitFeedback || 'True to size'}</strong></span>
        </div>

        <h4 class="review-title">${rev.title}</h4>
        <p class="review-body">${rev.content}</p>

        <div class="review-footer">
          <span class="helpful-prompt">Was this review helpful?</span>
          <button type="button" class="helpful-btn" onclick="handleHelpfulClick(this, ${rev.helpfulCount})">
            <i class="fa-regular fa-thumbs-up"></i> Helpful (${rev.helpfulCount})
          </button>
        </div>
      </div>
    `;
  });

  listContainer.innerHTML = html;
}

function handleHelpfulClick(btn, count) {
  if (btn.classList.contains('voted')) return;
  btn.classList.add('voted');
  btn.innerHTML = `<i class="fa-solid fa-thumbs-up"></i> Helpful (${count + 1})`;
  showToast("Thank you for your feedback!", "info");
}

// Review Modal and New Review Submission
function initReviewModal() {
  const writeBtn = document.getElementById('pdpWriteReviewBtn');
  const modal = document.getElementById('writeReviewModal');
  const closeBtn = document.getElementById('closeReviewModalBtn');
  const form = document.getElementById('writeReviewForm');
  let selectedRating = 5;

  if (writeBtn && modal) {
    writeBtn.addEventListener('click', () => {
      modal.classList.add('active');
      document.body.classList.add('modal-open');
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    });
  }

  // Interactive Star Selector in Modal
  const starBtns = document.querySelectorAll('#reviewStarSelect i');
  starBtns.forEach(star => {
    star.addEventListener('click', () => {
      selectedRating = parseInt(star.getAttribute('data-value'), 10);
      starBtns.forEach(s => {
        const val = parseInt(s.getAttribute('data-value'), 10);
        if (val <= selectedRating) {
          s.className = 'fa-solid fa-star active';
        } else {
          s.className = 'fa-regular fa-star';
        }
      });
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('revAuthorName').value.trim();
      const email = document.getElementById('revAuthorEmail').value.trim();
      const title = document.getElementById('revTitle').value.trim();
      const content = document.getElementById('revBody').value.trim();
      const fit = document.getElementById('revFitSelect').value;
      const sizePurchased = document.getElementById('revSizeSelect').value;

      if (!name || !title || !content) {
        showToast("Please complete all required fields.", "warning");
        return;
      }

      const newReview = {
        id: `rev-${Date.now()}`,
        name: name,
        rating: selectedRating,
        date: "Today",
        verified: true,
        fitFeedback: fit,
        title: title,
        content: content,
        sizePurchased: sizePurchased,
        helpfulCount: 0
      };

      currentProduct.reviews.unshift(newReview);
      currentProduct.reviewCount += 1;

      renderReviews();
      form.reset();
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
      showToast("⚡ Thank you! Your review has been published.", "success");
    });
  }
}

// Render Related Products ("Complete the Look")
function renderRelatedProducts() {
  const container = document.getElementById('pdpRelatedGrid');
  if (!container) return;

  const related = getRelatedProducts(currentProduct.id, 4);
  let html = '';

  related.forEach(prod => {
    const mainImg = prod.colors[0].images[0];
    const hoverImg = prod.colors[0].images[1] || mainImg;

    html += `
      <div class="product-card">
        <div class="card-media">
          <a href="product.html?id=${prod.id}">
            <img src="${mainImg}" alt="${prod.name}" class="primary-img" loading="lazy" />
            <img src="${hoverImg}" alt="${prod.name}" class="hover-img" loading="lazy" />
          </a>
          ${prod.badge ? `<span class="product-badge">${prod.badge}</span>` : ''}
          <button class="quick-view-btn" onclick="openQuickView('${prod.id}')">
            <i class="fa-solid fa-eye"></i> Quick View
          </button>
        </div>
        <div class="card-content">
          <span class="card-category">${prod.category}</span>
          <h3 class="card-title"><a href="product.html?id=${prod.id}">${prod.name}</a></h3>
          <div class="card-price-row">
            <span class="current-price">$${prod.price.toFixed(2)}</span>
            ${prod.originalPrice ? `<span class="original-price">$${prod.originalPrice.toFixed(2)}</span>` : ''}
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Sticky Add-to-Cart Bar for Scroll
function initStickyBar() {
  const bar = document.getElementById('pdpStickyBar');
  const mainBuySection = document.getElementById('pdpBuyActions');
  if (!bar || !mainBuySection) return;

  window.addEventListener('scroll', () => {
    const rect = mainBuySection.getBoundingClientRect();
    if (rect.bottom < 0) {
      bar.classList.add('visible');
    } else {
      bar.classList.remove('visible');
    }
  });

  updateStickyBar();

  const stickyBtn = document.getElementById('stickyAddToCartBtn');
  if (stickyBtn) {
    stickyBtn.addEventListener('click', handleAddToCart);
  }
}

function updateStickyBar() {
  const stickyImg = document.getElementById('stickyBarImg');
  const stickyTitle = document.getElementById('stickyBarTitle');
  const stickyPrice = document.getElementById('stickyBarPrice');
  const stickySizeDisplay = document.getElementById('stickyBarSizeDisplay');

  if (stickyImg && currentProduct) {
    const color = currentProduct.colors[currentColorIndex];
    stickyImg.src = color.images[0];
  }
  if (stickyTitle && currentProduct) {
    stickyTitle.textContent = currentProduct.name;
  }
  if (stickyPrice && currentProduct) {
    stickyPrice.textContent = `$${currentProduct.price.toFixed(2)}`;
  }
  if (stickySizeDisplay) {
    stickySizeDisplay.textContent = selectedSize ? `Size: ${selectedSize}` : 'Select Size';
  }
}
