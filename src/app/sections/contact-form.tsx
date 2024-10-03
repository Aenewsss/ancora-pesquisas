import Image from "next/image";
import Link from "next/link";

export default function ContactForm() {
    return (
        <section id="contact" className="py-20 relative">
            <Image unoptimized className="object-cover absolute top-0 left-0 z-0 w-full h-full" src="/header.png" width={300} height={300} alt="Hero" />
            <div className="container mx-auto relative z-10 flex justify-center">
                <div className="flex md:gap-44 gap-5 flex-wrap justify-center">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-3 md:text-start text-center">
                            <h2 className="text-3xl">Descubra o potencial da Âncora!</h2>
                            <p>Entre em contato agora mesmo</p>
                        </div>
                        <div className="flex flex-wrap gap-4 items-center justify-center">
                            <Link target="_blank" href="https://api.whatsapp.com/send?phone=5571999460468&text=OOlá, seja bem-vindo(a) a Âncora Pesquisas e Publicidade, como podemos ajudar ?" className="h-40 flex flex-col gap-1 justify-center items-center bg-white p-8  min-w-[300px] rounded-xl">
                                <Image src="/icons/phone.svg" width={40} height={40} alt="Telefone" />
                                <h3 className="text-xl font-bold text-primary">WhatsApp</h3>
                                <p className="text-sm text-black">+55 71 9 9946-0468</p>

                            </Link>
                            <Link target="_blank" href="mailto:ancora.pesquisas06@gmail.com" className="h-40 flex flex-col gap-1 justify-center items-center bg-white p-8  min-w-[300px] rounded-xl">
                                <Image src="/icons/mail.svg" width={40} height={40} alt="Telefone" />
                                <h3 className="text-xl font-bold text-primary">Email</h3>
                                <p className="text-sm text-black">ancora.pesquisas06@gmail.com</p>
                            </Link>
                        </div>
                    </div>
                    <form className="bg-white p-6 rounded text-primary flex flex-col min-w-[200px]">
                        <h3 className="text-xl font-bold">Entre em contato agora mesmo!</h3>
                        <input type="text" placeholder="Nome" className="w-full p-2 mt-2 bg-gray-300 placeholder:text-slate-400 rounded-full px-4 py-2" />
                        <input type="text" placeholder="Telefone" className="w-full p-2 mt-2 bg-gray-300 placeholder:text-slate-400 rounded-full px-4 py-2" />
                        <input type="text" placeholder="E-mail" className="w-full p-2 mt-2 bg-gray-300 placeholder:text-slate-400 rounded-full px-4 py-2" />
                        <button type="submit" className="bg-yellow text-primary w-full py-2 mt-4 rounded-full">ENTRAR EM CONTATO</button>
                    </form>
                </div>
            </div>
        </section>
    )
}