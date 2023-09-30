// JavaScript to toggle card rotation on click

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  const toggleButtons = card.querySelectorAll(".toggle-button");

  toggleButtons.forEach(button => {
    button.addEventListener("click", function() {
      card.classList.toggle("is-flipped");
    });
  });
});