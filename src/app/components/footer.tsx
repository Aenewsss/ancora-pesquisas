import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="container mx-auto pb-8 mt-20">
            <div className="flex md:justify-between justify-center items-center flex-wrap">
                <Image className="z-10 md:w-auto w-36" width={225} height={72} src="/extended-logo-yellow.svg" alt="Logo extendida" />

                <div className="flex gap-8 items-center">
                    <ul className="flex space-x-2 uppercase font-semibold flex-wrap justify-center md:mt-0 mt-4">
                        <li><a href="/#about" className="flex gap-2">Quem Somos <span className="text-yellow">\</span></a></li>
                        <li><a href="/#services" className="flex gap-2">Serviços <span className="text-yellow">\</span></a></li>
                        <li><a href="/galeria" className="flex gap-2">Galeria <span className="text-yellow">\</span></a></li>
                        <li><a href="/#news" className="flex gap-2">Notícias <span className="text-yellow">\</span></a></li>
                        <li><a href="/#contact" className="flex gap-2">Contato <span className="text-yellow">\</span></a></li>
                        <li><a href="/trabalhe-conosco">Trabalhe Conosco</a></li>
                    </ul>
                </div>
            </div>

            <hr className="my-8" />

            <div className="flex md:justify-between justify-center items-center gap-4">
                <Link href="instagram"><Image width={20} height={20} src="/icons/insta.svg" alt="Logo extendida" /></Link>
                <span>Todos os direitos reservados - 2024</span>
            </div>
        </footer>
    )
}