const birthdayCard = document.getElementById('birthdayCard');

  birthdayCard.addEventListener('click', toggleCard);
  birthdayCard.addEventListener('touchstart', toggleCard); // Handle touch events

  function toggleCard() {
    birthdayCard.classList.toggle('opened');
  }

  // Open the card initially
  toggleCard();

  // Set a timeout to close the card after a certain duration (adjust as needed)
  setTimeout(() => {
    toggleCard();
  }, 5000);