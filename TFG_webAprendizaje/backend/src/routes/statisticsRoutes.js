import express from "express";
import {getUserStats} from "../controllers/statisticsController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router =
    express.Router();

router.get(
    "/me",
    authMiddleware,
    getUserStats
);

export default router;