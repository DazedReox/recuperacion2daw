import { Router } from "express";

import authMiddleware
from "../middlewares/authMiddleware.js";

import {
    getTests,
    getTest,
    submitTest
}
from "../controllers/testController.js";

const router = Router();

router.get(
    "/",
    getTests
);

router.get(
    "/:id",
    getTest
);

router.post(
    "/submit",
    authMiddleware,
    submitTest
);

export default router;