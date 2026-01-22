let products = JSON.parse(localStorage.getItem('inventory')) || [];

        document.getElementById('fileInput').addEventListener('change', function(e) {
            const reader = new FileReader();
            reader.onload = (event) => {
                products = JSON.parse(event.target.result);
                saveAndRender();
            };
            reader.readAsText(e.target.files[0]);
        });

        const filterItems = () => {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const category = document.getElementById('filterCategory').value;

            const filtered = products.filter(p => {
                const matchesSearch = p.name.toLowerCase().includes(searchTerm);
                const matchesCat = category === 'all' || p.category === category;
                return matchesSearch && matchesCat;
            });
            render(filtered);
        };

        document.getElementById('searchInput').addEventListener('input', filterItems);
        document.getElementById('filterCategory').addEventListener('change', filterItems);

        function updateStock(id, amount) {
            const product = products.find(p => p.id === id);
            if (product) {
                product.stock = Math.max(0, product.stock + amount);
                saveAndRender();
            }
        }

        function saveAndRender() {
            localStorage.setItem('inventory', JSON.stringify(products));
            render(products);
        }

        function render(data) {
            const grid = document.getElementById('inventory-grid');
            grid.innerHTML = data.map(p => `
                <div class="product-card ${p.stock < 5 ? 'low-stock' : ''}">
                    <img src='${p.url}'>
                    <h3>${p.name}</h3>
                    <p>Category: ${p.category}</p>
                    <p>Price: $${p.price}</p>
                    <p><strong>Stock: ${p.stock}</strong></p>
                    ${p.stock < 5 ? '<p style="color:red">⚠️ Low Stock!</p>' : ''}
                    <button onclick="updateStock(${p.id}, 1)">+ Add</button>
                    <button onclick="updateStock(${p.id}, -1)">- Remove</button>
                </div>
            `).join('');
        }

        render(products);