let glazings = ["None", "Suger-milk", "Vanilla-milk", "Double-chocolate"];
let quantities = [1, 3, 6, 12];

function loadPage(bunName) {
    let glazingBtns = document.getElementsByClassName("glazing-btn");
    let quantityBtns = document.getElementsByClassName("quantity-btn");
    
    let glazing = glazings[0];
    glazingBtns[0].classList.add("selected");
    
    let quantity = quantities[0];
    quantityBtns[0].classList.add("selected");
    
    for (let i = 0; i < glazingBtns.length; i++) {
        glazingBtns[i].addEventListener("click", function() {
            glazing = glazings[i];
            glazingBtns[i].classList.add("selected");
            for (let j = 0; j < glazingBtns.length; j++) {
                if (j !== i) {
                    glazingBtns[j].classList.remove("selected");
                }
            }
        });
    }
    
    for (let i = 0; i < quantityBtns.length; i++) {
        quantityBtns[i].addEventListener("click", function() {
            quantity = quantities[i];
            quantityBtns[i].classList.add("selected"); 
            for (let j = 0; j < quantityBtns.length; j++) {
                if (j !== i) {
                    quantityBtns[j].classList.remove("selected");
                }
            }
        });
    }
    
    let addToCartBtn = document.getElementById("add-to-cart-btn");
    addToCartBtn.addEventListener("click", function() {
        alert(bunName + " (Glazing: " + glazing + ", Quantity: " + quantity + ") added to cart!");
    });
};
