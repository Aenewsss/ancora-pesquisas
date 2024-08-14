import Image from "next/image";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center">
            <h1 className="z-10 text-9xl font-bold mb-4">A ESTRATÉGIA CERTA PARA SUA CAMPANHA</h1>
            <button className="font-semibold z-10 text-blue bg-yellow py-2 px-8 rounded-full">FAÇA SEU ORÇAMENTO</button>
            <Image unoptimized className="absolute top-0 left-0 z-0 w-full h-full" src="/header.png" width={300} height={300} alt="Hero" />
            <div className="absolute bg-gradient-to-b from-transparent to-primary bottom-0 left-0 z-0 w-full h-40" />
        </section>
    )
}