import express from "express";
import { logout, myProfile, userLogin, userRegister } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

 const router=express.Router();

//register
router.post("/newUser",userRegister) 

//login
router.post("/login",userLogin)


//profile
router.get("/me",isAuthenticated,myProfile)

//Logout
router.get("/logout",logout)

 export default router