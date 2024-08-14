export default function ContactForm() {
    return (
        <section className="container mx-auto py-20 bg-dark-blue text-white">
            <h2 className="text-3xl font-bold text-center mb-12">Descubra o potencial da Âncora!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="h-40 bg-gray-800"></div>
                    <h3 className="text-xl font-bold mt-4">Phone</h3>
                    <p className="text-sm">000-000-000</p>
                </div>
                <div className="text-center">
                    <div className="h-40 bg-gray-800"></div>
                    <h3 className="text-xl font-bold mt-4">Email</h3>
                    <p className="text-sm">info@ancora.com</p>
                </div>
                <div className="text-center">
                    <div className="h-40 bg-gray-800"></div>
                    <h3 className="text-xl font-bold mt-4">Hours</h3>
                    <p className="text-sm">Mon-Fri, 9:00-18:00</p>
                </div>
                <div className="text-center">
                    <form className="bg-white p-6 rounded">
                        <h3 className="text-xl font-bold mb-4">Request a Free Quote</h3>
                        <input type="text" placeholder="Name" className="w-full mb-4 p-2 border" />
                        <input type="text" placeholder="Phone Number" className="w-full mb-4 p-2 border" />
                        <input type="text" placeholder="Email" className="w-full mb-4 p-2 border" />
                        <button type="submit" className="bg-yellow-500 w-full py-2 rounded">ENTRAR EM CONTATO</button>
                    </form>
                </div>
            </div>
        </section>

    )
}