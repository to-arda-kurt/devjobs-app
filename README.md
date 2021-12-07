# Devjobs App Frontendmentor Challanges

Devjobs App is Job Ads Listing Applications for Developers. Original project created by [frontendmentor.io](https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l)

## Tech Stack

**Client:** Next.js, Sass(/w Flexbox), Framer, React Icons

**Todo:** MongoDB, Redux?

## Color Reference

| Primary Colors | Hex                                                              |
| -------------- | ---------------------------------------------------------------- |
| Violet         | ![#5964E0](https://via.placeholder.com/10/5964E0?text=+) #5964E0 |
| Light Violet   | ![#939BF4](https://via.placeholder.com/10/939BF4?text=+) #939BF4 |
| Very Dark Blue | ![#19202D](https://via.placeholder.com/10/19202D?text=+) #19202D |
| Midnight       | ![#121721](https://via.placeholder.com/10/121721?text=+) #121721 |

| Secondary Colors | Hex                                                              |
| ---------------- | ---------------------------------------------------------------- |
| White            | ![#FFFFFF](https://via.placeholder.com/10/fff?text=+) #FFFFFF    |
| Light Gray       | ![#F4F6F8](https://via.placeholder.com/10/F4F6F8?text=+) #F4F6F8 |
| Gray             | ![#9DAEC2](https://via.placeholder.com/10/9DAEC2?text=+) #9DAEC2 |
| Dark Gray        | ![#6E8098](https://via.placeholder.com/10/6E8098?text=+) #6E8098 |

Also Font: [Kumbh Sans](https://fonts.google.com/specimen/Kumbh+Sans)

## Breakdowns

// Page Breakdowns
$desktop-max-width: 1440px;

// App Widths
$desktop-app-width: 1140px;

## Demo/Live

[Live](#)
Demo Link will be added later.

## Roadmap

- Day 1

  - Planing
  - install Next.js
  - Initial Setup
  - Sass Folder Setup
    - \_global.scss /w Fonts, Typography
    - \_variables.scss /w Colors
  - Mock Data.json to Javascript Object

- Day 2

  - Setting up Dark/Light Implementation with next-themes & Sass
    - Changed the Sass file structure. I moved all \_variables.scss to \_themes.scss file structure helps to keep variables with parent theme-mode.
  - Components and Common Component file structure.
  - Very basic Next api call with mock data provided and call from index.app.

- Day 3

  - Next/Head seperated another component seo and web app tags will update later.
  - Assets SVG component created common/elements/assets/logos
  - Header & Search Placement

- Day 4
  - Theme Toggle
  - APP Icon Components with locale SVGs

## Run Locally

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
