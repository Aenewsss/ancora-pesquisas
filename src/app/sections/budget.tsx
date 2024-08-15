import Image from "next/image";

export default function Budget() {
    return (
        <section className="py-16 text-center">
            <h2 className="text-yellow text-3xl font-bold mb-6">Solicite seu Orçamento Personalizado</h2>
            <div className="flex gap-8 justify-center items-center flex-wrap">
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


    )
}