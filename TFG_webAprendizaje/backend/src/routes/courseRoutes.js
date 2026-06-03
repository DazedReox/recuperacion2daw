import { Router }
from "express";

import authMiddleware
from "../middlewares/authMiddleware.js";

import {
    getCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse
}
from "../controllers/courseController.js";

const router = Router();

router.get(
    "/",
    getCourses
);

router.get(
    "/:id",
    getCourse
);

router.post(
    "/",
    authMiddleware,
    createCourse
);

router.put(
    "/:id",
    authMiddleware,
    updateCourse
);

router.delete(
    "/:id",
    authMiddleware,
    deleteCourse
);

export default router;