import courseService
from "../services/courseService.js";

const getCourses = async (
    req,
    res
) => {

    try {

        const courses =
            await courseService.getAll();

        res.json(courses);

    } catch (error) {

        res.status(500).json({
            message:
                error.message
        });
    }
};

const getCourse = async (
    req,
    res
) => {

    try {

        const course =
            await courseService.getById(
                req.params.id
            );

        if (!course) {

            return res.status(404).json({
                message:
                    "Curso no encontrado"
            });
        }

        res.json(course);

    } catch (error) {

        res.status(500).json({
            message:
                error.message
        });
    }
};

const createCourse = async (
    req,
    res
) => {

    try {

        const {
            title,
            description,
            image_url
        } = req.body;

        await courseService.create(
            title,
            description,
            image_url
        );

        res.status(201).json({
            message:
                "Curso creado"
        });

    } catch (error) {

        res.status(500).json({
            message:
                error.message
        });
    }
};

const updateCourse = async (
    req,
    res
) => {

    try {

        const {
            title,
            description
        } = req.body;

        await courseService.update(
            req.params.id,
            title,
            description
        );

        res.json({
            message:
                "Curso actualizado"
        });

    } catch (error) {

        res.status(500).json({
            message:
                error.message
        });
    }
};

const deleteCourse = async (
    req,
    res
) => {

    try {

        await courseService.delete(
            req.params.id
        );

        res.json({
            message:
                "Curso eliminado"
        });

    } catch (error) {

        res.status(500).json({
            message:
                error.message
        });
    }
};

export {
    getCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse
};