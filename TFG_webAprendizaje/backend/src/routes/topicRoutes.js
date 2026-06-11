import { Router }
from "express";

import {
    getTopics,
    createTopic
}
from "../controllers/topicController.js";

const router = Router();

router.get(
    "/test",
    (req, res) => {

        res.json({
            message: "TOPIC ROUTE OK"
        });

    }
);

router.get(
    "/:courseId",
    getTopics
);

router.post(
    "/",
    createTopic
);

export default router;