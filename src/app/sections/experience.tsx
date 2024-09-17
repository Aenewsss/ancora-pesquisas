import Image from "next/image";

export default function Experience() {
    return (
        <section className="py-16 flex flex-col container mx-auto items-center gap-10 md:px-0 px-4">
            <div className="flex items-center text-center gap-12 flex-wrap">
                <Image className="max-w-[470px] max-h-[352px] object-cover md:w-auto w-full" unoptimized src="/experience/experience.jpeg" alt={`Expertise `} width={470} height={352} />
                <div className="flex flex-col gap-2">
                    <h3 className="text-yellow text-3xl text-start">EXPERTISE DE QUASE<br/>DUAS DÉCADAS</h3>
                    <p className="text-lg max-w-96 text-start">Located in the downtown, and accented by an ever-changing art collection from the world class Nazareth Gallery, the Fine Dine restaurant location is visually stunning, and is sure to impress any special guests you are looking to entertain.</p>
                </div>
            </div>
            <div className="flex flex-row-reverse items-center text-center gap-12 flex-wrap">
                <Image className="max-w-[470px] max-h-[352px] object-cover md:w-auto w-full" unoptimized src="/experience/approach.jpeg" alt={`Expertise `} width={470} height={352} />
                <div className="flex flex-col gap-2">
                    <h3 className="text-yellow text-3xl text-start">ABORDAGEM<br/>PERSONALIZADA E SIGILOSA</h3>
                    <p className="text-lg max-w-96 text-start">Located in the downtown, and accented by an ever-changing art collection from the world class Nazareth Gallery, the Fine Dine restaurant location is visually stunning, and is sure to impress any special guests you are looking to entertain.</p>
                </div>
            </div>
            <div className="flex items-center text-center gap-12 flex-wrap">
                <Image className="max-w-[470px] max-h-[352px] object-cover md:w-auto w-full" unoptimized src="/experience/excellence.jpeg" alt={`Expertise `} width={470} height={352} />
                <div className="flex flex-col gap-2">
                    <h3 className="text-yellow text-3xl text-start">COMPROMISSO COM<br/>A EXCELÊNCIA</h3>
                    <p className="text-lg max-w-96 text-start">Located in the downtown, and accented by an ever-changing art collection from the world class Nazareth Gallery, the Fine Dine restaurant location is visually stunning, and is sure to impress any special guests you are looking to entertain.</p>
                </div>
            </div>
        </section>


    )
}