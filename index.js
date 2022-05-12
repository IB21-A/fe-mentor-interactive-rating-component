let rating;

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
      rating = button.getAttribute("data-value");
    });
  });
};

const initalizeSubmitButton = () => {
  let button = document.querySelector("button#submit-rating");
  button.addEventListener("click", submitRating);
};

const submitRating = () => {
  if (rating < 1) return;
  let button = document.querySelector("button#submit-rating");
  button.removeEventListener("click", submitRating);

  let ratingState = document.querySelector("#rating-state");
  let thankYouState = document.querySelector("#thank-you-state");

  ratingState.setAttribute("aria-hidden", true);
  thankYouState.setAttribute("aria-hidden", false);
  ratingText = document.querySelector("span.user-rating");
  ratingText.innerText = rating;
};
