import { Router }
from "express";

import {
    getContents,
    createContent
}
from "../controllers/contentController.js";

const router = Router();

router.get(
    "/topic/:topicId",
    getContents
);

router.post(
    "/",
    createContent
);

export default router;