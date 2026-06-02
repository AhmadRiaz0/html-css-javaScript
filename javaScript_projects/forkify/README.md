# Forkify

> An interactive recipe application to search, view, and manage your favorite recipes.

Forkify allows you to search for recipes among over a million options, view full recipe details, manage bookmarks, and even add your own recipes. This project was developed to practice **modern JavaScript (ES6+), MVC architecture, REST API, and dynamic DOM manipulation**.

---

## Overview

Forkify is a web application that uses a **recipe API** to display real-time results. Users can:

- Search for recipes by keyword or ingredient.
- View full recipe details (ingredients, cooking time, servings).
- Adjust the number of servings and automatically recalculate ingredient quantities.
- Add recipes to bookmarks.
- Submit new recipes via a user-friendly form.
- Easily navigate between search result pages using pagination.

The project is structured using the **MVC pattern** to separate business logic (Model), UI rendering (View), and user interactions (Controller).

---

## Features

- **Recipe Search**: enter a keyword or ingredient to find recipes.
- **Detailed Recipe View**: see ingredients, servings, cooking time, directions, and source link.
- **Servings Adjustment**: change the number of servings and automatically update ingredient quantities.
- **Bookmarks**: add or remove recipes from favorites stored in `localStorage`.
- **Add Recipe**: submit your own recipes via a form.
- **Pagination**: navigate between multiple pages of search results.
- **User Feedback**: loading spinners, error messages, and success notifications.
- **Responsive Design**: works on both desktop and mobile devices.

---

## Technologies Used

- **Languages**: HTML5, CSS3/Sass, JavaScript ES6+
- **Architecture**: MVC (Model – View – Controller)
- **Libraries & Tools**:
  - [Parcel](https://parceljs.org/) for bundling and hot reloading
  - [core-js](https://github.com/zloirock/core-js) for cross-browser compatibility
  - [regenerator-runtime](https://github.com/facebook/regenerator) for async/await support
  - [fraction.js](https://www.npmjs.com/package/fraction.js) for displaying quantities as fractions
- **API**: Forkify API (REST JSON)
- **Local Storage**: storing bookmarks
- **Deployment**: [Netlify](https://www.netlify.com/) or any static host
- **Version Control**: Git + GitHub
