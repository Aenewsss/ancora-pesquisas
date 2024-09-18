import Image from "next/image";
import Header from "../components/header";

export default function Gallery() {

    return (
        <main>

            <Header />
            <section className="min-h-screen p-10 bg-primary text-white relative">
                <Image className="w-full absolute opacity-10 h-full z-0" width={431} height={370} src="logo.svg" alt="Logo Âncora" />
                <h2 className="text-yellow text-3xl font-bold mb-6 text-center">Solicite seu Orçamento Personalizado</h2>
                <div className="flex gap-8 justify-center items-center flex-wrap mt-20 relative">
                    <Image className="md:w-auto w-44" width={431} height={370} src="logo.svg" alt="Logo Âncora" />
                    <form>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Nome"
                                className="py-2 px-4 rounded-md text-black w-full"
                            />
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="py-2 px-4 rounded-md text-black w-full"
                            />
                            <input
                                type="text"
                                placeholder="Telefone"
                                className="py-2 px-4 rounded-md text-black w-full"
                            />
                            <input
                                type="text"
                                placeholder="Assunto"
                                className="py-2 px-4 rounded-md text-black w-full"
                            />
                        </div>
                        <textarea
                            placeholder="Mensagem"
                            className="mt-4 py-2 px-4 rounded-md text-black w-full"
                            rows={4}
                        ></textarea>
                        <button className="bg-yellow text-blue mt-6 py-2 px-4 rounded-md">FAÇA SEU ORÇAMENTO</button>
                    </form>
                </div>
            </section>
        </main>
    );
}
