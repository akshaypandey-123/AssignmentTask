const User = require("../models/User");
exports.getUser=async(req,res)=>{
    try{
         // Access user details from the authenticated request
         const { email } = req.user; 
          // Find the user in the database based on the authenticated email
        const user = await User.findOne({ email });
        if (!user) {
            // If user not found, return a 404 Not Found status
            return res.status(404).json({ success: false, message: "User not found" });
          }
      
          // If user found, return the user details
          res.status(200).json({ success: true,message:"retrieve successsfully", user });

    }
    catch(err){

            // Handle any errors that might occur during fetching user details
         console.error(error);
         res.status(500).json({ success: false, message: "Failed to fetch user details" });
  

    }
}
