# Social media dashboard with theme switcher - Frontend Mentor challenge

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

![Design preview for the Social media dashboard with theme switcher coding challenge](./design/desktop-preview.jpg)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Links

- Live Site URL: [github.io](https://yoniakabecky.github.io/mini-projects-2/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Javascript

### What I learned

How to use variables in pure css

```css
:root {
  --facebook: hsl(208, 92%, 53%);
  --twitter: hsl(203, 89%, 53%);
}
.facebook {
  background: var(--facebook);
}
```

How to get prefers color scheme

```js
const prefersScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (!prefersScheme.matches) {
  // do something
}
```

### Useful resources

- [CSS Tricks](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#using-separate-stylesheets) - This site helped me to learn basics of dark mode.
