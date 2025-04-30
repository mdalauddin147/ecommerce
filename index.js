// JavaScript code to handle the functionality of the image gallery and navigation


function showCard(imgElement) {
    document.querySelector(".fullPage").style.display = "flex";
    document.getElementById("cartImg").src = imgElement.src;
}

function addToCart() {
    alert("Item added to cart!");
}

function addItem() {
    alert("Cart icon clicked");
}

function home() {
    alert("Navigating to Home");
}

function shop() {
    alert("Navigating to Shop");
}

function blog() {
    alert("Navigating to Blog");
}

function about() {
    alert("Navigating to About");
}

function contact() {
    alert("Navigating to Contact");
}

function add(item) {
    alert("Added " + item + " to cart");
}
