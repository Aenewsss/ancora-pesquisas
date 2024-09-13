import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="py-4 bg-blue">
            <nav className="container mx-auto flex md:flex-row flex-col justify-between items-center">
                <Link className="z-10 md:w-auto w-36" href="/">
                <Image className="z-10 md:w-auto w-36" width={225} height={72} src="/extended-logo-yellow.svg" alt="Logo extendida" />
                </Link>
                
                <div className="flex md:flex-row flex-col z-10 md:gap-8 gap-4 items-center md:mt-0 mt-4">
                    <ul className="flex md:flex-nowrap flex-wrap justify-center space-x-2 uppercase font-semibold">
                        <li><a href="#about" className="flex gap-2">Quem Somos <span className="text-yellow">\</span></a></li>
                        <li><a href="#services" className="flex gap-2">Serviços <span className="text-yellow">\</span></a></li>
                        <li><a href="/galeria" className="flex gap-2">Galeria <span className="text-yellow">\</span></a></li>
                        <li><a href="#news" className="flex gap-2">Notícias <span className="text-yellow">\</span></a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                    <a href="#budget" className="bg-yellow rounded-full px-4 py-2  text-blue font-bold">FAÇA SEU ORÇAMENTO</a>
                </div>
            </nav>
        </header>

    )
}