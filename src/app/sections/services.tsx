import Image from "next/image";

export default function Services() {
    return (
        <section id="services" className="py-20 md:px-0 px-2">
            <h2 className="text-3xl font-bold text-center mb-12 text-yellow">Nossos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-2 gap-6">
                <div className="flex justify-center relative">
                    <Image unoptimized className="w-full" src="/services/searches.png" width={300} height={300} alt="Serviço" />
                    <h3 className="tracking-wide text-center uppercase absolute bottom-6 text-xl font-medium mt-4">Pesquisa Quantitativas<br />e Qualitativas</h3>
                    <Image className="absolute h-full" width={126} height={108} src="/logo-yellow.svg" alt="Logo amarela" />
                </div>
                <div className="flex justify-center relative">
                    <Image unoptimized className="w-full object-cover" src="/new-photos/4.jpeg" width={300} height={300} alt="Serviço" />
                    <h3 className="tracking-wide text-center uppercase absolute bottom-6 text-xl font-medium mt-4">Consultoria<br />Especializada</h3>
                    <Image className="absolute h-full" width={126} height={108} src="/logo-white.svg" alt="Logo amarela" />
                </div>
                <div className="flex justify-center relative">
                    <Image unoptimized className="w-full object-cover" src="/experience/approach.jpeg" width={300} height={300} alt="Serviço" />
                    <h3 className="tracking-wide text-center uppercase absolute bottom-6 text-xl font-medium mt-4">Enquetes<br />Track</h3>
                    <Image className="absolute h-full" width={126} height={108} src="/logo-yellow.svg" alt="Logo amarela" />
                </div>
                <div className="flex justify-center relative">
                    <Image unoptimized className="w-full" src="/services/follow-up.png" width={300} height={300} alt="Serviço" />
                    <h3 className="tracking-wide text-center uppercase absolute bottom-6 text-xl font-medium mt-4">Acompanhamento<br />de Campanha</h3>
                    <Image className="absolute h-full" width={126} height={108} src="/logo-white.svg" alt="Logo amarela" />
                </div>
            </div>
        </section>

    )
}