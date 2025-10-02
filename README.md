This is a full-stack e-commerce web application built with the MERN (MongoDB, Express.js, React, Node.js) stack. It features a robust backend with user authentication, role-based access control (RBAC), and a hybrid payment gateway designed to handle both M-Pesa STK Push and traditional card payments. The entire development environment is configured to run on Termux for mobile development.
## Features
 * Full User Authentication: Secure user registration and login using JSON Web Tokens (JWT).
 * Role-Based Access Control (RBAC): Differentiated permissions for regular users and admins.
 * Hybrid Payment Gateway:
   * M-Pesa: Fully integrated Safaricom M-Pesa STK Push for mobile payments.
   * Stripe: Backend structure ready for Stripe integration for Visa/Mastercard payments.
 * RESTful API: A well-structured backend API built with Node.js and Express.
 * Modern Frontend: A responsive user interface built with React and Material-UI for a clean, modern aesthetic.
 * Termux Optimized: Designed and documented to be developed and deployed from a Termux environment on Android.
## Tech Stack
 * Backend: Node.js, Express.js
 * Frontend: React, Material-UI, React Router
 * Database: MongoDB (with Mongoose)
 * Authentication: JSON Web Tokens (JWT), bcryptjs
 * API Testing: Ngrok for exposing the local server for webhooks.
## Prerequisites
Before you begin, ensure you have the following installed in your Termux environment:
 * Node.js (LTS version)
 * MongoDB
 * Git
 * Ngrok
## Installation & Setup
Follow these steps to get your development environment running.
 * Clone the Repository
   git clone <your-repository-url>
cd mern-ecommerce-v2

 * Setup the Backend
   # Navigate to the server directory
cd server

# Install dependencies
npm install

# Create a .env file in the /server directory
touch .env

   Now, populate the .env file with your credentials. See the Environment Variables section below for the template.
 * Setup the Frontend
   # Navigate to the client directory from the root folder
cd ../client

# Install dependencies
npm install

## Running the Application
This project requires three separate Termux sessions to run concurrently.
 * ➡️ Session 1: Start the Database
   mongod

 * ➡️ Session 2: Start the Backend Server
   # Navigate to the server directory
cd ~/mern-ecommerce-v2/server

# Start the Node.js server
node server.js

   You should see "MongoDB Connected" and "Server running on port 5000".
 * ➡️ Session 2B: Expose the Server with Ngrok
   Open another session to create a public URL for the M-Pesa callback.
   ngrok http 5000

   Copy the HTTPS URL provided by Ngrok and update the MPESA_CALLBACK_URL in your .env file. Restart your backend server after updating.
 * ➡️ Session 3: Start the Frontend React App
   # Navigate to the client directory
cd ~/mern-ecommerce-v2/client

# Start the React development server
npm start

   You can now access the application at http://localhost:3000 in your phone's browser.
## API Endpoints
The backend provides the following API routes:
 * POST /api/users/register - Register a new user.
 * POST /api/users/login - Log in a user and receive a JWT.
 * GET /api/products - Public: Fetch all products.
 * POST /api/products - Admin Only: Create a new product.
 * POST /api/payments/mpesa - User Only: Initiate an M-Pesa STK Push payment.
 * POST /api/payments/mpesa-callback - Public Webhook: Receives payment confirmation from Safaricom.
## Environment Variables
Create a .env file in the /server directory and add the following variables. Do not commit this file to version control.
# Server Configuration
PORT=5000

# MongoDB Connection String
MONGO_URI=mongodb://localhost:27017/ecommerceV2

# JWT Secret Key for Authentication
JWT_SECRET=your-super-secret-jwt-key

# M-Pesa Sandbox Credentials (from Safaricom Daraja Portal)
MPESA_CONSUMER_KEY=YOUR_SANDBOX_CONSUMER_KEY
MPESA_CONSUMER_SECRET=YOUR_SANDBOX_CONSUMER_SECRET
MPESA_SHORTCODE=174379
MPESA_PASSKEY=bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919

# Your Ngrok public URL for the M-Pesa callback
MPESA_CALLBACK_URL=https://your-ngrok-url.ngrok.io/api/payments

