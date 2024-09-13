import { database } from "@/firebase";
import { get, ref } from "firebase/database";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function News() {

    const [news, setNews] = useState<any[]>([]);

    useEffect(() => {
        const fetchBannerImage = async () => {
            try {
                const bannerRef = ref(database, 'news'); // Reference to the 'banner' node in the database
                const snapshot = await get(bannerRef); // Fetch the data

                if (snapshot.exists()) {
                    const data = snapshot.val();
                    console.log(Object.values(data))
                    setNews(Object.values(data)); // Assuming the image URL is stored as 'url'
                } else {
                    console.error("No banner image found.");
                }
            } catch (error) {
                console.error("Error fetching banner image:", error);
            }
        };

        fetchBannerImage();
    }, []);

    return (
        <section className="container mx-auto py-20 bg-dark-blue text-white">
            <h2 className="text-3xl font-bold text-center mb-12">Notícias e Atualizações</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {
                    news?.map((el, index) =>
                        <div key={index} className="text-center">
                            <Image unoptimized className="object-cover" src={el.imageUrl} width={300} height={300} alt="Hero" />
                            <h3 className="text-xl font-bold mt-4">{el.title}</h3>
                            <p className="text-sm">{el.subtitle}</p>
                        </div>
                    )
                }
            </div>
            {
                !news && <>
                    <div className="text-center">
                        <div className="h-40 bg-gray-800"></div>
                        <h3 className="text-xl font-bold mt-4">Comercial Cleaning</h3>
                        <p className="text-sm">Some description about the news here.</p>
                    </div>
                    <div className="text-center">
                        <div className="h-40 bg-gray-800"></div>
                        <h3 className="text-xl font-bold mt-4">Comercial Cleaning</h3>
                        <p className="text-sm">Some description about the news here.</p>
                    </div>
                    <div className="text-center">
                        <div className="h-40 bg-gray-800"></div>
                        <h3 className="text-xl font-bold mt-4">Comercial Cleaning</h3>
                        <p className="text-sm">Some description about the news here.</p>
                    </div>
                    <div className="text-center">
                        <div className="h-40 bg-gray-800"></div>
                        <h3 className="text-xl font-bold mt-4">Comercial Cleaning</h3>
                        <p className="text-sm">Some description about the news here.</p>
                    </div>
                </>
            }
        </section>

    )
}