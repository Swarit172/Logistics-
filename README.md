# Logistics-
Logistic Website

File Structure :- 
Logistics/
├── public/                    # Static files like CSS, images
│   ├── css/
│   │   └── style.css          # Main stylesheet for the application
│   ├── imgs/
│   │   ├── header.jpg         # Header background image
│   │   ├── home.jpg           # Home background image
│   │   └── footer.jpg         # Footer background image
├── src/ 
│   ├── db/                    
│   │   └── mongoosee.js           # Database connection logic
|   ├── middleware/                # Middleware for authentication and other logic
│   |   └── auth.js                # Middleware for user authentication
|   ├── models/                    # Mongoose models
|   │   ├── userSignup.js          # User schema and methods
|   │   └── vehicleRegister.js     # Vehicle schema and methods
|   ├── routers/                   # Route handlers for the application
|   │   ├── userSignup.js          # User routes
|   │   └── vehicleRegister.js     # Vehicle routes
|   └── app.js                     # Entry point of the application 
├── template/ 
│   ├── partials/                  # Shared components like header, footer
│   │   ├── header.hbs             # Header component
│   │   └── footer.hbs             # Footer component
│   ├── views/                     # Handlebars templates
│   │   ├── index.hbs              # Home page template
│   │   ├── login.hbs              # Login page template
│   │   ├── signup.hbs             # Signup page template
│   │   ├── resetPw.hbs            # Reset password template
│   │   ├── vehicle.hbs            # Vehicle register page template
│   │   ├── vlogin.hbs             # vehicle login page template
│   │   ├── vreset.hbs             # vehicle password reset page template
│   │   ├── detail.hbs             # Vehicle details page template
│   │   ├── addVehicle.hbs         # Add vehicle page template
│   │   ├── about.hbs              # About page template
│   │   └── 404.hbs                # 404 error page template
├── .gitignore                 # Ignored files for Git
├── package.json               # Node.js dependencies and scripts
├── node_modules/              # Installed Node.js packages
└── README.md                  # Project documentation



