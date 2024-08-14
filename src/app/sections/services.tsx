import Image from "next/image";

export default function Services() {
    return (
        <section className="py-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-yellow">Nossos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                <div className="text-center">
                    <Image unoptimized className="w-full" src="/services/searches.png" width={300} height={300} alt="Serviço" />
                    <h3 className="text-xl font-bold mt-4">Pesquisa Quantitativas e Qualitativas</h3>
                </div>
                <div className="text-center">
                    <Image unoptimized className="w-full" src="/services/consulting.png" width={300} height={300} alt="Serviço" />
                    <h3 className="text-xl font-bold mt-4">Consultoria Especializada</h3>
                </div>
                <div className="text-center">
                    <Image unoptimized className="w-full" src="/services/track.png" width={300} height={300} alt="Serviço" />
                    <h3 className="text-xl font-bold mt-4">Enquetes e Track</h3>
                </div>
                <div className="text-center">
                    <Image unoptimized className="w-full" src="/services/follow-up.png" width={300} height={300} alt="Serviço" />
                    <h3 className="text-xl font-bold mt-4">Acompanhamento de Campanha</h3>
                </div>
            </div>
        </section>

    )
}