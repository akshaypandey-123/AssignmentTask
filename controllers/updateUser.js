const User = require('../models/User'); // Import your User model
exports.updateUser=async(req,res)=>{

    try{
            // Access user details from the authenticated request
        const { email } = req.user; // Assuming you store user information in the JWT payload

        // Retrieve the updated user information from the request body
        const {updatedUserInfo} = req.body; // Assuming the updated data is sent in the request body

        // Find the user in the database based on the authenticated email
        const user = await User.findOne({ email });

        if (!user) {
        // If user not found, return a 404 Not Found status
        return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Update user information with the new details provided
        // Modify the fields that need to be updated
        console.log("this is bug",updatedUserInfo)
       
        if (updatedUserInfo) {
        user.email = updatedUserInfo;
        }

        // Save the updated user information in the database
        await user.save();

        // Return a success message along with the updated user details
        res.status(200).json({ success: true, user });

        }
    catch(err){
           // Handle any errors that might occur during updating user details
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to update user details' });
  }

    
}