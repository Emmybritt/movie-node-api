# Movies API

This is a RESTful API for managing movie data.

## Table of Contents

-   [Prerequisites](#prerequisites)
-   [Getting Started](#getting-started)

    -   [Installation](#installation)
    -   [Configuration](#configuration)
    -   [Running the Application](#running-the-application)

-   [API Endpoints](#api-endpoints)

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   **Node.js**: Ensure you have Node.js installed. Download it from [https://nodejs.org/](https://nodejs.org/).

## Getting Started

### Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/Emmybritt/movie-node-api.git

    ```

2. Change to the project directory:

    ```
    cd movies-api
    ```

3. Install project dependencies:

    ```
    yarn install
    ```

4. Create a .env file in the project root based on the .env.example template:

5. Running The application

    ```
    yarn run dev
    ```

The API should now be accessible at http://localhost:3333 (or the port you specified in your .env).

### API Endpoints

Below are the available API endpoints:

    ```

    GET /api/v1/movies: Get a list of all movies.
    GET /api/v1/movie/:id: Get details of a specific movie.
    POST /api/v1/create/movies: Create a new movie.
    PATCH /api/v1/update-movie/:id: Update details of a specific movie.
    DELETE /v1/delete-movie/:id Delete a movie.
    Example: To fetch all movies, make a GET request to http://localhost:3000/api/movies.
    ```
