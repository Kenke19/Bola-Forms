// Toggle Filters on Mobile
function toggleFilters() {
    const filterOptions = document.getElementById('filter-options');
    filterOptions.classList.toggle('active');
}

// Initialize Filters and Sort
document.getElementById('category-filter').addEventListener('change', filterProducts);
document.getElementById('price-filter').addEventListener('change', filterProducts);
document.getElementById('sort-by').addEventListener('change', sortProducts);

function filterProducts() {
    const category = document.getElementById('category-filter').value;
    const priceRange = document.getElementById('price-filter').value;
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        const productPrice = parseFloat(product.getAttribute('data-price'));

        const categoryMatch = category === 'all' || productCategory === category;
        const priceMatch = priceRange === 'all' || (
            (priceRange === '0-150000' && productPrice <= 150000) ||
            (priceRange === '150000-400000' && productPrice > 150000 && productPrice <= 400000) ||
            (priceRange === '400000+' && productPrice >= 400000)
        );

        if (categoryMatch && priceMatch) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function sortProducts() {
    const sortBy = document.getElementById('sort-by').value;
    const productGrid = document.querySelector('.product-grid');
    const products = Array.from(document.querySelectorAll('.product-card'));

    products.sort((a, b) => {
        const priceA = parseFloat(a.getAttribute('data-price'));
        const priceB = parseFloat(b.getAttribute('data-price'));

        if (sortBy === 'price-low-high') return priceA - priceB;
        if (sortBy === 'price-high-low') return priceB - priceA;
        return 0;
    });

    productGrid.innerHTML = '';
    products.forEach(product => productGrid.appendChild(product));
}

