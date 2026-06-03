import { Router }
from "express";

import authMiddleware
from "../middlewares/authMiddleware.js";

import {
    getStatistics
}
from "../controllers/statisticsController.js";

const router = Router();

router.get(
    "/",
    authMiddleware,
    getStatistics
);

export default router;