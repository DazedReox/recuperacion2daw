import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import AdminPanel from "../pages/Admin/AdminPanel";
import Courses from "../pages/Courses/Courses";
import CourseDetail from "../pages/CourseDetail/CourseDetail";
import Tests from "../pages/Tests/Tests";
import Statistics from "../pages/Statistics/Statistics";
import Achievements from "../pages/Achievements/Achievements";
import Forum from "../pages/Forum/Forum";
import Profile from "../pages/Profile/Profile";
import Minigames from "../pages/Minigames/Minigames";

import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
                path="/dashboard"
                element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                }
            />
            <Route
                path="/admin"
                element={
                    <AdminRoute>
                        <AdminPanel />
                    </AdminRoute>
                }
            />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/minigames" element={<Minigames />} />
        </Routes>
    );
}

export default AppRoutes;