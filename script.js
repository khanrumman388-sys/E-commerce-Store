console.log("RK Store Loaded 🚀");

// SIMPLE SCROLL ANIMATION
window.addEventListener("scroll", () => {
    let elements = document.querySelectorAll(".card, .box");

    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

// INITIAL ANIMATION SETUP
document.querySelectorAll(".card, .box").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "0.6s ease";
});


// SIMPLE CART SYSTEM (LOCAL STORAGE)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}


// SEARCH FILTER (basic)
let searchInput = document.querySelector(".search-section input");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        let value = this.value.toLowerCase();
        let products = document.querySelectorAll(".card");

        products.forEach(p => {
            let title = p.querySelector("h3").innerText.toLowerCase();
            p.style.display = title.includes(value) ? "block" : "none";
        });
    });
}