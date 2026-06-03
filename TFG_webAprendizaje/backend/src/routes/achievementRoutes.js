import { Router }
from "express";

import authMiddleware
from "../middlewares/authMiddleware.js";

import {
    getAchievements,
    getUserAchievements
}
from "../controllers/achievementController.js";

const router = Router();

router.get(
    "/",
    getAchievements
);

router.get(
    "/user",
    authMiddleware,
    getUserAchievements
);

export default router;