// 1. Fruits ka Data
const fruits = [
    {
        name: "Red Apple",
        price: "$2.50",
        img: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
        name: "Fresh Banana",
        price: "$1.20",
        img: "https://cdn.pixabay.com/photo/2018/09/24/20/12/bananas-3700718_1280.jpg"
    },
    {
        name: "Juicy Orange",
        price: "$3.00",
        img: "https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
        name: "Sweet Grapes",
        price: "$4.50",
        img: "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
        name: "Zesty Kiwi",
        price: "$3.50",
        img: "https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&q=80&w=500"
    },
    {
        name: "Blueberries",
        price: "$6.20",
        img: "https://images.pexels.com/photos/70862/pexels-photo-70862.jpeg?auto=compress&cs=tinysrgb&w=500"

    },
    {
        name: "Watermelon",
        price: "$6.00",
        img: "https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=500"

    }, { name: "Mango", price: "$5.00", img: "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=500" }
];

let cart = [];


function showSection(id) {
    document.querySelectorAll(".section-container").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}


function handleLogin() {
    let user = document.getElementById("username").value;
    if (user) {
        showSection("main-ui");
        displayFruits(fruits);
    } else {
        alert("Naam likhen!");
    }
}


function displayFruits(list) {
    let grid = document.getElementById("fruit-grid");
    grid.innerHTML = "";
    list.forEach(item => {
        grid.innerHTML += `
            <div class="fruit-card">
                <img src="${item.img}" class="fruit-img">
                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p class="price">${item.price}</p>
                    <button class="btn-main" onclick="addToCart('${item.name}', '${item.price}')">Add to Cart</button>
                </div>
            </div>`;
    });
}


function addToCart(name, price) {
    cart.push({ name, price });
    document.getElementById("cart-count").innerText = cart.length;
    updateCartUI();

    // Sidebar automatic khul jaye
    document.getElementById("cart-sidebar").classList.add("open");
}


function updateCartUI() {
    let listHTML = "";
    let total = 0;

    cart.forEach(item => {
        listHTML += `<div class="cart-item"><span>${item.name}</span><span>${item.price}</span></div>`;
        total += parseFloat(item.price.replace("$", ""));
    });

    document.getElementById("cart-items-list").innerHTML = listHTML || "Cart khali hai";
    document.getElementById("total-price").innerText = "$" + total.toFixed(2);
}


function toggleCart() {
    document.getElementById("cart-sidebar").classList.toggle("open");
}


function goToCheckout() {
    if (cart.length == 0) return alert("Cart khali hai!");
    toggleCart();
    showSection("payment-ui");
    document.getElementById("selected-fruit-name").innerText = cart.length + " Items";
    document.getElementById("selected-fruit-price").innerText = document.getElementById("total-price").innerText;
}

function processPayment() {
    alert("Order Successful!");
    cart = [];
    document.getElementById("cart-count").innerText = "0";
    updateCartUI();
    showSection("main-ui");
}

function searchFruits() {
    let term = document.getElementById("searchBar").value.toLowerCase();
    let found = fruits.filter(f => f.name.toLowerCase().includes(term));
    displayFruits(found);
}

function backToStore() { showSection("main-ui"); }
function goToLogin() { showSection("login-screen"); }