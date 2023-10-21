import { createUser, editProfile,loginUser, findUserFromAll  } from "../actions/usersAction.js";
import express from 'express';


const router = express.Router();

router.post('/signUp',createUser)
      .post('/login',loginUser)
      .post('/editprofile',editProfile)
      .post('/findusers',findUserFromAll)

export { router };
