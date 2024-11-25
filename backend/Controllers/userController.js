//importing modules
const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");

// Assigning users to the variable User
const User = db.users;

//signing a user up
//hashing users password before its saved to the database with bcrypt
const signup = async (req, res) => {
 try {
   const { userName, email, password } = req.body;
   const data = {
     userName,
     email,
     password: await bcrypt.hash(password, 10),
     role: "PATIENT",
   };
   //saving the user
   const user = await User.create(data);

   if (user) {
     let token = jwt.sign({ id: user.id }, process.env.secretKey, {
       expiresIn: 1 * 24 * 60 * 60 * 1000,
     });

   
     console.log("user", JSON.stringify(user, null, 2));
     console.log(token);
     //send users details
     return res.status(201).send(user);
   } else {
     return res.status(409).send("Details are not correct");
   }
 } catch (error) {
   console.log(error);
 }
};


//login authentication

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by their email
    const user = await User.findOne({
      where: { email: email },
    });

    // If user is found, compare the provided password with the stored hash
    if (user) {
      const isSame = await bcrypt.compare(password, user.password);

      if (isSame) {
        // Generate JWT token with the user's ID and role
        const token = jwt.sign(
          { id: user.id, role: user.role }, 
          process.env.secretKey,
          { expiresIn: '1d' } // Token will expire in 1 day
        );

        // Send back user data (without password) and the token
        return res.status(200).json({
          message: "Login successful",
          token: token,
          user: {
            id: user.id,
            userName: user.userName,
            email: user.email,
            role: user.role, // You can use this to navigate the user based on role
          },
        });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      return res.status(401).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = {
 signup,
 login,
};