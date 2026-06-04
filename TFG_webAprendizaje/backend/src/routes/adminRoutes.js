import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";
import {getDashboardStats, getUsers}from "../controllers/adminController.js";

const router = Router();

router.get(
    "/dashboard",
    authMiddleware,
    roleMiddleware("admin"),
    getDashboardStats
);

router.get(
    "/users",
    authMiddleware,
    roleMiddleware("admin"),
    getUsers
);

export default router;