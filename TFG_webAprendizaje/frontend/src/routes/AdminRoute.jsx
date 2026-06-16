import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function AdminRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading === true) {
        return (
            <div className="flex h-screen items-center justify-center bg-slate-100">
                <p className="text-slate-600 font-medium">Verificando credenciales...</p>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (user.role !== "admin") {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
}

export default AdminRoute;