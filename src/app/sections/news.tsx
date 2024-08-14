export default function News() {
    return (
        <section className="container mx-auto py-20 bg-dark-blue text-white">
            <h2 className="text-3xl font-bold text-center mb-12">Notícias e Atualizações</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="h-40 bg-gray-800"></div>
                    <h3 className="text-xl font-bold mt-4">Comercial Cleaning</h3>
                    <p className="text-sm">Some description about the news here.</p>
                </div>
                <div className="text-center">
                    <div className="h-40 bg-gray-800"></div>
                    <h3 className="text-xl font-bold mt-4">Comercial Cleaning</h3>
                    <p className="text-sm">Some description about the news here.</p>
                </div>
                <div className="text-center">
                    <div className="h-40 bg-gray-800"></div>
                    <h3 className="text-xl font-bold mt-4">Comercial Cleaning</h3>
                    <p className="text-sm">Some description about the news here.</p>
                </div>
                <div className="text-center">
                    <div className="h-40 bg-gray-800"></div>
                    <h3 className="text-xl font-bold mt-4">Comercial Cleaning</h3>
                    <p className="text-sm">Some description about the news here.</p>
                </div>
            </div>
        </section>

    )
}