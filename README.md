# MERN Stack App

A simple MERN (MongoDB, Express.js, React.js, Node.js) stack application for managing user data.

## Live Demo

Explore the live demo: [Mern-app](https://mern-app-small.netlify.app/)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Introduction

This MERN stack app allows users to perform basic CRUD operations (Create, Read, Update, Delete) on user data. The backend is built with Node.js, Express.js, and MongoDB, while the frontend is developed using React.js.

## Features

- **Create:** Add new users to the database.
- **Read:** View a list of all users and details of individual users.
- **Update:** Modify user information.
- **Delete:** Remove users from the database.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Avinash9694/MERN-Stack-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd MERN-Stack-App
   ```

3. Install dependencies for both the frontend and backend:

   ```bash
   cd frontend
   npm install

   cd ../backend
   npm install
   ```

4. Set up your MongoDB database and update the connection string in `backend/Config/db.js`.

5. Create a `.env` file in the `backend` directory with the following content:

   ```env
   PORT=8080
   ```

   Update the `PORT` value as needed.

## Usage

1. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

   The server will run at `http://localhost:8080` by default.

2. Start the frontend development server:

   ```bash
   cd frontend
   npm start
   ```

   The React app will be available at `http://localhost:3000`.

## API Endpoints

- **GET /api/v1:** Get a list of all users.
- **GET /api/v1/:id:** Get details of a single user by ID.
- **POST /api/v1:** Add a new user.
- **PATCH /api/v1/:id:** Update a user by ID.
- **DELETE /api/v1/:id:** Delete a user by ID.

## Contributing

If you'd like to contribute, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Submit a pull request.
