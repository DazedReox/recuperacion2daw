const roleMiddleware =
(roleId) => {

    return (
        req,
        res,
        next
    ) => {

        if (
            req.user.role !== roleId
        ) {

            return res.status(403).json({
                message:
                    "Acceso denegado"
            });
        }

        next();
    };
};

export default roleMiddleware;