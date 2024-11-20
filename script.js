const products = [
    {
        id: 1,
        name: 'iPhone 14',
        price: 999.00,
        image: 'https://via.placeholder.com/150?text=iPhone ',
        specifications: [
            'Model: iPhone 14',
            'Storage: 128GB/256GB/512GB',
            'Processor: A15 Bionic chip',
            'RAM: 6GB',
            'Camera: Dual 12MP system',
            'Special Features: 5G capable, Face ID, Night mode'
        ]
    },
    {
        id: 2,
        name: 'MacBook Pro',
        price: 1999.00,
        image: 'https://via.placeholder.com/150?text=MacBook',
        specifications: [
            'Model: MacBook Pro 14-inch',
            'Storage: 512GB/1TB/2TB SSD',
            'Processor: Apple M1 Pro chip',
            'RAM: 16GB/32GB',
            'Camera: 1080p FaceTime HD camera',
            'Special Features: Retina display, Touch Bar, Magic Keyboard'
        ]
    },
    {
        id: 3,
        name: 'Samsung Galaxy S21',
        price: 799.00,
        image: 'https://via.placeholder.com/150?text=Samsung',
        specifications: [
            'Model: Galaxy S21',
            'Storage: 128GB/256GB',
            'Processor: Exynos 2100/Snapdragon 888',
            'RAM: 8GB',
            'Camera: Triple camera system (12MP + 64MP + 12MP)',
            'Special Features: 120Hz display, 5G capable, Wireless charging'
        ]
    },
    {
        id: 4,
        name: 'Dell XPS 13',
        price: 999.00,
        image: 'https://via.placeholder.com/150?text=Dell+XPS',
        specifications: [
            'Model: XPS 13 9310',
            'Storage: 256GB/512GB/1TB SSD',
            'Processor: Intel Core i7-1165G7',
            'RAM: 8GB/16GB',
            'Camera: 720p HD camera',
            'Special Features: InfinityEdge display, Thunderbolt 4 ports'
        ]
    },
    {
        id: 5,
        name: 'Google Pixel 6',
        price: 599.00,
        image: 'https://via.placeholder.com/150?text=Pixel',
        specifications: [
            'Model: Pixel 6',
            'Storage: 128GB/256GB',
            'Processor: Google Tensor',
            'RAM: 8GB',
            'Camera: Dual rear camera (50MP + 12MP)',
            'Special Features: Titan M2 security chip, Magic Eraser'
        ]
    },
    {
        id: 6,
        name: 'Sony WH-1000XM4',
        price: 349.00,
        image: 'https://via.placeholder.com/150?text=Sony+Headphones',
        specifications: [
            'Model: WH-1000XM4',
            'Battery Life: 30 hours',
            'Noise Cancellation: Yes',
            'Special Features: Touch sensor controls, Speak-to-chat'
        ]
    },
    {
        id: 7,
        name: 'Apple Watch Series 7',
        price: 399.00,
        image: 'https://via.placeholder.com/150?text=Apple+Watch',
        specifications: [
            'Model: Series 7',
            'Display: Always-On Retina',
            'Battery Life: Up to 18 hours',
            'Special Features: Blood oxygen app, ECG app'
        ]
    },
    {
        id: 8,
        name: 'Microsoft Surface Pro 7',
        price: 749.00,
        image: 'https://via.placeholder.com/150?text=Surface+Pro',
        specifications: [
            'Model: Surface Pro 7',
            'Storage: 128GB/256GB/512GB/1TB',
            'Processor: Intel Core i5/i7',
            'RAM: 8GB/16GB',
            'Special Features: USB-C, Surface Pen support'
        ]
    },
    // New products added
    {
        id: 9,
        name: 'Sony PlayStation 5',
        price: 499.00,
        image: 'https://via.placeholder.com/150?text=PS5',
        specifications: [
            'Model: PlayStation 5',
            'Storage: 825GB SSD',
            'Processor: AMD Ryzen Zen 2',
            'RAM: 16GB GDDR6',
            'Camera: Optional HD Camera',
            'Special Features: 4K UHD, Ray Tracing, DualSense controller'
        ]
    },
    {
        id: 10,
        name: 'Amazon Echo Dot (4th Gen)',
        price: 49.99,
        image: 'https://via.placeholder.com/150?text=Echo+Dot',
        specifications: [
            'Model: Echo Dot 4th Gen',
            'Storage: Cloud storage',
            'Processor: ARM-based',
            'Speaker: 1.6" speaker with Dolby processing',
            'Special Features: Voice control, Alexa, Smart home integration'
        ]
    },
    {
        id: 11,
        name: 'LG OLED55CXPUA 55-Inch TV',
        price: 1299.00,
        image: 'https://via.placeholder.com/150?text=LG+OLED',
        specifications: [
            'Model: OLED55CXPUA',
            'Storage: N/A',
            'Processor: α9 Gen 3 AI Processor 4K',
            'Display: OLED 4K',
            'Special Features: Dolby Vision, Dolby Atmos, NVIDIA G-SYNC'
        ]
    },
    {
        id: 12,
        name: 'Bose QuietComfort 35 II',
        price: 299.00,
        image: 'https://via.placeholder.com/150?text=Bose+QC35',
        specifications: [
            'Model: QuietComfort 35 II',
            'Battery Life: 20 hours',
            'Noise Cancellation: Yes',
            'Special Features: Alexa built-in, Multi-device pairing'
        ]
    },
    {
        id: 13,
        name: 'Nikon D850 DSLR Camera',
        price: 2799.00,
        image: 'https://via.placeholder.com/150?text=Nikon+D850',
        specifications: [
            'Model: D850',
            'Storage: SD/CFexpress card',
            'Sensor: Full-frame CMOS sensor',
            'Resolution: 45.7 MP',
            'Special Features: 4K UHD video, 7fps continuous shooting'
        ]
    },
    {
        id: 14,
        name: 'GoPro HERO10 Black',
        price: 499.00,
        image: 'https://via.placeholder.com/150?text=GoPro',
        specifications: [
            'Model: HERO10 Black',
            'Storage: microSD card',
            'Processor: GP2 chip',
            'Resolution: 5.3K at 60fps',
            'Special Features: HyperSmooth 4.0, Waterproof'
        ]
    },
    {
        id: 15,
        name: 'Microsoft Xbox Series X',
        price: 499.00,
        image: 'https://via.placeholder.com/150?text=Xbox+Series+X',
        specifications: [
            'Model: Xbox Series X',
            'Storage: 1TB SSD',
            'Processor: AMD Zen 2',
            'RAM: 16GB GDDR6',
            'Special Features: 4K UHD, Ray Tracing, Smart Delivery'
        ]
    },
    {
        id: 16,
        name: 'Razer Blade 15 Advanced',
        price: 2299.00,
        image: 'https://via.placeholder.com/150?text=Razer+Blade',
        specifications: [
            'Model: Blade 15 Advanced',
            'Storage: 512GB SSD',
            'Processor: Intel Core i7-10875H',
            'RAM: 16GB',
            'Graphics: NVIDIA GeForce RTX 3070',
            'Special Features: 144Hz display, RGB keyboard'
        ]
    },
    {
        id: 17,
        name: 'Oculus Quest 2 VR Headset',
        price: 299.00,
        image: 'https://via.placeholder.com/150?text=Oculus+Quest',
        specifications: [
            'Model: Quest 2',
            'Storage: 64GB/256GB',
            'Processor: Qualcomm Snapdragon XR2',
            'Display: LCD 1832 x 1920 per eye',
            'Special Features: Wireless VR, 6DOF tracking, Hand tracking'
        ]
    },
    {
        id: 18,
        name: 'Samsung QN90A Neo QLED TV',
        price: 1799.00,
        image: 'https://via.placeholder.com/150?text=Samsung+QN90A',
        specifications: [
            'Model: QN90A Neo QLED',
            'Storage: N/A',
            'Processor: Neo Quantum Processor 4K',
            'Display: 4K QLED',
            'Special Features: Quantum HDR 32X, 120Hz refresh rate, Smart TV'
        ]
    }
];

