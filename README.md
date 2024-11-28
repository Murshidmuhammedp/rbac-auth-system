Description
This repository contains the code for the Role-Based Access Control (RBAC) implementation in a web application. The project demonstrates how user roles are managed and authenticated using JWT tokens. Based on the user's role (e.g., 'User', 'Admin'), the system provides different access levels to various resources.

Features

JWT-based authentication for secure API access.
Role-based access control (RBAC) with user roles like 'Admin' and 'User'.
Cookie-based token storage with automatic expiration.
Middleware for verifying token validity and role authorization.

Requirements

Node.js: v14.x or above
NPM: v6.x or above
MongoDB: A running instance of MongoDB or a MongoDB Atlas cluster.
dotenv: For environment variable management.
jsonwebtoken: For handling JWT tokens.

 Handling Token Expiry

Tokens are set to expire in 60 seconds. After expiration, users must log in again to obtain a new token. If an expired token is provided, the API will return a 401 Unauthorized response.
