function register() {
    // Get values from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform registration logic (you may want to store this data or send it to a server)
    console.log('Registered:', username);
}
function login() {
    // Get values from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform login logic (you may want to check against registered users or a server)
    console.log('Logged in:', username);
}
var cart = []; // Array to store cart items

function addToCart(item) {
    cart.push(item);
    updateCart();
}

function updateCart() {
    var cartList = document.getElementById('cartList');
    cartList.innerHTML = ''; // Clear previous items

    // Add new items to the cart list
    cart.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });
}
function processPayment() {
    // In a real-world scenario, you would integrate with a payment gateway
    // and securely handle the transaction on the server side.
    alert('Payment processed successfully!');
}
