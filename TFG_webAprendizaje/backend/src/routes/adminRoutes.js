import { Router }
from "express";

import authMiddleware
from "../middlewares/authMiddleware.js";

import adminMiddleware
from "../middlewares/adminMiddleware.js";

import {
    getDashboardStats,
    getUsers
}
from "../controllers/adminController.js";

const router = Router();

router.get(
    "/dashboard",
    authMiddleware,
    adminMiddleware,
    getDashboardStats
);

router.get(
    "/users",
    authMiddleware,
    adminMiddleware,
    getUsers
);

export default router;