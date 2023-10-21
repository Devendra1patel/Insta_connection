import { User } from "../models/user.js";
import {v4 as uuidv4 } from 'uuid'
import { setUser } from "../service/auth.js";


async function createUser(req,res)
{
   try{
       const user = new User({
           name: req.body.Name,
           username: req.body.Username ,
           email:  req.body.Gmail,
           password:  req.body.Password,
           description:'',
           profile_pic:''
        });
        await user.save();
        console.log("User created");
        res.json(user);
   } 
   catch(error){
        res.json({"ErrorMessage":error.message});
   }
}


async function loginUser(req,res)
{
   try{
       const user = await User.findOne({username: req.body.Username, password:req.body.Password,})
        console.log("User login");
        // const sessionId = uuidv4();
        // setUser(sessionId,user);
        // res.cookie("uid", sessionId);
        res.json({...user});
   } 
   catch(error){
        res.json({"ErrorMessage":error.message});
   }
}

async function editProfile(req,res)
{
    try{
            const data = await User.updateOne({_id:req.body._id},{name:req.body.name,description:req.body.bio })
            console.log("this is editprofile data by server:-",data);
            res.json(data);
        }
    catch(err){
        res.json({"ErrorMessage":err.message})
    }
}


async function findUserFromAll(req,res)
{
   
    try{
            const data = await User.find({username:req.body.Username},'username name profile_pic');
            console.log("fatch in server for findUserFromAll -",data);
            res.json(data);
        }
    catch(err){
        console.log("fatch in server for findUserFromAll - error");
        res.json({"ErrorMessage":err.message})
    }
}


export {createUser , editProfile, loginUser, findUserFromAll};