import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="py-4 bg-blue text-white">
            <nav className="container mx-auto flex md:flex-row flex-col justify-between items-center">
                <Link className="z-10 md:w-auto w-36" href="/">
                    <Image className="z-10 md:w-auto w-36" width={225} height={72} src="/extended-logo-yellow.svg" alt="Logo extendida" />
                </Link>

                <div className="flex md:flex-row flex-col z-10 md:gap-8 gap-4 items-center md:mt-0 mt-4">
                    <ul className="flex md:flex-nowrap flex-wrap justify-center space-x-2 uppercase font-semibold">
                        <li className="flex items-center"><a href="/#about" className="items-center flex gap-2"><span className="bg-yellow rounded-full px-4 py-2 text-blue">Quem Somos</span> </a></li>
                        <li className="flex items-center"><a href="/#services" className="items-center flex gap-2"><span className="bg-yellow rounded-full px-4 py-2 text-blue">Serviços</span> </a></li>
                        <li className="flex items-center"><a href="/#news" className="items-center flex gap-2"><span className="bg-yellow rounded-full px-4 py-2 text-blue">Notícias</span> </a></li>
                        <li className="flex items-center"><a href="/galeria" className="items-center flex gap-2"><span className="bg-yellow rounded-full px-4 py-2 text-blue">Galeria</span> </a></li>
                        <li className="flex items-center"><a className="bg-yellow rounded-full px-4 py-2 text-blue" href="/#contact">Contato</a></li>
                    </ul>
                    <a href="/orcamento" className="bg-yellow rounded-full px-4 py-2  text-blue font-bold">FAÇA SEU ORÇAMENTO</a>
                </div>
            </nav>
        </header>

    )
}