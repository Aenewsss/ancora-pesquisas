'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormState } from 'react-dom'
import { handleAction } from "./action";

export default function Gallery() {

    const [state, action] = useFormState(handleAction, null)

    const [Part1, setPart1] = useState(true);
    const [Part2, setPart2] = useState(false);
    const [Part3, setPart3] = useState(false);
    const [Part4, setPart4] = useState(false);

    function handlePart() {
        if (Part1) {
            setPart1(false)
            setPart2(true)
        } else if (Part2) {
            setPart2(false)
            setPart3(true)
        } else if (Part3) {
            setPart3(false)
            setPart4(true)
            alert('Faça o cadastro  para realizar o orçamento')
        }
    }


    useEffect(() => {
        if (state) {
            state.error ? alert('Orçamento enviado!') : alert('Erro ao enviar orçamento!')
        }
    }, [state]);

    return (
        <main>
            <section className="min-h-screen p-10 bg-primary text-white relative">
                <Image className="w-full absolute opacity-10 h-full z-0 top-0 left-0" width={431} height={370} src="logo.svg" alt="Logo Âncora" />
                <h2 className="text-yellow text-3xl font-bold mb-6 text-center">Solicite seu Orçamento Personalizado</h2>
                <div className="flex flex-col gap-8 justify-center items-center flex-wrap mt-20 relative">
                    <Image className="md:w-auto w-44" width={431} height={370} src="logo.svg" alt="Logo Âncora" />
                    <form action={action} className="min-w-[400px]">
                        <input
                            style={{ height: !Part1 ? 0 : 'auto', visibility: !Part1 ? 'hidden' : 'visible', padding: !Part1 ? 0 : 8 }}
                            name="municipio"
                            required
                            type="text"
                            placeholder="Qual é o seu município?"
                            className="py-2 px-4 rounded-md text-black w-full"
                        />
                        <input
                            style={{ height: !Part2 ? 0 : 'auto', visibility: !Part2 ? 'hidden' : 'visible', padding: !Part2 ? 0 : 8 }}
                            name="qtt_eleitores"
                            required
                            type="text"
                            placeholder="Quantos eleitores tem município?"
                            className="py-2 px-4 rounded-md text-black w-full"
                        />


                        <label className="text-2xl" style={{ height: !Part3 ? 0 : 'auto', visibility: !Part3 ? 'hidden' : 'visible' }} htmlFor="">Qual pesquisa você deseja fazer ?</label>
                        <div style={{ height: !Part3 ? 0 : 'auto', visibility: !Part3 ? 'hidden' : 'visible' }} className="mt-3 flex gap-1">
                            <input value="Pesquisa Eleitoral" name="tipo_pesquisa" required type="radio" />
                            <label htmlFor="">Pesquisa Eleitoral</label>
                        </div>
                        <div style={{ height: !Part3 ? 0 : 'auto', visibility: !Part3 ? 'hidden' : 'visible' }} className="flex gap-1">
                            <input value="Pesquisa quantitativa" name="tipo_pesquisa" required type="radio" />
                            <label htmlFor="">Pesquisa quantitativa</label>
                        </div>
                        <div style={{ height: !Part3 ? 0 : 'auto', visibility: !Part3 ? 'hidden' : 'visible' }} className="flex gap-1">
                            <input value="Pesquisa qualitativa" name="tipo_pesquisa" required type="radio" />
                            <label htmlFor="">Pesquisa qualitativa</label>
                        </div>

                        <div style={{ height: !Part4 ? 0 : 'auto', visibility: !Part4 ? 'hidden' : 'visible' }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                style={{ padding: !Part4 ? 0 : 8 }}
                                required
                                name="nome"
                                type="text"
                                placeholder="Nome"
                                className="py-2 px-4 rounded-md text-black w-full"
                            />
                            <input
                                style={{ padding: !Part4 ? 0 : 8 }}
                                required
                                name="email"
                                type="email"
                                placeholder="E-mail"
                                className="py-2 px-4 rounded-md text-black w-full"
                            />
                            <input
                                style={{ padding: !Part4 ? 0 : 8 }}
                                type="text"
                                name="telefone"
                                placeholder="Telefone"
                                className="py-2 px-4 rounded-md text-black w-full"
                            />
                            <input
                                style={{ padding: !Part4 ? 0 : 8 }}
                                name="assunto"
                                type="text"
                                placeholder="Assunto"
                                className="py-2 px-4 rounded-md text-black w-full"
                            />
                        </div>
                        <textarea
                            style={{ height: !Part4 ? 0 : 'auto', visibility: !Part4 ? 'hidden' : 'visible' }}
                            name="mensagem"
                            placeholder="Mensagem"
                            className="mt-4 py-2 px-4 rounded-md text-black w-full"
                            rows={4}
                        ></textarea>
                        <button onClick={handlePart} type={(Part1 || Part2 || Part3) ? 'button' : 'submit'} className="bg-yellow text-blue mt-6 py-2 px-4 rounded-md">
                            {(Part1 || Part2 || Part3) ? 'Próximo' : 'Enviar'}
                        </button>
                    </form>
                </div>
            </section>
        </main >
    );
}
