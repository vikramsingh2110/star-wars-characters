# Star Wars Characters React Application

This React application fetches a list of Star Wars characters from a public API (`https://swapi.dev/`) and provides features like pagination, loading indicators, error handling, character details modal, search and filter functionality and JWT authentication. The UI is designed using Tailwind CSS.

## Features

- Display a list of Star Wars characters with pagination.
- Show a loading indicator during data fetches and handle errors gracefully.
- Display each character as a card with a random image from Picsum Photos.
- Apply a specific background color to each card based on the character's species.
- Add hover animations to the cards.
- Show more details about a character in a modal when a card is clicked.
- Provide a search bar to find characters by name (partial or full).
- Implement filters for characters based on homeworld, film, or species.
- Ensure search and filter functions can work together.
- Implement JWT authentication with login and logout UI.
- Include a mechanism for silent token refresh when it expires.
- Mock authentication with a fake username and password.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/vikramsingh2110/star-wars-characters.git
    cd star-wars-characters-react-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Authentication

This application uses a simple JWT authentication system. The login credentials are:

- **Username:** `user`
- **Password:** `password`

## Tailwind CSS

The application uses Tailwind CSS for styling. The configuration is located in the `tailwind.config.js` file.

