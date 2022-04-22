const containerRating = document.querySelector(".container__rating");
const containerThankyou = document.querySelector(".container__thankyou");
const containerRatingBtns = document.querySelector(".container__rating-btns");
const allRatingBtns = document.querySelectorAll(".btn-rate");
const btnSubmit = document.querySelector(".btn-submit");
const ratingResponse = document.querySelector(".rating-response");

let rating;

//// Rating buttons hover and active effects
containerRatingBtns.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-rate-active"))
    e.target.classList.remove("btn-rate-active");
  else {
    allRatingBtns.forEach((btn) => btn.classList.remove("btn-rate-active"));
    e.target.classList.add("btn-rate-active");
    rating = e.target.dataset.id;
  }
});

allRatingBtns.forEach((btn) => {
  btn.addEventListener("mouseover", function () {
    if (!this.classList.contains("btn-rate-active"))
      this.classList.add("btn-rate-hover");
  });
});

allRatingBtns.forEach((btn) => {
  btn.addEventListener("mouseout", function () {
    this.classList.remove("btn-rate-hover");
  });
});

//// Submit
btnSubmit.addEventListener("click", function () {
  /// if rating is undefined
  if (!rating) return alert("Please select a valid rating");
  /// else
  ratingResponse.textContent = `You selected ${rating} out of 5`;
  containerRating.classList.add("hidden");
  containerThankyou.classList.remove("hidden");
});
