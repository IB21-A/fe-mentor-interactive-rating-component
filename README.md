# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Component Demo Gif](./images/interactive-rating-component.gif)

The demo image shows the 4 being selected (light grey color) and the 5 being hovered (primary orange color)

### Links

- Live Site URL: [http://www.thomcodes.com/fe-mentor-interactive-rating-component/](http://www.thomcodes.com/fe-mentor-interactive-rating-component/)

## My process

I took a look at the design mock ups and determined everything would be contained within a centered card component. From there I added the skeleton HTML to each of the states, and hid the thank-you state while I worked on styling the rating-state. First thing first- I added the modern CSS reset that I always use along with the font import and color variables.

I gave myself a basic border on the card so I could see what I was working within and went about setting up my flex containers. Next I added the star and numbers, gave them all the same round-container css component. Once these elements wer in place I added the radial gradient background to the card and removed my preview border.

I wanted the elements to be tabbable so I added the option by adding tabindex to the elements tabbable elements. I used the aria-selected attribute to track which element was selected and used that for styling. I added event listeners to the ratings so they could be clicked or space/entered to set the rating which was stored in a variable. If a number is clicked, all others are reset to aria-selected="false". This variable by default is 0, and if the rating is not > 0 then the submit button won't work.

Next I added the state change, an event listener that will grab the current rating and hide the rating state and show the thank you state. I realized I had used the card element twice, once for each state. It made more sense to have both states contained within one card, and so I made some changes to the card's behavior from there.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JS

### What I learned

If you need to add tab access to elements, use the tabindex="0" attribute.

For some strange reason, default tab-access is disabled in safari. To enable it, check "Preferences > Advanced > Press tab to highlight each item on a page"

```html
<div
  tabindex="0"
  class="round-container rating-number"
  aria-selected="false"
  data-value="5"
>
  5
</div>
```

To add a radial-background, use the background property (not background-color). You can set the placement, followed by color and where that color reaches it's peak as well as other attributes.

```css
.rating-card {
  background: radial-gradient(
    circle at top,
    hsl(219, 23%, 19%) 0,
    var(--clr-veryDarkBlue) 110%
  );
}
```

### Continued development

I picked up this project to spend some time working with vanilla JS. I plan to do more this way as I improve my front end JS skills. This project wasn't difficult, just took some time. I plan to do more projects with vanilla JS and get more practice with DOM manipulation outside of a framework like React which I have been using for a while.

### Useful resources

- [MDN CSS radial-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient) - This helped with adding my radial gradient background
- [Team Treehouse JS Forum](https://teamtreehouse.com/community/how-to-add-enter-event-listener-aside-from-clicking-the-button) - This helped with adding keypress to my rating buttons
- [Key.js](https://keyjs.dev/) - This helped determine keycodes

## Author

- Website - [Thom Zolghadr](https://www.thomcodes.com.com)
- Frontend Mentor - [@IB21-A](https://www.frontendmentor.io/profile/IB21-A)
- Twitter - [@Thom_codes](https://twitter.com/Thom_codes)
