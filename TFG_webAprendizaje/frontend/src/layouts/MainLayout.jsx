import Navbar from "../components/navbar/Navbar.jsx";
import Footer from "../components/footer/Footer";

function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-slate-100 dark:bg-slate-900">
            <Navbar />

            <main className="flex-1 container mx-auto p-6">
                {children}
            </main>

            <Footer />
        </div>
    );
}

export default MainLayout;