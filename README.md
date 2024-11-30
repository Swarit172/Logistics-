# Logistics MAnagement System-

A web-based solution for managing logistics operations efficiently. The platform provides features for user registration, vehicle information management, and seamless authentication.

## File Structure :-
Logistics/ <br>
├── public/                    # Static files like CSS, images <br>
│   ├── css/ <br>
│   │   └── style.css          # Main stylesheet for the application <br>
│   ├── imgs/ <br>
│   │   ├── header.jpg         # Header background image <br>
│   │   ├── home.jpg           # Home background image <br>
│   │   └── footer.jpg         # Footer background image <br>
├── src/  <br>
│   ├── db/                    <br>
│   │   └── mongoosee.js           # Database connection logic <br>
|   ├── middleware/                # Middleware for authentication and other logic <br>
│   |   └── auth.js                # Middleware for user authentication <br>
|   ├── models/                    # Mongoose models <br>
|   │   ├── userSignup.js          # User schema and methods <br>
|   │   └── vehicleRegister.js     # Vehicle schema and methods <br>
|   ├── routers/                   # Route handlers for the application <br>
|   │   ├── userSignup.js          # User routes <br>
|   │   └── vehicleRegister.js     # Vehicle routes <br>
|   └── app.js                     # Entry point of the application  <br>
├── template/  <br>
│   ├── partials/                  # Shared components like header, footer <br>
│   │   ├── header.hbs             # Header component <br>
│   │   └── footer.hbs             # Footer component <br>
│   ├── views/                     # Handlebars templates <br>
│   │   ├── index.hbs              # Home page template <br>
│   │   ├── login.hbs              # Login page template <br>
│   │   ├── signup.hbs             # Signup page template <br>
│   │   ├── resetPw.hbs            # Reset password template <br>
│   │   ├── vehicle.hbs            # Vehicle register page template <br>
│   │   ├── vlogin.hbs             # vehicle login page template <br>
│   │   ├── vreset.hbs             # vehicle password reset page template <br>
│   │   ├── detail.hbs             # Vehicle details page template <br>
│   │   ├── addVehicle.hbs         # Add vehicle page template <br>
│   │   ├── about.hbs              # About page template <br>
│   │   └── 404.hbs                # 404 error page template <br>
├── .gitignore                 # Ignored files for Git <br>
├── package.json               # Node.js dependencies and scripts <br>
├── node_modules/              # Installed Node.js packages <br>
└── README.md                  # Project documentation <br>

-------------------------------------------------------------------------------------------------------------- 


## Features

- **User Authentication**: Secure login and signup for users.
- **Vehicle Management**: Add, view, and manage vehicle details.
- **Responsive Design**: Clean and user-friendly interface.
- **Role-Specific Access**: Access control for viewing detailed vehicle data based on user authentication.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Frontend**: Handlebars (HBS), HTML, CSS
- **Authentication**: Session-based authentication

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Swarit172/Logistics-.git

2. Navigate to the project directory:
   ```bash
   cd Logistics

3. Install dependencies:
   ```bash
   npm install

4. Run the application:
   ```bash
   npm start
   
5. Open your browser and navigate to http://localhost:9090.

