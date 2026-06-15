function Footer() {

    return (
        <footer className="bg-slate-900 text-white">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between">
                    <div>
                        <h3 className="font-bold text-xl">
                            LearnQuest
                        </h3>
                        <p className="text-slate-400">
                            Plataforma de aprendizaje gamificada
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <p className="text-slate-400">
                            © 2026 LearnQuest
                        </p>
                    </div>
                </div>
            </div>
</footer>
    );
}

export default Footer;