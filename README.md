# api-qwiik

This project is an API automation testing framework for the [GoRest](https://gorest.co.in/) API. It utilizes Node.js, Mocha, Chai, and Supertest to verify user management operations (Create, Read, Update, Delete).

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

-   [Node.js](https://nodejs.org/) (v14 or higher is recommended)
-   npm (Node Package Manager)

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository_url>
    cd api-qwiik
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

## Configuration

1.  Create a `.env` file in the root directory. You can use the provided `.env.example` as a template.
    ```bash
    cp .env.example .env
    ```

2.  **Get your Access Token:**
    *   Go to [https://gorest.co.in/](https://gorest.co.in/) and login/register.
    *   Navigate to your account page to find your Access Token.

3.  **Configure environment variables:**
    *   Open the `.env` file you just created.
    *   Paste your Access Token as the value for `TOKEN`.
    *   (Optional) Update `BASE_URL` if needed.

    **Example `.env` content:**
    ```env
    BASE_URL=https://gorest.co.in/public/v2
    TOKEN=a1b2c3d4e5f6... (your actual token here)
    ```

## Running Tests

To execute the automated test suite, run the following command:

```bash
npm test
```

This will run the Mocha tests located in the `test/` directory.

### Test Scenarios

The test suite covers the following end-to-end user management scenarios:

1.  **Create User**: Verifies that a new user can be successfully created via `POST /users`.
2.  **Get User**: Verifies that the created user's details can be retrieved via `GET /users/{id}`.
3.  **Update User**: Verifies that user details can be updated via `PUT /users/{id}`.
4.  **Delete User**: Verifies that the user can be deleted via `DELETE /users/{id}`.

## Project Structure

-   `test/`: Contains the test specifications (e.g., `gorest.test.js`).
-   `.env`: Configuration file for environment variables (not committed to git).
-   `package.json`: Project metadata and dependencies.
