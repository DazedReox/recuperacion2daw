import { Router } from "express";

import authMiddleware
from "../middlewares/authMiddleware.js";

import {
    getPosts,
    createPost,
    createComment
}
from "../controllers/forumController.js";

const router = Router();

router.get(
    "/posts",
    getPosts
);

router.post(
    "/posts",
    authMiddleware,
    createPost
);

router.post(
    "/comments",
    authMiddleware,
    createComment
);

export default router;