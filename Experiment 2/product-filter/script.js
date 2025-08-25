const products = [
  { name: "Laptop", category: "electronics", price: 999 },
  { name: "Shirt", category: "clothing", price: 25 },
  { name: "Headphones", category: "electronics", price: 199 }
];

document.addEventListener("DOMContentLoaded", () => {
  const filter = document.getElementById('filter');

  filter.addEventListener('change', (e) => {
    const selected = e.target.value;
    const filtered = selected === 'all'
      ? products
      : products.filter(p => p.category === selected);
    renderProducts(filtered);
  });

  // Render all products on initial load
  renderProducts(products);
});

function renderProducts(list) {
  const container = document.getElementById('products-container');
  container.innerHTML = list.map(p => `
    <div class="product">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
    </div>
  `).join('');
}
