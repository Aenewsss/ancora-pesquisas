import Image from "next/image";

export default function ContactForm() {
    return (
        <section className="py-20 relative">
            <Image unoptimized className="object-cover absolute top-0 left-0 z-0 w-full h-full" src="/header.png" width={300} height={300} alt="Hero" />
            <div className="container mx-auto relative z-10 flex justify-center">
                <div className="flex md:gap-44 gap-10 flex-wrap">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-3 md:text-start text-center">
                            <h2 className="text-3xl">Descubra o potencial da Âncora!</h2>
                            <p>Entre em contato agora mesmo</p>
                        </div>
                        <div className="flex flex-wrap gap-4 items-center justify-center">
                            <div className="h-40 flex flex-col gap-1 justify-center items-center bg-white p-8 rounded-xl">
                                <Image src="/icons/phone.svg" width={40} height={40} alt="Telefone" />
                                <h3 className="text-xl font-bold text-primary">Phone</h3>
                                <p className="text-sm text-black">000-000-000</p>
                            </div>
                            <div className="h-40 flex flex-col gap-1 justify-center items-center bg-white p-8 rounded-xl">
                                <Image src="/icons/mail.svg" width={40} height={40} alt="Telefone" />
                                <h3 className="text-xl font-bold text-primary">Email</h3>
                                <p className="text-sm text-black">info@ancora.com</p>
                            </div>
                            <div className="h-40 flex flex-col gap-1 justify-center items-center bg-white p-8 rounded-xl">
                                <Image src="/icons/clock.svg" width={40} height={40} alt="Telefone" />
                                <h3 className="text-xl font-bold text-primary">Hours</h3>
                                <p className="text-sm text-black">Mon-Fri, 9:00-18:00</p>
                            </div>
                        </div>
                    </div>
                    <form className="bg-white p-6 rounded text-primary flex flex-col">
                        <h3 className="text-xl font-bold">Request a Free Quote. Best rate guaranteed!</h3>
                        <input type="text" placeholder="Name" className="w-full p-2 mt-2 bg-gray-300 placeholder:text-primary rounded-full px-4 py-2" />
                        <input type="text" placeholder="Phone Number" className="w-full p-2 mt-2 bg-gray-300 placeholder:text-primary rounded-full px-4 py-2" />
                        <input type="text" placeholder="Email" className="w-full p-2 mt-2 bg-gray-300 placeholder:text-primary rounded-full px-4 py-2" />
                        <button type="submit" className="bg-yellow text-primary w-full py-2 mt-4 rounded-full">ENTRAR EM CONTATO</button>
                    </form>
                </div>
            </div>
        </section>
    )
}