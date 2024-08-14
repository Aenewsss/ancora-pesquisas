export default function Services() {
    return (
        <section className="container mx-auto py-20">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="h-40 bg-gray-800"></div>
                    <h3 className="text-xl font-bold mt-4">Pesquisa Quantitativas e Qualitativas</h3>
                </div>
                <div className="text-center">
                    <div className="h-40 bg-gray-800"></div>
                    <h3 className="text-xl font-bold mt-4">Consultoria Especializada</h3>
                </div>
                <div className="text-center">
                    <div className="h-40 bg-gray-800"></div>
                    <h3 className="text-xl font-bold mt-4">Enquetes e Track</h3>
                </div>
                <div className="text-center">
                    <div className="h-40 bg-gray-800"></div>
                    <h3 className="text-xl font-bold mt-4">Acompanhamento de Campanha</h3>
                </div>
            </div>
        </section>

    )
}