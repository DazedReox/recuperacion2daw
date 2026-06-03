import adminService
from "../services/adminService.js";

const getDashboardStats =
async (
    req,
    res
) => {

    const stats =
        await adminService.getStats();

    res.json(stats);
};

const getUsers =
async (
    req,
    res
) => {

    const users =
        await adminService.getUsers();

    res.json(users);
};

export {
    getDashboardStats,
    getUsers
};