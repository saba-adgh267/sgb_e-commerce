const productsData = {
    casual: [
        { id: 'c1', img: 'https://via.placeholder.com/200', name: 'Casual Product 1', price: '£30.00', originalPrice: 30.00 },
        { id: 'c2', img: 'https://via.placeholder.com/200', name: 'Casual Product 2', price: '£45.00', originalPrice: 45.00 },
        { id: 'c3', img: 'https://via.placeholder.com/200', name: 'Casual Product 3', price: '£35.00', originalPrice: 35.00 },
        { id: 'c4', img: 'https://via.placeholder.com/200', name: 'Casual Product 4', price: '£42.00', originalPrice: 42.00 },
        { id: 'c5', img: 'https://via.placeholder.com/200', name: 'Casual Product 5', price: '£38.00', originalPrice: 38.00 },
        { id: 'c6', img: 'https://via.placeholder.com/200', name: 'Casual Product 6', price: '£55.00', originalPrice: 55.00 },
    ],
    shoes: [
        { id: 's1', img: 'https://via.placeholder.com/200', name: 'Shoe Product 1', price: '£60.00', originalPrice: 60.00 },
        { id: 's2', img: 'https://via.placeholder.com/200', name: 'Shoe Product 2', price: '£75.00', originalPrice: 75.00 },
        { id: 's3', img: 'https://via.placeholder.com/200', name: 'Shoe Product 3', price: '£85.00', originalPrice: 85.00 },
        { id: 's4', img: 'https://via.placeholder.com/200', name: 'Shoe Product 4', price: '£95.00', originalPrice: 95.00 },
        { id: 's5', img: 'https://via.placeholder.com/200', name: 'Shoe Product 5', price: '£70.00', originalPrice: 70.00 },
        { id: 's6', img: 'https://via.placeholder.com/200', name: 'Shoe Product 6', price: '£65.00', originalPrice: 65.00 },
    ],
    sports: [
        { id: 'sp1', img: 'https://via.placeholder.com/200', name: 'Sports Product 1', price: '£40.00', originalPrice: 40.00 },
        { id: 'sp2', img: 'https://via.placeholder.com/200', name: 'Sports Product 2', price: '£50.00', originalPrice: 50.00 },
        { id: 'sp3', img: 'https://via.placeholder.com/200', name: 'Sports Product 3', price: '£55.00', originalPrice: 55.00 },
        { id: 'sp4', img: 'https://via.placeholder.com/200', name: 'Sports Product 4', price: '£45.00', originalPrice: 45.00 },
        { id: 'sp5', img: 'https://via.placeholder.com/200', name: 'Sports Product 5', price: '£60.00', originalPrice: 60.00 },
        { id: 'sp6', img: 'https://via.placeholder.com/200', name: 'Sports Product 6', price: '£35.00', originalPrice: 35.00 },
    ],
    winter: [
        { id: 'w1', img: 'https://via.placeholder.com/200', name: 'Winter Product 1', price: '£80.00', originalPrice: 80.00 },
        { id: 'w2', img: 'https://via.placeholder.com/200', name: 'Winter Product 2', price: '£90.00', originalPrice: 90.00 },
        { id: 'w3', img: 'https://via.placeholder.com/200', name: 'Winter Product 3', price: '£75.00', originalPrice: 75.00 },
        { id: 'w4', img: 'https://via.placeholder.com/200', name: 'Winter Product 4', price: '£95.00', originalPrice: 95.00 },
        { id: 'w5', img: 'https://via.placeholder.com/200', name: 'Winter Product 5', price: '£85.00', originalPrice: 85.00 },
        { id: 'w6', img: 'https://via.placeholder.com/200', name: 'Winter Product 6', price: '£100.00', originalPrice: 100.00 },
    ],
};

// Shopping Cart functionality
let cart = [];

// Cart management functions
function addToCart(productId, productName, productPrice, productImg) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            img: productImg,
            quantity: 1,
            originalPrice: parseFloat(productPrice.replace('£', ''))
        });
    }
    
    updateCartCount();
    showAddToCartFeedback();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) {
        loadCartItems();
    }
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            updateCartCount();
            if (window.location.pathname.includes('cart.html')) {
                loadCartItems();
            }
        }
    }
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        
        // Add animation when count changes
        cartCountElement.style.animation = 'none';
        setTimeout(() => {
            cartCountElement.style.animation = 'addedToCart 0.3s ease';
        }, 10);
    }
}

function showAddToCartFeedback() {
    // This could be enhanced with a toast notification
    console.log('Item added to cart!');
}

function openCart() {
    window.location.href = 'cart.html';
}

