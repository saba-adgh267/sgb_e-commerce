// Cart page specific functionality

// Cart page functions
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    
    if (!cart || cart.length === 0) {
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
            <img src="${item.img}" alt="${item.name}" class="item-image" onerror="this.src='https://via.placeholder.com/50x50?text=No+Image'">
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
}

function updateCartSummary() {
    if (!cart) return;
    
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
    
    document.getElementById('item-count').textContent = itemCount;
    document.getElementById('subtotal').textContent = `£${subtotal.toFixed(2)}`;
    document.getElementById('total-amount').innerHTML = `<strong>£${subtotal.toFixed(2)}</strong>`;
    
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        if (cart.length > 0) {
            checkoutBtn.disabled = false;
            checkoutBtn.textContent = `Proceed to Checkout (£${subtotal.toFixed(2)})`;
        } else {
            checkoutBtn.disabled = true;
            checkoutBtn.textContent = 'Proceed to Checkout';
        }
    }
}

// Initialize cart page functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add checkout button functionality
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart && cart.length > 0) {
                alert('Proceeding to checkout... (This would redirect to payment page)');
                // Here you would typically redirect to a checkout/payment page
            }
        });
    }
});