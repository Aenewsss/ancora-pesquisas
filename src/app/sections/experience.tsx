import Image from "next/image";

export default function Experience() {
    return (
        <section className="py-16 flex flex-col container mx-auto items-center gap-10">
            <div className="flex items-center text-center">
                <Image src="" alt={`Expertise `} width={200} height={200} />
                <div>
                    <h3 className="text-yellow text-xl font-semibold mt-4">EXPERTISE DE QUASE DUAS DÉCADAS</h3>
                    <p className="max-w-[439px] text-lg mt-2">
                        Located in the downtown, and accented by an ever-changing art collection from the world class Nazareth Gallery, the Fine Dine restaurant location is visually stunning, and is sure to impress any special guests you are looking to entertain.
                    </p>
                </div>
            </div>
            <div className="flex flex-row-reverse items-center text-center">
                <Image src="" alt={`Expertise `} width={200} height={200} />
                <div>
                    <h3 className="text-yellow text-xl font-semibold mt-4">ABORDAGEM
                        PERSONALIZADA E SIGILOSA</h3>
                    <p className="max-w-[439px] text-lg mt-2">
                        Located in the downtown, and accented by an ever-changing art collection from the world class Nazareth Gallery, the Fine Dine restaurant location is visually stunning, and is sure to impress any special guests you are looking to entertain.
                    </p>
                </div>
            </div>
            <div className="flex items-center text-center">
                <Image src="" alt={`Expertise `} width={200} height={200} />
                <div>

                    <h3 className="text-yellow text-xl font-semibold mt-4">COMPROMISSO COM
                        A EXCELÊNCIA</h3>
                    <p className="max-w-[439px] text-lg mt-2">
                        Located in the downtown, and accented by an ever-changing art collection from the world class Nazareth Gallery, the Fine Dine restaurant location is visually stunning, and is sure to impress any special guests you are looking to entertain.
                    </p>
                </div>
            </div>
        </section>


    )
}