let cart = [];
let currentProductId; // Variable to hold the current product ID

function displayProducts() {
    const productContainer = document.getElementById('products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
        `;
        productDiv.onclick = () => openProductDetails(product); // Open details on product click
        productContainer.appendChild(productDiv);
    });
}

function openProductDetails(product) {
    currentProductId = product.id; // Set the current product ID
    const selectedProduct = products.find(p => p.id === currentProductId);
    document.getElementById('product-name').innerText = selectedProduct.name;
    document.getElementById('product-image').src = selectedProduct.image;
    document.getElementById('product-price').innerText = `$${selectedProduct.price.toFixed(2)}`;
    
    // Populate specifications
    const specificationsList = document.getElementById('product-specifications');
    specificationsList.innerHTML = '';
    selectedProduct.specifications.forEach(specification => {
        const li = document.createElement('li');
        li.innerText = specification;
        specificationsList.appendChild(li);
    });

    document.getElementById('product-modal').style.display = 'block';
    document.getElementById('main-content').classList.add('blur'); // Add blur effect
}

function addToCart() {
    const product = products.find(p => p.id === currentProductId); // Find the product by ID
    if (product) {
        cart.push(product);
        document.getElementById('cart-button').innerText = `Cart (${cart.length})`;
        closeProductDetails(); // Close the modal after adding to cart
    }
}

function openCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous items
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
        totalPrice += item.price;
    });

    document.getElementById('total-price').innerText = `Total: $${totalPrice.toFixed(2)}`;
    cartModal.style.display = 'block';
}

function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from cart
    document.getElementById('cart-button').innerText = `Cart (${cart.length})`; // Update cart count
    openCart(); // Refresh cart display
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

function closeProductDetails() {
    document.getElementById('product-modal').style.display = 'none';
    document.getElementById('main-content').classList.remove('blur'); // Remove blur effect
}

// Initialize the product display
displayProducts();
