// Welcome screen to validator
alert("Welcome to My Tolueen's Credit Card Validator");

// Function to input credit card number
function creditCardNumber() {
  let cardNumber = prompt("Enter your credit card number:");
  return cardNumber;
}

// Possible Card Patterns
let Visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
let MasterCard = /^5[1-5][0-9]{14}$/;
let AmericanExpress = /^3[2-6]{5}[0-9]{9}$/;

// Function to validate credit card number
function validateCardNumber(cardNumber) {
  if (Visa.test(cardNumber)) {
    return "Visa card has been authenticated";
  } else if (MasterCard.test(cardNumber)) {
    return "MasterCard has been authenticated";
  } else if (AmericanExpress.test(cardNumber)) {
    return "American Express has been authenticated";
  } else {
    return "Unknown card, Kindly try again";
  }
}


// Function to select an action
function selectCard() {
  let cardNumber = creditCardNumber(); // Get credit card number from the user
  if (!cardNumber) {
    return;                             // Exit if the user cancels or provides no input
  }
  
  let choice = prompt("Select a card type:\nM for MasterCard\nV for Visa\nA for American Express\nE to Exit").toUpperCase();
  switch (choice) {
    case "M":
      console.log(validateCardNumber(cardNumber)); // Validate the provided card number for Mastercard
      break;
    case "V":
      console.log(validateCardNumber(cardNumber));  // Validate the provided card number for Visa
      break;
    case "A":
      console.log(validateCardNumber(cardNumber));    // Validate the provided card number for America Express
      break;
    case "E":
      exitValidator(); // Call function to exit validator
      break;
    default:
      console.log("Invalid selection, please try again.");
      selectCard(); // Restart for user to make a valid entry
  }
}

// Function to exit validator app
function exitValidator() {
  console.log("Thank you for using our service.");
  return;
}

selectCard(); // Start the card selection process