# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](https://i.postimg.cc/2632FWvL/screenshot.png)

### Links

- Solution URL: [solution](https://github.com/Adelinked/loopstudio-landing-page/)
- Live Site URL: [live site](https://loopsstudios-landing-page.netlify.app/)

## My process

### Built with

- [Next.js](https://nextjs.org/) - React framework

### What I learned

I learned how to darken a background image using css ([solution found here](https://www.geeksforgeeks.org/how-to-darken-an-image-using-css/). the background-image property in CSS supports the use of multiple backgrounds that are layered on top of each other. Using the linear-gradient property, a black colored background is used as the front layer and the image to be darkened is used as the back layer.
The opacity of the black gradient can be changed to control the amount of darkening. This can be used accordingly to darken the image as required.

```css
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url("url_of_image");
```

## Author

- Website - [Adelinked](https://adelinked.netlify.app)
- Frontend Mentor - [@AAdelinked](https://www.frontendmentor.io/profile/Adelinked)
