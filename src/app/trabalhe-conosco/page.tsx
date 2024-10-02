import Header from "../components/header";

export default function Page() {
    return (
        <main>
            <Header />
            <section className="min-h-screen p-10 bg-primary text-white relative flex justify-center">
                <form className="bg-white p-6 rounded text-primary flex flex-col min-w-[500px] h-[300px]">
                    <h3 className="text-xl font-bold">Trabalhe conosco!</h3>
                    <input required type="text" placeholder="Nome" className="w-full p-2 mt-2 bg-gray-300 placeholder:text-slate-400 rounded-full px-4 py-2" />
                    <input required type="phone" placeholder="Telefone" className="w-full p-2 mt-2 bg-gray-300 placeholder:text-slate-400 rounded-full px-4 py-2" />
                    <input required type="email" placeholder="E-mail" className="w-full p-2 mt-2 bg-gray-300 placeholder:text-slate-400 rounded-full px-4 py-2" />
                    <button type="submit" className="bg-yellow text-primary w-full py-2 mt-4 rounded-full">ENTRAR EM CONTATO</button>
                </form>
            </section>
        </main>
    )
}