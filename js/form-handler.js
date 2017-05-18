// console.log("I am the handler of forms");

function getEmail () {
  event.preventDefault();
  var email = document.customerEmail.email.value;
  if (email != "") {
    console.log("Thanks for signing up for our mailing list, " + email + "!!");
  } else {
    console.log("Please enter an email address!");
  }
}
