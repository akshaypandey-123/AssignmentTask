
// Import necessary modules and middleware
const jwt = require("jsonwebtoken");

exports.refreshToken=async(req,res)=>{
    try{
        // Extract the refresh token from the request 
        const { refreshToken } = req.body; 
        // Verify the refresh token
        const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);

        // Check if the token is valid and associated with the user
        // Here you might want to verify it against the user data in your database

        // If verification succeeds, generate a new access token
        const accessToken = jwt.sign(
            { email: decoded.email, id: decoded.id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" } // Set the expiration time for the new access token
          );
        // Respond with the new access token
        res.status(200).json({ success: true, accessToken })


    }
    catch(err){
         // Handle any errors related to token verification or generation
        console.error(err);
        res.status(401).json({ success: false, message: "Invalid or expired refresh token" });
  }

    
}
