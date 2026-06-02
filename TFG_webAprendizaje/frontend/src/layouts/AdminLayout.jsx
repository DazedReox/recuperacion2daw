import Sidebar from "../components/sidebar/Sidebar";

function AdminLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <main className="flex-1 p-8 bg-slate-100 dark:bg-slate-900">
                {children}
            </main>
        </div>
    );
}

export default AdminLayout;