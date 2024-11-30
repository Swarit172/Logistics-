# Logistics-
Logistic Website <br>

File Structure :- <br> 
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



