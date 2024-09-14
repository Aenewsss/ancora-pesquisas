'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { ref as refDatabase, get } from "firebase/database"; // For Firebase Realtime Database
import Header from "../components/header";
import { database } from "@/firebase";

export default function Gallery() {
    const [galleryImages, setGalleryImages] = useState<any[]>([]); // Array to hold image URLs

    // Fetch gallery images from Firebase Realtime Database
    useEffect(() => {
        const fetchGalleryImages = async () => {
            try {
                const galleryRef = refDatabase(database, 'gallery'); // Reference to the 'gallery' node in the database
                const snapshot = await get(galleryRef); // Fetch the data

                if (snapshot.exists()) {
                    const data = snapshot.val();
                    setGalleryImages(Object.values(data));
                } else {
                    console.error("No gallery images found.");
                }
            } catch (error) {
                console.error("Error fetching gallery images:", error);
            } finally {
            }
        };

        fetchGalleryImages();
    }, []);

    return (
        <main>
            <Header />
            <section className="min-h-screen p-10 bg-primary text-white">

                <h1 className="text-center text-yellow text-4xl font-bold mb-10">Galeria de Imagens</h1>

                {galleryImages.length === 0 ? (
                    <p className="text-center text-gray-500">Nenhuma imagem disponível no momento.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {galleryImages.map((el, index) => {
                            const isImage = (url: string) => {
                                return /\.(jpg|jpeg|png|gif|bmp|webp|svg)(\?.*)?$/.test(url);
                            };
                            return (
                                <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
                                    {isImage(el.url)

                                        ? <img src={el.url}
                                            alt={`Gallery Image ${index}`}
                                            width={500}
                                            height={500}
                                            className="object-cover rounded-lg h-[300px] w-[300px]" />
                                        : <video width={500} height={500} controls className="rounded-lg object-cover h-[300px] w-[300px]">
                                            <source src={el.url} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    }
                                </div>
                            )
                        })}
                    </div>
                )}
            </section>
        </main>
    );
}
