const validationMiddleware =
(requiredFields) => {

    return (
        req,
        res,
        next
    ) => {

        const missingFields =
            requiredFields.filter(
                field =>
                    !req.body[field]
            );

        if (
            missingFields.length
        ) {

            return res.status(400).json({
                message:
                    `Faltan campos: ${missingFields.join(", ")}`
            });
        }

        next();
    };
};

export default validationMiddleware;