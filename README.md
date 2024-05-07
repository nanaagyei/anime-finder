# Anime Search Application

This project is a simple web application built with Express.js that allows users to search for anime titles or browse by category using the Kitsu API. Users can input a title or select a category to retrieve relevant anime information.

![Front page of anime finder](Anifinder.png)

## Prerequisites

Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node.js package manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nanaagyei/anime-finder.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your_repository
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Add your Kitsu API key:

   Open `index.js` and replace the value of `apiKey` variable with your Kitsu API key.

## Usage

To run the application, execute the following command:

```bash
npm start
```

The application will be running on port 3000 by default. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Features

- **Search by Title**: Users can search for anime titles by entering the title in the search bar.
- **Browse by Category**: Users can select a category to browse and retrieve anime titles belonging to that category.
- **Error Handling**: If no results are found or an error occurs during the search, appropriate error messages are displayed to the user.

## Technologies Used

- [Express.js](https://expressjs.com): Web Application framework for Node.js
- [axios](https://axios-http.com/): Promise-based HTTP client for making API requests
- [body-parser](https://www.npmjs.com/package/body-parser): Middleware for parsing incoming request bodies
- [EJS](https://ejs.co/): Embedded JavaScript templating for rendering HTML pages

## Acknowledgement

This project utilizes the Kitsu API for retrieving anime data. Special thanks to the creators of Kitsu for providing this API.

Feel free to contribute to this project by submitting bug reports, feature requests, or pull requests. If you encounter any issues or have suggestions for improvements, please feel free to open an issue. Thank you for using our Anime Search Application! 🎉
