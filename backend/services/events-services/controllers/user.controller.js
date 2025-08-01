const { default: mongoose } = require('mongoose');
const User = require('../models/user.model');
const Hackathon = require('../models/hackathon.model')
const bcrypt = require('bcrypt');
const {generateToken,verifyToken} = require('../utils/jwtTokenGeneration')

const registerUser = async (req, res) => {
    try {
           const user = await User.create(req.body);
           user.save();
        res.status(201).json({ message: 'User registered successfully',data: user });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const UserLogin = async (req, res) => {
    try {

        
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
         
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const token = generateToken(email, password);
        res.cookie("token", token,
        { 
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 24 * 60 * 60 * 1000
         });

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllUser= async (req,res)=>{
    const user = await User.find({});
    if(!user){
        return res.status(404).json({
            message:"user not found here"
        })
    }
    return res.status(201).json({
        message:" user found successfully",
        user
    })
}
const userUpdate = async (req,res)=>{
    try {
        const {id}=req.params;
        const user = await User.findByIdAndUpdate(id,{...req.body},{new: true,runValidators:true})
        if(!user){
            return res.status(404).json({
                message: "user not found"
                
            })
        }
        res.status(201).json({
            message:"update successfully",
            user
        })
        
    } catch (error) {
        res.json({
            status:"there is an error in user update",
            message: error.message
        })
        
    }
}

const addUserFavorite = async (req, res) => {
    const { id } = req.params;
    const { eventId } = req.body;
  
    try {
        const event = await Hackathon.findById(eventId);
      if (!event) {
        return res.status(400).json({ message: "Event not found" });
      }
       
      const user = await User.findByIdAndUpdate(
        id,
        { $addToSet: { favorites: event } },
        { new: true }
      ).populate('favorites');
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(201).json({
        message: "Favorites added successfully",
        favorites: user.favorites
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const removeUserFavorite = async (req, res) => {
    const { id } = req.params;       // User ID
    const { eventId } = req.body;    // Event ID to remove
  
    try {
      const user = await User.findByIdAndUpdate(
        id,
        { $pull: { favorites: eventId } }, // ⚠️ must use the event ID, not the full object
        { new: true }
      ).populate('favorites');
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({
        message: "Favorite removed successfully",
        favorites: user.favorites
      });
  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  



  const getUserById= async (req,res)=>{
    const {id} = req.params
    try {
        const user = await User.findById({_id : new mongoose.Types.ObjectId(id)});
        if(!user){
            return res.status(404).json({
                message:"user not found"
            })
        }
        return res.status(201).json({
            message: "user found successfully",
            data : user
        })
        
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
        
    }
  }
  
  
module.exports = { registerUser,UserLogin,getAllUser,userUpdate,addUserFavorite,getUserById,removeUserFavorite };