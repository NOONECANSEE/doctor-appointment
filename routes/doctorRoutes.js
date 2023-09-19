import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import {
  doctorAppointmentsController,
  getDoctorController,
  getDoctorInfoController,
  updateProfileController,
  updateStatusController,
} from "../controllers/doctorController.js";

const router = express.Router();

//POST SINGLE DOC INFO
router.post("/getDoctorInfo", userAuth, getDoctorInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", userAuth, updateProfileController);

router.post("/getDoctor", userAuth, getDoctorController);

router.get("/doctor-appointments", userAuth, doctorAppointmentsController);

//POST Update Status
router.post("/update-status", userAuth, updateStatusController);

export default router;
