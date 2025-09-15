// Product data
const productsData = {
    casual: [
        { id: 'c1', img: 'cas_blue_shirt.png', name: 'Mads Casual Shirt - Navy Blue', price: '£29.99', originalPrice: 29.99 },
        { id: 'c2', img: 'cas_grey_shirt.png', name: 'Fabrilife Premium Shirt - Grey', price: '£44.99', originalPrice: 44.99 },
        { id: 'c3', img: 'cas_blue_trousers.png', name: 'Ladies Navy Jersey Trousers', price: '£34.99', originalPrice: 34.99 },
        { id: 'c4', img: 'cas_grey_trousers.png', name: 'Womens Silver Grey Trousers', price: '£29.99', originalPrice: 29.99 },
        { id: 'c5', img: 'cas_blazer_blue.png', name: 'Casual Blazer - Blue', price: '£37.99', originalPrice: 37.99 },
        { id: 'c6', img: 'cas_blazer_brown.png', name: 'Casual Blazer - Brown', price: '£54.99', originalPrice: 54.99 },
    ],
    shoes: [
        { id: 's1', img: 'sho_brown_shoes.png', name: 'Teviot Leather Shoes', price: '£19.99', originalPrice: 19.99 },
        { id: 's2', img: 'sho_black_shoes.png', name: 'Cambridge Black Derby Shoes', price: '£79.95', originalPrice: 79.95 },
        { id: 's3', img: 'sho_blue_shoes.png', name: 'Lastres Navy Gents Shoes', price: '£84.99', originalPrice: 84.99 },
        { id: 's4', img: 'sho_ladies_black.png', name: 'Dublin Wychwood Arena Shoes', price: '£38.99', originalPrice: 38.99 },
        { id: 's5', img: 'sho_ladies_brown.png', name: 'Grand Step Demi-Winter Boots', price: '£39.99', originalPrice: 39.99 },
        { id: 's6', img: 'sho_white_trainers.png', name: 'LYCLUS Cloud Shoes', price: '£56.99', originalPrice: 56.99 },
    ],
    sports: [
        { id: 'sp1', img: 'spo_blue_orange_shirt.png', name: 'OLIK Orange/Blue Shirt', price: '£39.99', originalPrice: 39.99 },
        { id: 'sp2', img: 'spo_red_running_shirt.png', name: 'Running Long Sleeve T-Shirt Red', price: '£21.99', originalPrice: 21.99 },
        { id: 'sp3', img: 'spo_polo_shirt.png', name: 'Sports Polo Shirt', price: '£14.99', originalPrice: 14.99 },
        { id: 'sp4', img: 'spo_men_trainers.png', name: 'Gents Lightweight Trainers', price: '£36.99', originalPrice: 36.99 },
        { id: 'sp5', img: 'spo_women_trainers.png', name: 'Women Trainers', price: '£38.99', originalPrice: 38.99 },
        { id: 'sp6', img: 'spo_duffle_bag.png', name: 'PHANTOM Sports Bag', price: '£79.90', originalPrice: 79.90 },
    ],
    winter: [
        { id: 'w1', img: 'wincol_women_gloves.png', name: 'Cozy Winter Gloves', price: '£12.00', originalPrice: 12.00 },
        { id: 'w2', img: 'wincol_earmuffs.png', name: 'Winter Ear Muffs', price: '£7.99', originalPrice: 7.99 },
        { id: 'w3', img: 'wincol_blue_jacket.png', name: 'Winter Jacket - Blue', price: '£34.99', originalPrice: 34.99 },
        { id: 'w4', img: 'wincol_red_jacket.png', name: 'Trespass Padded Jacket - Red', price: '£24.99', originalPrice: 24.99 },
        { id: 'w5', img: 'wincol_brown_scarf.png', name: 'Taupe Ombré Oversixed Scarf', price: '£39.95', originalPrice: 39.95 },
        { id: 'w6', img: 'wincol_socks.png', name: 'Wool Blend Winter Socks', price: '£9.99', originalPrice: 9.99 },
    ],
};

