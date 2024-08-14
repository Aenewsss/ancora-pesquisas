import Image from "next/image"

export default function Header() {
    return (
        <header className="py-6">
            <nav className="container mx-auto flex justify-between items-center">
                <Image width={225} height={72} src="/extended-logo-yellow.svg" alt="Logo extendida" />
                
                <div className="flex gap-8 items-center">
                    <ul className="flex space-x-2 uppercase font-semibold">
                        <li><a href="#" className="flex gap-2">Quem Somos <span className="text-yellow">\</span></a></li>
                        <li><a href="#" className="flex gap-2">Serviços <span className="text-yellow">\</span></a></li>
                        <li><a href="#" className="flex gap-2">Galeria <span className="text-yellow">\</span></a></li>
                        <li><a href="#" className="flex gap-2">Notícias <span className="text-yellow">\</span></a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                    <a href="#" className="bg-yellow rounded-full px-4 py-2  text-blue font-bold">FAÇA SEU ORÇAMENTO</a>
                </div>
            </nav>
        </header>

    )
}