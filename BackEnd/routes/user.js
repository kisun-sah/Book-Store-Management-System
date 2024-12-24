const router = require("express").Router();
const User = require("../model/user"); 
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const {authenticateToken} = require("./userAuth")



// Sign-up 
router.post("/sign-up", async (req, res) => {
  try {
    const { username, email, password, address } = req.body;

    // Validate input fields
    if ( !username || !email || !password || !address) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check username length is more than 4
    if ( username.length <= 4) {
      return res
        .status(400)
        .json({ message: "Username length should be greater than 4" });
    }

        // Check password length is more than 4
        if (password.length <= 4) {
            return res
              .status(400)
              .json({ message: "Password  length should be greater than 5" });
          }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Hash the password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      address,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Return a success response
    res.status(201).json({
      message: "User Sign  successfully",
      user: {
        id: savedUser._id,
        username: savedUser.name,
        email: savedUser.email,
        avatar: savedUser.avatar,
      },
    });
  } catch (error) {
    console.error("Error in sign-up:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


//sign-in 
router.post("/sign-in", async (req, res) => {
  try {
    const { username, password } = req.body;
    

    const existingUser = await User.findOne({username});

    if(!existingUser){
      res.status(400).json({ message: "User doesn't exist" });

    }

    await bcrypt.compare(password , existingUser.password , (err , data) => {
      if(data){
        const authClaims = [
          {name: existingUser.username},
          {role:existingUser.role},
        ]
        const token = jwt.sign({authClaims},"bookStore123" , {
          expiresIn:"30d",
        })
        res.status(200).json({ 
          id:existingUser.id  ,
           role :existingUser.role , 
           token:token
           });

      }else{

        res.status(400).json({ message: "User Password doesn't exist" });

      }
    })
  
 
  } catch (error) {
    console.error("Error in sign-up:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// get-user-information 
router.get("/get-user-information",authenticateToken , async (req , res) => {

  try {
    const {id } = req.headers;
    const data = await User.findById(id).select('-password');
    return res.status(200).json(data);
    
  } catch (error) {
   
    res.status(500).json({ message: "Internal server error " });
    
  }
});


// update address 
router.put("/update-address", authenticateToken , async (req , res) => {
  try {
    const {id } = req.headers;
    const {address} = req.body;
    await User.findByIdAndUpdate(id , {address:address});
    return res.status(200).json({message:"Address updated sucessfully"})

  } catch (error) {
    res.status(500).json({ message: "Internal server error " });
  }
})

module.exports = router;
