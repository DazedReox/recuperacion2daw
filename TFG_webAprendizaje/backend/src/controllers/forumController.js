import forumService from "../services/forumService.js";

const getPosts = async (
    req,
    res
) => {

    const posts =
        await forumService.getPosts();

    res.json(posts);
};

const createPost = async (
    req,
    res
) => {

    const userId =
        req.user.id;

    const {
        title,
        content
    } = req.body;

    await forumService.createPost(
        userId,
        title,
        content
    );

    res.status(201).json({
        message:
            "Publicación creada"
    });
};

const createComment = async (
    req,
    res
) => {

    const userId =
        req.user.id;

    const {
        postId,
        content
    } = req.body;

    await forumService.createComment(
        postId,
        userId,
        content
    );

    res.status(201).json({
        message:
            "Comentario añadido"
    });
};

export {
    getPosts,
    createPost,
    createComment
};