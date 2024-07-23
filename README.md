# Ancient Access

## Introduction

Heritage Ticket Booking System is a web application designed to facilitate ticket booking for various heritage sites and events. It allows users to browse, book tickets, and stay updated with events happening at these sites.

## Features

- **Browse Heritage Sites**: View detailed information about various heritage sites.
- **Event Management**: Add, update, and view events happening at heritage sites.
- **Ticket Booking**: Seamlessly book tickets for heritage sites and events.
- **User Authentication**: Secure user login and registration.
- **Admin Panel**: Manage heritage sites, events, and bookings.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, Angular (optional)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT Token Authentication
- **Deployment**: Docker, AWS EC2

## Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/heritage-ticket-booking-system.git
    cd heritage-ticket-booking-system
    ```

2. **Set Up Backend**

    - Navigate to the `backend` directory:
      ```bash
      cd backend
      ```

    - Install Node.js dependencies:
      ```bash
      npm install
      ```

    - Create a `.env` file in the `backend` directory and add your environment variables:
      ```plaintext
      PORT=5000
      MONGODB_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret
      ```

    - Start the backend server:
      ```bash
      npm start
      ```

3. **Set Up Frontend**

    - Navigate to the `frontend` directory:
      ```bash
      cd ../frontend
      ```

    - Install frontend dependencies:
      ```bash
      npm install
      ```

    - Start the frontend development server:
      ```bash
      npm start
      ```

## Usage

- **Admin Panel**: Access the admin panel at `http://localhost:5000/admin` to manage heritage sites, events, and bookings.
- **Booking Tickets**: Users can browse heritage sites and events, and book tickets through the main application interface.

## API Endpoints

Here are some key API endpoints for the backend:

- **Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Login a user

- **Heritage Sites**
  - `GET /api/sites` - Get all heritage sites
  - `POST /api/sites` - Add a new heritage site (admin only)
  - `PUT /api/sites/:id` - Update a heritage site (admin only)
  - `DELETE /api/sites/:id` - Delete a heritage site (admin only)

- **Events**
  - `GET /api/events` - Get all events
  - `POST /api/events` - Add a new event (admin only)
  - `PUT /api/events/:id` - Update an event (admin only)
  - `DELETE /api/events/:id` - Delete an event (admin only)

- **Bookings**
  - `POST /api/bookings` - Create a new booking
  - `GET /api/bookings/user` - Get all bookings for the logged-in user


