import { Router }
from "express";

import {
    getContents
}
from "../controllers/contentController.js";

const router = Router();

router.get(
    "/topic/:topicId",
    getContents
);

export default router;