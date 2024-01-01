// Import the required modules
const express = require("express")
const router = express.Router()



// Import the required controllers and middleware functions
const {
  login,
  signup,
  sendotp,
  
} = require("../controllers/Auth")


const { auth } = require("../middleware/auth")
const {refreshToken}=require("../controllers/RefreshToken")
// Endpoint for token refresh
router.post("/refresh-token", auth,refreshToken)



const {getUser}=require("../controllers/getUser")

router.get("/user",auth,getUser)



const {updateUser}=require("../controllers/updateUser")
router.put("/user/update",auth,updateUser)

 



// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)

// Route for sending OTP to the user's email
router.post("/sendotp", sendotp)





// Export the router for use in the main application
module.exports = router
