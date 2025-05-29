```markdown
# MERN Login System

A simple and secure login/register backend built with **Node.js**, **Express**, and **MongoDB**. This project is designed as the backend for a MERN (MongoDB, Express, React, Node.js) stack authentication system.

---

## Features

- User registration with hashed passwords
- User login with JWT authentication
- Protected routes (profile, update profile)
- Input validation with `express-validator`
- Role support (user/admin)
- Environment-based configuration

---

## Folder Structure

```
.
├── .env
├── README.md
└── backend/
    ├── package.json
    ├── server.js
    ├── config/
    │   └── database.js
    ├── controllers/
    │   └── authcontrollers.js
    ├── middleware/
    │   └── auth.js
    ├── models/
    │   └── user.js
    ├── routes/
    │   └── auth.js
    └── src/
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ayukshh/mern-login-system.git
   cd mern-login-system/backend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory:

   ```(just an example)

   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/login_page
   -jJWT_SECRET=-super-secretwt-key-change-this-in-production
   ```

4. **Start the server:**
   ```sh
   npm run dev
   ```
   The server will run on `http://localhost:5000`.

---

## API Endpoints

All endpoints are prefixed with `/api/auth`.

### Register

- **POST** `/api/auth/register`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:** JWT token and user info

### Login

- **POST** `/api/auth/login`
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:** JWT token and user info

### Get Profile

- **GET** `/api/auth/profile`
- **Headers:** `Authorization: Bearer <token>`
- **Response:** User info

### Update Profile

- **PUT** `/api/auth/profile`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
  ```json
  {
    "name": "New Name"
  }
  ```
- **Response:** Updated user info

---

## Project Structure Overview

- `backend/server.js`: Entry point, sets up Express server and routes.
- `backend/config/database.js`: MongoDB connection logic.
- `backend/models/user.js`: User schema and password hashing.
- `backend/controllers/authcontrollers.js`: Authentication logic (register, login, profile).
- `backend/routes/auth.js`: API route definitions and validation.
- `backend/middleware/auth.js`: JWT authentication middleware.

---

## Security Notes

- Passwords are hashed using `bcryptjs`.
- JWT secret should be changed in production and kept secure.
- Input validation is enforced on all endpoints.

---

## License

This project is licensed under the MIT License.

---

## Author

- [Ayush Bhattarai](https://github.com/ayukshh)

```