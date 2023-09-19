import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import {
  changeAccountStatusController,
  getAllDoctorsController,
  getAllUsersController,
} from "../controllers/adminController.js";
const router = express.Router();
// get all users
router.get("/getAllUsers", userAuth, getAllUsersController);
router.get("/getAllDoctors", userAuth, getAllDoctorsController);
//POST ACCOUNT STATUS
router.post("/changeAccountStatus", userAuth, changeAccountStatusController);

export default router;