const dealsData = {
    large: [
        { id: 'deal1', img: 'https://via.placeholder.com/400x200?text=Deal+1', name: 'Deal 1', price: '£100.00', originalPrice: 100.00 },
        { id: 'deal2', img: 'https://via.placeholder.com/400x200?text=Deal+2', name: 'Deal 2', price: '£120.00', originalPrice: 120.00 }
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

// Shopping Cart functionality
let cart = [];
let currentPage = 'home';

// Navigation functions
function goToHome() {
    currentPage = 'home';
    document.getElementById('home-page').classList.add('active');
    document.getElementById('cart-page').classList.remove('active');
}

function openCart() {
    currentPage = 'cart';
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('cart-page').classList.add('active');
    
    // Load cart items when switching to cart view
    if (typeof loadCartItems === 'function') {
        loadCartItems();
    }
    if (typeof updateCartSummary === 'function') {
        updateCartSummary();
    }
}

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
    
    if (currentPage === 'cart') {
        if (typeof loadCartItems === 'function') {
            loadCartItems();
        }
        if (typeof updateCartSummary === 'function') {
            updateCartSummary();
        }
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
            
            if (currentPage === 'cart') {
                if (typeof loadCartItems === 'function') {
                    loadCartItems();
                }
                if (typeof updateCartSummary === 'function') {
                    updateCartSummary();
                }
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
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.style.transform = 'scale(1.1)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 200);
    }
}

// Product display functions
function showProducts(category) {
    const productsSection = document.getElementById('products-section');
    const heading = document.getElementById('products-heading');
    const dealsSection = document.getElementById('deals-section');
    const featuredSection = document.getElementById('featured-section');
    
    if (!productsSection) return;
    
    productsSection.innerHTML = '';

    const products = productsData[category] || [];

    if (category === 'default') {
        // Hide the products heading and section on home page
        if (heading) heading.style.display = 'none';
        if (dealsSection) dealsSection.style.display = 'block';
        if (featuredSection) featuredSection.style.display = 'block';
        productsSection.style.display = 'none';
    } else {
        // Show products heading and section for specific categories
        if (heading) {
            heading.style.display = 'block';
            heading.innerText = `${category.charAt(0).toUpperCase() + category.slice(1)} Products:`;
        }
        if (dealsSection) dealsSection.style.display = 'none';
        if (featuredSection) featuredSection.style.display = 'none';
        productsSection.style.display = 'grid';
        
        products.forEach(product => {
            createProductElement(product, productsSection);
        });
    }
    
    closeSidebar();
}

function createProductElement(product, container) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    productDiv.innerHTML = `
        <img src="${product.img}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/200x200?text=No+Image'">
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <button class="add-to-cart-btn" onclick="addToCart('${product.id}', '${product.name}', '${product.price}', '${product.img}')">
            <span>🛒</span> Add to Cart
        </button>
    `;

    container.appendChild(productDiv);
}

function createDealElement(deal, container, className) {
    const dealDiv = document.createElement('div');
    dealDiv.className = `deal-box ${className}`;
    
    dealDiv.innerHTML = `
        <img src="${deal.img}" alt="${deal.name}" onerror="this.src='https://via.placeholder.com/200x200?text=No+Image'">
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
    const featuredProductsSection = document.querySelector('.featured-small-grid');

    if (largeDealsSection && featuredProductsSection) {
        // Clear existing content
        largeDealsSection.innerHTML = '';
        featuredProductsSection.innerHTML = '';
        
        // Load large deals
        dealsData.large.forEach(deal => {
            createDealElement(deal, largeDealsSection, 'large');
        });

        // Load featured products (small deals)
        dealsData.small.forEach(deal => {
            createDealElement(deal, featuredProductsSection, 'small');
        });
    }
}

// Sidebar functions
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

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    showProducts('default');
    updateCartCount();
    loadDeals();
});