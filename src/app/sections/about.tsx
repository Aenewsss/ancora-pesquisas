import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-4 text-center flex flex-col items-center md:px-0 px-4">
            <Image width={183} height={157} src="/logo.svg" alt="logo âncora" />
            <h2 className="text-yellow text-3xl font-bold mb-6">Âncora Pesquisas e Publicidade</h2>
            <p className="max-w-2xl mx-auto text-lg">
                A Âncora Pesquisas e Publicidade é uma empresa consolidada no mercado de pesquisas eleitorais e publicidade política, com uma trajetória de quase duas décadas de experiência e credibilidade. Desde a sua fundação, temos nos dedicado a fornecer serviços de alta qualidade e precisão, ajudando políticos e profissionais dos mais diversos setores a entenderem e alcançarem seus objetivos.
            </p>
            <button className="text-white mt-6 py-2 px-8 rounded-full border border-white">CONHEÇA MAIS</button>
        </section>

    )
}