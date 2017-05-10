console.log("I am the handler of forms");

var cart = [];

function getEmail () {
  event.preventDefault();
  var email = document.customerEmail.email.value;
  if (email != "") {
    console.log("Thanks for signing up for our mailing list, " + email + "!!");
  } else {
    console.log("Please enter an email address!");
  }
}

function addToCart(id,name) {
  event.preventDefault();
  var singleProduct = {name: name, id: id};
  cart.push({singleProduct});
  console.log(singleProduct);
  console.log(cart.length);
}

function removeFromCart(id,name) {
  event.preventDefault();
  var singleProduct = {name: name, id: id};
  // to do: look for product id in cart and delete it from index
  cart.pop({singleProduct}); // don't use pop here
  console.log(singleProduct);
  console.log(cart.length);
}
