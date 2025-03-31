document.getElementById('fetch-data').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/products');
        const products = await response.json();

        const productList = document.getElementById('product-list');
        productList.innerHTML = '';

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `<h2>${product.name}</h2>
                                    <img src="${product.image}" alt="${product.name}">
                                    <p>${product.description}</p>
                                    <p>Price: $${product.price}</p>`;
            productList.appendChild(productDiv);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
