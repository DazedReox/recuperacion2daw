import contentService
from "../services/contentService.js";

const getContents = async (
    req,
    res
) => {

    const contents =
        await contentService.getByTopic(
            req.params.topicId
        );

    res.json(contents);
};

const createContent = async (
    req,
    res
) => {

    const {
        topicId,
        title,
        content,
        pdf_url
    } = req.body;

    await contentService.create(
        topicId,
        title,
        content,
        pdf_url
    );

    res.status(201).json({
        message:
            "Contenido creado"
    });
};

export {
    getContents,
    createContent
};