function showProducts(category) {
    const productsSection = document.getElementById('products-section');
    const heading = document.getElementById('products-heading');
    const dealsSection = document.getElementById('deals-section');
    productsSection.innerHTML = '';

    const products = productsData[category] || [];

    if (category === 'default') {
        heading.innerText = 'Featured Products:';
        if (dealsSection) dealsSection.style.display = 'block';
        
        // For home page, don't show any products in the products section
        // Only show deals section at the top
        productsSection.style.display = 'none';
    } else {
        heading.innerText = `${category.charAt(0).toUpperCase() + category.slice(1)} Products:`;
        if (dealsSection) dealsSection.style.display = 'none';
        productsSection.style.display = 'grid';
        
        products.forEach(product => {
            createProductElement(product, productsSection);
        });
    }
}

function createProductElement(product, container) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    productDiv.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <button class="add-to-cart-btn" onclick="addToCart('${product.id}', '${product.name}', '${product.price}', '${product.img}')">
            <span>🛒</span> Add to Cart
        </button>
    `;

    container.appendChild(productDiv);
}

// Show default products when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showProducts('default');
    updateCartCount();
    loadDeals();
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
        main.classList.remove('shifted');
    } else {
        sidebar.style.left = '0px';
        main.classList.add('shifted');
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    sidebar.style.left = '-250px';
    main.classList.remove('shifted');
}

const dealsData = {
    large: [
        { id: 'deal1', img: 'https://via.placeholder.com/400x200', name: 'Deal 1', price: '£100.00', originalPrice: 100.00 },
        { id: 'deal2', img: 'https://via.placeholder.com/400x200', name: 'Deal 2', price: '£120.00', originalPrice: 120.00 }
    ],
    small: [
        { id: 'fea1', img: 'fea_white_trainer.png', name: 'Exclusive White Trainers', price: '£54.99', originalPrice: 54.99 },
        { id: 'fea2', img: 'fea_shirt.png', name: 'M Style Shirt', price: '£64.99', originalPrice: 64.99 },
        { id: 'fea3', img: 'fea_jurassic_shirt.png', name: 'Jurassic Park Shirt Kids', price: '£19.99', originalPrice: 19.99 },
        { id: 'fea4', img: 'fea_longcoat_brown.png', name: 'Long Coat - Brown', price: '£125.99', originalPrice: 125.99 },
        { id: 'fea5', img: 'fea_blazer_men.png', name: "Men's Plaid Blazer", price: '£29.99', originalPrice: 29.99 },
        { id: 'fea6', img: 'fea_baggy_jeans.png', name: 'Baggy Jeans', price: '£34.99', originalPrice: 34.99 },
        { id: 'fea7', img: 'fea_scarf_green.png', name: 'Super-soft Scarf', price: '£14.99', originalPrice: 14.99 },
        { id: 'fea8', img: 'fea_scarf_embroided.png', name: 'Embroidered Paisley Scarf', price: '£34.99', originalPrice: 34.99 },
        { id: 'fea9', img: 'fea_jumper_kids.png', name: 'Blue Knitted Jumper - Kids', price: '£24.99', originalPrice: 24.99 },
        { id: 'fea10', img: 'fea_jumper_woman.png', name: "Woman's Sleeveless Jumper", price: '£29.99', originalPrice: 29.99 },
        { id: 'fea11', img: 'fea_jumper_xmas.png', name: 'Lowry Red/Navy Fair Jumper', price: '£25.99', originalPrice: 25.99 },
        { id: 'fea12', img: 'fea_cargo_trousers.png', name: 'Cargo Trousers (Orange)', price: '£38.99', originalPrice: 38.99 },
    ]
};

function createDealElement(deal, container, className) {
    const dealDiv = document.createElement('div');
    dealDiv.className = `deal-box ${className}`;
    
    dealDiv.innerHTML = `
        <img src="${deal.img}" alt="${deal.name}">
        <h3>${deal.name}</h3>
        <p>Price: ${deal.price}</p>
        <button class="add-to-cart-btn" onclick="addToCart('${deal.id}', '${deal.name}', '${deal.price}', '${deal.img}')">
            <span>🛒</span> Add to Cart
        </button>
    `;
    
    container.appendChild(dealDiv);
}

function loadDeals() {
    const largeDealsSection = document.querySelector('.deals-large-grid');
    const smallDealsSection = document.querySelector('.deals-small-grid');

    if (largeDealsSection && smallDealsSection) {
        // Clear existing content
        largeDealsSection.innerHTML = '';
        smallDealsSection.innerHTML = '';
        
        // Load large deals
        dealsData.large.forEach(deal => {
            createDealElement(deal, largeDealsSection, 'large');
        });

        // Load small deals
        dealsData.small.forEach(deal => {
            createDealElement(deal, smallDealsSection, 'small');
        });
    }
}