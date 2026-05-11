// Simple Fruits Data
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
        name: "Tropical Mango",
        price: "$5.00",
        img: "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
        name: "Watermelon",
        price: "$6.00",
        img: "https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=500"
    }
];

// Show Any Section
function showSection(sectionId) {

    let sections = document.querySelectorAll(".section-container");

    sections.forEach(function(section) {
        section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");
}

// Login Function
function handleLogin() {

    let username = document.getElementById("username").value;

    if (username !== "") {
        showSection("main-ui");
        displayFruits(fruits);
    } else {
        alert("Please enter username");
    }
}

// Show Fruits
function displayFruits(items) {

    let grid = document.getElementById("fruit-grid");

    grid.innerHTML = "";

    items.forEach(function(fruit) {

        grid.innerHTML += `
            <div class="fruit-card">

                <img src="${fruit.img}" class="fruit-img">

                <div class="card-content">
                    <h3>${fruit.name}</h3>

                    <p class="price">${fruit.price}</p>

                    <button class="btn-main"
                        onclick="showPayment('${fruit.name}', '${fruit.price}')">
                        Add to Cart
                    </button>
                </div>

            </div>
        `;
    });
}

// Search Fruits
function searchFruits() {

    let searchValue = document.getElementById("searchBar").value.toLowerCase();

    let filteredFruits = fruits.filter(function(fruit) {

        return fruit.name.toLowerCase().includes(searchValue);

    });

    displayFruits(filteredFruits);
}

// Show Payment Screen
function showPayment(name, price) {

    showSection("payment-ui");

    document.getElementById("selected-fruit-name").innerText = name;

    document.getElementById("selected-fruit-price").innerText = price;
}

// Back To Store
function backToStore() {
    showSection("main-ui");
}

// Back To Login
function goToLogin() {
    showSection("login-screen");
}

// Payment Function
function processPayment() {

    let fruitName = document.getElementById("selected-fruit-name").innerText;

    alert("Payment Successful! Your " + fruitName + " will be delivered soon.");

    showSection("main-ui");
}