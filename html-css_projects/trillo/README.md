Trillo
Trillo is a responsive web application interface designed as a modern hotel booking UI. It provides a clean and structured layout where users can explore hotels, view details, check reviews, and interact with navigation elements such as search, user notifications, and booking actions.

The project focuses on advanced CSS layout techniques, especially Flexbox, and demonstrates how to build a scalable and maintainable UI using modular SCSS architecture.

Overview
The application is structured into several main sections:

- **Header**: Contains the logo, search bar, and user navigation (notifications and profile).
- **Sidebar Navigation**: Provides access to different categories such as hotels, flights, car rentals, and tours.
- **Main Content Area**:
  - **Gallery**: Displays hotel images.
  - **Overview Section**: Shows hotel name, rating, location, and key information.
  - **Details Section**:
    - Description of the hotel with key features.
    - User reviews with ratings.
  - **Call To Action (CTA)**: Encourages users to book a room with a dynamic button interaction.

The layout is fully responsive and adapts to different screen sizes using media queries.

Technologies Used

- **HTML5**: Structure of the application.
- **SCSS (Sass)**: Modular and maintainable styling using nesting, variables, and mixins.
- **CSS3 Flexbox**: Primary layout system used for alignment and responsiveness.
- **CSS Variables**: Used for color theming and consistency.
- **PostCSS + Autoprefixer**: Ensures cross-browser compatibility.
- **Node.js / npm scripts**:
  - `sass` for compiling SCSS
  - `live-server` for development server
  - `npm-run-all` for running tasks in parallel
  - CSS build pipeline (compile, prefix, compress)
