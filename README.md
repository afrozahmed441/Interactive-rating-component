# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./design/desktop-preview.jpg)

### Links

- Solution URL: [Github](https://github.com/afrozahmed441/Interactive-rating-component)
- Live Site URL: [Website](https://illustrious-shortbread-5f9c3e.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox
- CSS Media Queries
- DOM Manipulation
- JavaScript Mouse Events

### What I learned

In this challenge, I have learned how to use the data attribute on the HTML Elements to store the data that can be used later in code to perform certain actions. In my case, I used the data attribute on the rating buttons to store the rating value of each button, so when the user clicks any of the rating buttons I can get the rating from the dataset property in my script and can use this information to to print the rating given by the user on the thankyou card.

```html
<div class="container__rating-btns">
  <button class="btn-rate" data-id="1">1</button>
  <button class="btn-rate" data-id="2">2</button>
  <button class="btn-rate" data-id="3">3</button>
  <button class="btn-rate" data-id="4">4</button>
  <button class="btn-rate" data-id="5">5</button>
</div>
```

In javaScript instead of adding the eventListener to all the rating buttons, I used the concept of Event `BUBBLING PHASE` to handle all the clicks on the rating buttons by just adding single event listener on the rating buttons container. This helps in improving the performace of the script. I also learned how to implement the hover and active states on a button in JS using mouse events and manipulating the class list of HTML Element.

```js
let rating;

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
```

In CSS I learned how to store and use the custom properties. CSS custome properties are just like variables in programming language they can be used to store any value (colors, font-styles, font-size, etc), it helps to organize and write `CLEAN CSS`.

```css
:root {
  --color-primary: hsl(25, 97%, 53%);
  --color-white: hsl(0, 0%, 100%);
  --color-black: hsl(0, 0%, 0%);
  --color-light-gray: hsl(217, 12%, 63%);
  --color-medium-gray: hsl(216, 12%, 54%);
  --color-dark-blue: hsl(213, 19%, 18%);
  --color-super-dark-blue: hsl(216, 12%, 8%);
}

body {
  color: var(--color-white)l
  background-color: var(--color-black);
}

```

### Useful resources

- [MDN Data Attribute](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) - This helped me better understand data attributes.
- [MDN Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events) - Reference to Events in JS.

## Author

- Frontend Mentor - [@afrozahmed441](https://www.frontendmentor.io/profile/afrozahmed441)
- Twitter - [@AfrozAhmed](https://www.twitter.com/@Afroz_Ahmed_)
