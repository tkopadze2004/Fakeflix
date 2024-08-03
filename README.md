# Fakeflix

Fakeflix is a standalone web application created with Angular 18, designed to provide an engaging experience for browsing movies. Users can authenticate using Firebase, explore a movie carousel with interactive features, and view detailed movie information in a fully responsive layout.

## Introduction

Fakeflix is a modern web application built with Angular 18, focusing on delivering a rich and interactive movie browsing experience. The application integrates with Firebase for user authentication and connects to the TMDB API to fetch real-time movie data. It is designed to be fully responsive, providing an optimal user experience across different devices and screen sizes, all while avoiding the use of external UI libraries.

## Features

- **Angular 18**: Utilizes Angular 18 for the latest features and best practices in modern web development.
- **User Authentication**: Secure login and registration functionalities managed through Firebase Authentication. Forms feature built-in validation (e.g., required fields, email format) as well as custom validators. Notably, a custom validator ensures password and confirmation password fields match, enhanscing the user registration experience and maintaining data integrity.
- **Dynamic Banner**: The banner dynamically displays images generated through a random image service, adding visual interest and variability to the user interface.
- **Movie Carousel**: A horizontally scrolling carousel of movie items with customizable settings for item width and scroll behavior.
- **Movie Details Overlay**: Clicking on a movie item opens an overlay with detailed information about the selected movie, enhancing user interaction without page navigation.
- **Responsive Design**: Ensures an optimal viewing experience on both mobile and desktop devices.
- **Navbar with Logout feature**: Includes a navbar with an icon for logging out. Clicking this icon triggers a logout overlay where users can confirm their intention to log out.
- **Route Guard**: Implements a route guard on the browse page to ensure that only authenticated users can access it, redirecting unauthenticated users to the login page.
- **Real-Time Data Integration**: Connects to the TMDB API to fetch and display up-to-date movie information.
- **Customizable Carousel**: Offers configurable options for item width, the number of items to scroll at once, and image base URL.

## How It Works

1. **User Authentication**:

   - Upon initialization, users are presented with a login form. Below the login form, there is a button that uses `routerLink` to navigate to the registration form.
   - Firebase Authentication manages login and registration, redirecting users to the browse page upon successful login.

2. **Dynamic Banner**:

   - The banner on the browse page displays an image fetched from the `getNetflixTVShows` endpoint. This endpoint provides a random image related to Netflix TV shows, adding visual interest and variability to the user interface.


3. **Movie Browsing**:

   - The browse page includes a navbar with a logout icon, a banner, and a horizontally scrolling movie carousel.
   - Users can scroll through movie items using interactive buttons and view details by clicking on an item.

4. **Movie Details**:

   - Clicking on a movie item reveals an overlay with detailed movie information, enhancing the browsing experience without navigating away from the current page.

5. **Logout**:
   - The navbar features an icon for logging out. Clicking this icon opens a logout overlay where users can confirm their intention to log out. This ensures a secure and user-friendly way to exit their account, with Firebase managing the session and redirecting to the login page upon confirmation.

## Installation

To set up and run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tkopadze2004/Komokie-Task-Fakeflix
   ```
2. **Navigate into the project directory:**

   ```bash
   cd Komokie-Task-Fakeflix

   ```

3. **Install dependencies:**
   ```bash
    npm install
   ```
4. **Build the project:**
   ```bash
   ng build
   ```
5. **Run the development server:**

   ```bash
    ng serve
   ```

   Visit http://localhost:4200 in your browser to view the application.

## Further help

- **TMDB API**: The application connects to the [TMDB API](https://www.themoviedb.org/) to fetch and display up-to-date movie information. Visit their website for more details on the API and available endpoints.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
