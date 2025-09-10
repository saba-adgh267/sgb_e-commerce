// Cart page specific functionality

// Available promotions
const availablePromotions = [
    {
        id: 'free_shipping',
        title: 'Free Shipping',
        description: 'Free shipping on orders over £50',
        minAmount: 50,
        savings: 'Free shipping',
        discount: 5.99,
        type: 'shipping'
    },
    {
        id: 'student_discount',
        title: '10% Student Discount',
        description: 'Get 10% off your entire order',
        minAmount: 0,
        savings: '10% off',
        discount: 0.1,
        type: 'percentage'
    },
    {
        id: 'bulk_discount',
        title: '15% Bulk Discount',
        description: '15% off when you buy 5+ items',
        minItems: 5,
        savings: '15% off',
        discount: 0.15,
        type: 'percentage'
    },
    {
        id: 'winter_special',
        title: '£10 Off Winter Items',
        description: '£10 off when you have winter items in cart',
        minAmount: 0,
        savings: '£10 off',
        discount: 10,
        type: 'fixed',
        condition: 'hasWinterItems'
    }
];

let appliedPromotions = [];

function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    
    if (cart.length === 0) {
        cartItemsContainer.style.display = 'none';
        emptyCartMessage.style.display = 'block';
        updateCartSummary();
        return;
    }
    
    cartItemsContainer.style.display = 'block';
    emptyCartMessage.style.display = 'none';
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.setAttribute('data-item-id', item.id);
        
        cartItemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="item-image">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>Unit Price: ${item.price}</p>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                <input type="number" class="quantity-input" value="${item.quantity}" min="1" 
                       onchange="updateQuantity('${item.id}', parseInt(this.value))">
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
            </div>
            <div class="item-price">£${(item.originalPrice * item.quantity).toFixed(2)}</div>
            <button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
        `;
        
        cartItemsContainer.appendChild(cartItemDiv);
    });
    
    updateCartSummary();
    loadPromotions();
}

function updateCartSummary() {
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
    
    // Update basic info
    document.getElementById('item-count').textContent = itemCount;
    document.getElementById('subtotal').textContent = `£${subtotal.toFixed(2)}`;
    
    // Calculate discounts
    let totalDiscount = 0;
    appliedPromotions.forEach(promotion => {
        totalDiscount += calculateDiscount(promotion, subtotal, itemCount);
    });
    
    // Update shipping
    const shippingCost = calculateShipping(subtotal, appliedPromotions);
    document.getElementById('shipping-cost').textContent = shippingCost === 0 ? 'FREE' : `£${shippingCost.toFixed(2)}`;
    
    // Update discount display
    const discountRow = document.getElementById('discount-row');
    if (totalDiscount > 0) {
        discountRow.style.display = 'flex';
        document.getElementById('discount-amount').textContent = `-£${totalDiscount.toFixed(2)}`;
        updateDiscountText();
    } else {
        discountRow.style.display = 'none';
    }
    
    // Update total
    const total = Math.max(0, subtotal - totalDiscount + shippingCost);
    document.getElementById('total-amount').innerHTML = `<strong>£${total.toFixed(2)}</strong>`;
    
    // Update checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (cart.length > 0) {
        checkoutBtn.disabled = false;
        checkoutBtn.textContent = `Proceed to Checkout (£${total.toFixed(2)})`;
    } else {
        checkoutBtn.disabled = true;
        checkoutBtn.textContent = 'Proceed to Checkout';
    }
}

function loadPromotions() {
    const promotionsList = document.getElementById('promotions-list');
    promotionsList.innerHTML = '';
    
    const subtotal = cart.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    availablePromotions.forEach(promotion => {
        const isEligible = checkPromotionEligibility(promotion, subtotal, itemCount);
        const isApplied = appliedPromotions.some(p => p.id === promotion.id);
        
        if (isEligible || isApplied) {
            const promotionDiv = document.createElement('div');
            promotionDiv.className = 'promotion-item';
            
            const discount = calculateDiscount(promotion, subtotal, itemCount);
            const savingsText = promotion.type === 'percentage' 
                ? `Save £${discount.toFixed(2)}` 
                : promotion.savings;
            
            promotionDiv.innerHTML = `
                <input type="checkbox" class="promotion-checkbox" 
                       id="promo-${promotion.id}" 
                       ${isApplied ? 'checked' : ''}
                       onchange="togglePromotion('${promotion.id}', this.checked)">
                <div class="promotion-info">
                    <p class="promotion-title">${promotion.title}</p>
                    <p class="promotion-desc">${promotion.description}</p>
                    <p class="promotion-savings">${savingsText}</p>
                </div>
            `;
            
            promotionsList.appendChild(promotionDiv);
        }
    });
}

function checkPromotionEligibility(promotion, subtotal, itemCount) {
    // Check minimum amount
    if (promotion.minAmount && subtotal < promotion.minAmount) {
        return false;
    }
    
    // Check minimum items
    if (promotion.minItems && itemCount < promotion.minItems) {
        return false;
    }
    
    // Check special conditions
    if (promotion.condition === 'hasWinterItems') {
        const hasWinterItems = cart.some(item => item.id.startsWith('w') || item.id.includes('winter'));
        if (!hasWinterItems) {
            return false;
        }
    }
    
    return true;
}

function calculateDiscount(promotion, subtotal, itemCount) {
    if (promotion.type === 'percentage') {
        return subtotal * promotion.discount;
    } else if (promotion.type === 'fixed') {
        return promotion.discount;
    } else if (promotion.type === 'shipping') {
        return 0; // Shipping discount is handled separately
    }
    return 0;
}

function calculateShipping(subtotal, appliedPromotions) {
    const baseShippingCost = 5.99;
    
    // Check if free shipping promotion is applied
    const hasFreeShipping = appliedPromotions.some(p => p.type === 'shipping');
    
    if (hasFreeShipping || subtotal >= 50) {
        return 0;
    }
    
    return baseShippingCost;
}

function togglePromotion(promotionId, isChecked) {
    if (isChecked) {
        const promotion = availablePromotions.find(p => p.id === promotionId);
        if (promotion && !appliedPromotions.some(p => p.id === promotionId)) {
            appliedPromotions.push(promotion);
        }
    } else {
        appliedPromotions = appliedPromotions.filter(p => p.id !== promotionId);
    }
    
    updateCartSummary();
}

function updateDiscountText() {
    const discountText = document.getElementById('discount-text');
    if (appliedPromotions.length === 1) {
        discountText.textContent = appliedPromotions[0].title;
    } else if (appliedPromotions.length > 1) {
        discountText.textContent = `Discounts (${appliedPromotions.length})`;
    } else {
        discountText.textContent = 'Discount';
    }
}

// Initialize cart page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('cart.html')) {
        loadCartItems();
        updateCartCount();
        
        // Add checkout button functionality
        document.getElementById('checkout-btn').addEventListener('click', () => {
            if (cart.length > 0) {
                alert('Proceeding to checkout... (This would redirect to payment page)');
                // Here you would typically redirect to a checkout/payment page
            }
        });
    }
});