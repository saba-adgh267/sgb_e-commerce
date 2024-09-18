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
    
};

function showProducts(category) {
    const productsSection = document.getElementById('products-section');
    const heading = document.getElementById('products-heading');
    const dealsSection = document.getElementById('deals-section'); // Select the deals section
    productsSection.innerHTML = ''; // Clear existing content

    // Get the products for the selected category
    const products = productsData[category] || [];

    // Update heading based on category
    if (category === 'default') {
        heading.innerText = 'Featured Products:';
        dealsSection.style.display = 'block'; // Show deals section on the home page
    } else {
        heading.innerText = `${category.charAt(0).toUpperCase() + category.slice(1)} Products:`;
        dealsSection.style.display = 'none'; // Hide deals section for other categories
    }

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
document.addEventListener('DOMContentLoaded', () => showProducts('default'));

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

const dealsData = {
    large: [
        { img: 'https://via.placeholder.com/400x200', name: 'Deal 1', price: '$100' },
        { img: 'https://via.placeholder.com/400x200', name: 'Deal 2', price: '$120' }
    ],
    small: [
        { img: 'white_trainer.png', name: 'Exclusive White Trainers', price: '£55' },
        { img: 'shirt_fea.png', name: 'M Style Shirt', price: '£65' },
        { img: 'jurassic_shirt_fea.png', name: 'Jurassic Park Shirt Kids', price: '£20' },
        { img: 'https://via.placeholder.com/150', name: 'Product 4', price: '$25' },
        { img: 'https://via.placeholder.com/150', name: 'Product 5', price: '$25' },
        { img: 'https://via.placeholder.com/150', name: 'Product 6', price: '$25' },
        { img: 'https://via.placeholder.com/150', name: 'Product 7', price: '$25' },
        { img: 'https://via.placeholder.com/150', name: 'Product 8', price: '$25' },
        { img: 'https://via.placeholder.com/150', name: 'Product 9', price: '$25' },
        // Add 7 more small deals here
    ]
};

function loadDeals() {
    const largeDealsSection = document.querySelector('.deals-large-grid');
    const smallDealsSection = document.querySelector('.deals-small-grid');

    // Load large deals
    dealsData.large.forEach(deal => {
        const dealDiv = document.createElement('div');
        dealDiv.className = 'deal-box large';
        dealDiv.innerHTML = `<img src="${deal.img}" alt="${deal.name}"><h3>${deal.name}</h3><p>Price: ${deal.price}</p>`;
        largeDealsSection.appendChild(dealDiv);
    });

    // Load small deals
    dealsData.small.forEach(deal => {
        const dealDiv = document.createElement('div');
        dealDiv.className = 'deal-box small';
        dealDiv.innerHTML = `<img src="${deal.img}" alt="${deal.name}"><h3>${deal.name}</h3><p>Price: ${deal.price}</p>`;
        smallDealsSection.appendChild(dealDiv);
    });
}

// Call the function to load deals when the page loads
document.addEventListener('DOMContentLoaded', loadDeals);
