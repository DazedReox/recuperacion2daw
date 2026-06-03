import topicService
from "../services/topicService.js";

const getTopics = async (
    req,
    res
) => {

    const topics =
        await topicService.getByCourse(
            req.params.courseId
        );

    res.json(topics);
};

const createTopic = async (
    req,
    res
) => {

    const {
        courseId,
        title,
        description
    } = req.body;

    await topicService.create(
        courseId,
        title,
        description
    );

    res.status(201).json({
        message:
            "Tema creado"
    });
};

export {
    getTopics,
    createTopic
};