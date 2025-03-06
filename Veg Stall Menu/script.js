const menuItems = [
    { id: 1, name: "Paneer Roll 🌯", price: 50, img: "https://source.unsplash.com/200x150/?paneer,roll" },
    { id: 2, name: "Veg Biryani 🍚", price: 80, img: "https://source.unsplash.com/200x150/?biryani,veg" },
    { id: 3, name: "Chole Bhature 🍛", price: 70, img: "https://source.unsplash.com/200x150/?chole,bhature" },
    { id: 4, name: "Aloo Paratha 🥞", price: 40, img: "https://source.unsplash.com/200x150/?paratha,aloo" },
    { id: 5, name: "Masala Dosa 🥞", price: 60, img: "https://source.unsplash.com/200x150/?dosa,masala" }
];

const cart = [];
const menuContainer = document.getElementById("menu");
const cartItemsContainer = document.getElementById("cart-items");
const orderButton = document.getElementById("order-btn");

function renderMenu() {
    menuContainer.innerHTML = "";
    menuItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "menu-item";
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <button onclick="addToCart(${item.id})">Add to Cart ➕</button>
        `;
        menuContainer.appendChild(div);
    });
}

function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    cart.push(item);
    renderCart();
}

function renderCart() {
    cartItemsContainer.innerHTML = "";
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItemsContainer.appendChild(li);
    });
    orderButton.disabled = cart.length === 0;
}

function placeOrder() {
    alert("Order placed successfully! ✅");
    cart.length = 0;
    renderCart();
}

renderMenu();
