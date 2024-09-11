// Sample data for different categories
const productsData = {
    casual: [
        { img: 'https://via.placeholder.com/200', name: 'Casual Product 1', price: '$30' },
        { img: 'https://via.placeholder.com/200', name: 'Casual Product 2', price: '$45' },
        { img: 'https://via.placeholder.com/200', name: 'Casual Product 1', price: '$30' },
        { img: 'https://via.placeholder.com/200', name: 'Casual Product 2', price: '$45' },
        { img: 'https://via.placeholder.com/200', name: 'Casual Product 1', price: '$30' },
        { img: 'https://via.placeholder.com/200', name: 'Casual Product 2', price: '$45' },
        { img: 'https://via.placeholder.com/200', name: 'Casual Product 1', price: '$30' },
        { img: 'https://via.placeholder.com/200', name: 'Casual Product 2', price: '$45' },
        { img: 'https://via.placeholder.com/200', name: 'Casual Product 1', price: '$30' },
        { img: 'https://via.placeholder.com/200', name: 'Casual Product 2', price: '$45' },
        { img: 'https://via.placeholder.com/200', name: 'Casual Product 1', price: '$30' },
        { img: 'https://via.placeholder.com/200', name: 'Casual Product 2', price: '$45' },
        // Add more products here
    ],
    shoes: [
        { img: 'https://via.placeholder.com/200', name: 'Shoe Product 1', price: '$60' },
        { img: 'https://via.placeholder.com/200', name: 'Shoe Product 2', price: '$75' },
        { img: 'https://via.placeholder.com/200', name: 'Shoe Product 1', price: '$60' },
        { img: 'https://via.placeholder.com/200', name: 'Shoe Product 2', price: '$75' },
        { img: 'https://via.placeholder.com/200', name: 'Shoe Product 1', price: '$60' },
        { img: 'https://via.placeholder.com/200', name: 'Shoe Product 2', price: '$75' },
        { img: 'https://via.placeholder.com/200', name: 'Shoe Product 1', price: '$60' },
        { img: 'https://via.placeholder.com/200', name: 'Shoe Product 2', price: '$75' },
        { img: 'https://via.placeholder.com/200', name: 'Shoe Product 1', price: '$60' },
        { img: 'https://via.placeholder.com/200', name: 'Shoe Product 2', price: '$75' },
        { img: 'https://via.placeholder.com/200', name: 'Shoe Product 1', price: '$60' },
        { img: 'https://via.placeholder.com/200', name: 'Shoe Product 2', price: '$75' },
        // Add more products here
    ],
    sports: [
        { img: 'https://via.placeholder.com/200', name: 'Sports Product 1', price: '$40' },
        { img: 'https://via.placeholder.com/200', name: 'Sports Product 2', price: '$50' },
        { img: 'https://via.placeholder.com/200', name: 'Sports Product 1', price: '$40' },
        { img: 'https://via.placeholder.com/200', name: 'Sports Product 2', price: '$50' },
        { img: 'https://via.placeholder.com/200', name: 'Sports Product 1', price: '$40' },
        { img: 'https://via.placeholder.com/200', name: 'Sports Product 2', price: '$50' },
        { img: 'https://via.placeholder.com/200', name: 'Sports Product 1', price: '$40' },
        { img: 'https://via.placeholder.com/200', name: 'Sports Product 2', price: '$50' },
        { img: 'https://via.placeholder.com/200', name: 'Sports Product 1', price: '$40' },
        { img: 'https://via.placeholder.com/200', name: 'Sports Product 2', price: '$50' },
        { img: 'https://via.placeholder.com/200', name: 'Sports Product 1', price: '$40' },
        { img: 'https://via.placeholder.com/200', name: 'Sports Product 2', price: '$50' },
        // Add more products here
    ],
    winter: [
        { img: 'https://via.placeholder.com/200', name: 'Winter Product 1', price: '$80' },
        { img: 'https://via.placeholder.com/200', name: 'Winter Product 2', price: '$90' },
        { img: 'https://via.placeholder.com/200', name: 'Winter Product 1', price: '$80' },
        { img: 'https://via.placeholder.com/200', name: 'Winter Product 2', price: '$90' },
        { img: 'https://via.placeholder.com/200', name: 'Winter Product 1', price: '$80' },
        { img: 'https://via.placeholder.com/200', name: 'Winter Product 2', price: '$90' },
        { img: 'https://via.placeholder.com/200', name: 'Winter Product 1', price: '$80' },
        { img: 'https://via.placeholder.com/200', name: 'Winter Product 2', price: '$90' },
        { img: 'https://via.placeholder.com/200', name: 'Winter Product 1', price: '$80' },
        { img: 'https://via.placeholder.com/200', name: 'Winter Product 2', price: '$90' },
        { img: 'https://via.placeholder.com/200', name: 'Winter Product 1', price: '$80' },
        { img: 'https://via.placeholder.com/200', name: 'Winter Product 2', price: '$90' },
        // Add more products here
    ],
    default: [
        { img: 'https://via.placeholder.com/200', name: 'Product 1', price: '$30' },
        { img: 'https://via.placeholder.com/200', name: 'Product 2', price: '$45' },
        { img: 'https://via.placeholder.com/200', name: 'Product 3', price: '$20' },
        { img: 'https://via.placeholder.com/200', name: 'Product 4', price: '$55' },
        { img: 'https://via.placeholder.com/200', name: 'Product 5', price: '$60' },
        { img: 'https://via.placeholder.com/200', name: 'Product 6', price: '$55' },
        { img: 'https://via.placeholder.com/200', name: 'Product 7', price: '$50' },
        { img: 'https://via.placeholder.com/200', name: 'Product 8', price: '$25' },
        { img: 'https://via.placeholder.com/200', name: 'Product 9', price: '$100' },
        { img: 'https://via.placeholder.com/200', name: 'Product 10', price: '$25' },
        { img: 'https://via.placeholder.com/200', name: 'Product 11', price: '$80' },
        { img: 'https://via.placeholder.com/200', name: 'Product 12', price: '$90' }
    ],
};

function showProducts(category) {
    const productsSection = document.getElementById('products-section');
    productsSection.innerHTML = ''; // Clear existing content

    // Get the products for the selected category
    const products = productsData[category] || [];

    // Create and append product elements
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
        `;

        productsSection.appendChild(productDiv);
    });
}

// Show default products when the page loads
document.addEventListener('DOMContentLoaded', () => showProducts('casual'));
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px'; // Hide sidebar
        main.classList.remove('shifted');
    } else {
        sidebar.style.left = '0px'; // Show sidebar
        main.classList.add('shifted');
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    sidebar.style.left = '-250px'; // Hide sidebar
    main.classList.remove('shifted');
}
