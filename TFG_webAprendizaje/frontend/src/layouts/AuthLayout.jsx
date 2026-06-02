function AuthLayout({ children }) {
    return (
        <div className="min-h-screen flex justify-center items-center bg-slate-100 dark:bg-slate-900">
            <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;