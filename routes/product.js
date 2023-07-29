import express from "express";
import { addProduct, deleteProduct, myAllProduct,  updateProduct } from "../controllers/product.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router=express.Router();


//Users_All_products
router.get("/myAllProducts",isAuthenticated,myAllProduct)

//Add_Product
router.post("/newProduct",isAuthenticated
,addProduct)


//Update_Product & Delete_Product
router.route("/:id").put(isAuthenticated,updateProduct).delete(isAuthenticated,deleteProduct)








export default router;
