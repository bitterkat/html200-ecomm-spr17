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
  return cart;
}

function removeFromCart(id,name) {
  event.preventDefault();
//   var singleProduct = {name: name, id: id};
//   if (cart.length == 0) {
//     console.log("nothing in cart");
//   }
//   else if //look for productid and find it's index, then splice it
//   console.log("removed " + singleProduct);
// } else {
//   console.log("product not in cart");
}

  // console.log(singleProduct);
  // console.log(cart.length);
