
const cartItems = [
    { id: 1, name: "Apple", price: 2, quantity: 1 },
    { id: 2, name: "Banana", price: 1, quantity: 1 },
    { id: 3, name: "Orange", price: 3, quantity: 1 }
];

function renderCart() {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = '';

    cartItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.innerHTML = `
            <span>${item.name}</span>
            <div>
                <button onclick="changeQuantity(${item.id}, 'decrease')">-</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, 'increase')">+</button>
                <button class="delete" onclick="deleteItem(${item.id})">Delete</button>
            </div>
        `;
        cartContainer.appendChild(itemDiv);
    });

    updateTotalPrice(); 
}


function changeQuantity(id, action) {
    const item = cartItems.find(item => item.id === id);
    if (action === 'increase') {
        item.quantity++;
    } else if (action === 'decrease' && item.quantity > 1) {
        item.quantity--;
    }
    renderCart(); 
}


function deleteItem(id) {
    const index = cartItems.findIndex(item => item.id === id);
    if (index !== -1) {
        cartItems.splice(index, 1); 
    }
    renderCart(); 
}

function updateTotalPrice() {
    let total = 0;
    cartItems.forEach(item => {
        total += item.price * item.quantity;
    });
    document.getElementById("total-price").textContent = total;
}


renderCart();
