document.addEventListener("DOMContentLoaded", () => {
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
});
