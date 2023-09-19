import express from "express";
import {
  applyDoctorController,
  authController,
  bookAppointmentController,
  bookingAvailabilityController,
  deleteAllNotificationController,
  getAllDoctorsController,
  getAllNotificationController,
  loginController,
  registerController,
  userAppointmentsController,
} from "../controllers/userController.js";
import userAuth from "../middlewares/authMiddleware.js";
const router = express.Router();
router.post("/login", loginController);
router.post("/register", registerController);
router.post("/getUserData", userAuth, authController);
router.post("/apply-doctor", userAuth, applyDoctorController);
router.post("/get-all-notification", userAuth, getAllNotificationController);
router.post(
  "/delete-all-notification",
  userAuth,
  deleteAllNotificationController
);

//GET ALL DOC
router.get("/getAllDoctors", userAuth, getAllDoctorsController);

//BOOK APPOINTMENT
router.post("/book-appointment", userAuth, bookAppointmentController);
//Booking Avliability
router.post("/booking-availbility", userAuth, bookingAvailabilityController);

//Appointments List
router.get("/user-appointments", userAuth, userAppointmentsController);
export default router;
