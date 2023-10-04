// JavaScript to toggle card rotation on click

// const cards = document.querySelectorAll(".card");

// cards.forEach(card => {
//   const toggleButtons = card.querySelectorAll(".toggle-button");

//   toggleButtons.forEach(button => {
//     button.addEventListener("click", function() {
//       card.classList.toggle("is-flipped");
//     });
//   });
// });

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  const toggleButtons = card.querySelectorAll(".toggle-button");

  toggleButtons.forEach(button => {
    button.addEventListener("click", function() {
      alert("Button clicked: " + button.className);  // Alert when button is clicked
      card.classList.toggle("is-flipped");
      // Check if class was toggled
      if (card.classList.contains("is-flipped")) {
        alert("Card is flipped");
      } else {
        alert("Card is not flipped");
      }
    });
  });
});