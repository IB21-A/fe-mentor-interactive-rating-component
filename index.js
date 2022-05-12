document.addEventListener("DOMContentLoaded", () => {
  initializeButtons();
});

const initializeButtons = () => {
  initalizeRatingButtons();
  initalizeSubmitButton();
};

const initalizeRatingButtons = () => {
  let ratingButtons = document.querySelectorAll(".rating-number");

  const resetButtons = (ratingButtons) => {
    ratingButtons.forEach((button) => {
      button.setAttribute("aria-selected", false);
    });
  };

  ratingButtons.forEach((button) => {
    button.addEventListener("click", () => {
      resetButtons(ratingButtons);
      button.setAttribute("aria-selected", "true");
    });
  });
};
const initalizeSubmitButton = () => {};
