import React, { useState, useEffect } from 'react';
import { getDownloadURL, ref as refStorage, uploadBytesResumable, deleteObject } from "firebase/storage";
import { ref as refDatabase, push, get, remove, set } from "firebase/database";
import { database, storage } from "@/firebase";

function GalleryManager() {
  const [galleryImage, setGalleryImage] = useState<File | null>(null);
  const [galleryImages, setGalleryImages] = useState<any[]>([]); // Array to hold gallery images with keys
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null); // Preview URL for the selected image

  // Fetch gallery images from Firebase when the component mounts
  useEffect(() => {
    const galleryRef = refDatabase(database, 'gallery');
    get(galleryRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const images = Object.entries(data).map(([key, value]) => ({
          key, // Store the key for each image
          // @ts-ignore
          url: value.url
        })); // Extract URLs and keys from the snapshot
        setGalleryImages(images); // Set the gallery images
      }
    }).catch((error) => {
      console.error('Error fetching gallery images:', error);
    });
  }, []);

  const handleImageChange = (e: any) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setGalleryImage(file);

      // Generate a preview URL for the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string); // Set the preview URL
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = (e: any) => {
    e.preventDefault();
    if (!galleryImage) return alert('Selecione uma imagem');

    const storageRef = refStorage(storage, `gallery/${galleryImage.name}`);

    const uploadTask = uploadBytesResumable(storageRef, galleryImage);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setUploadProgress(progress);
      },
      (error) => {
        console.error('Upload failed:', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const galleryRef = refDatabase(database, 'gallery');
          const newGalleryRef = push(galleryRef); // Get a new reference for the new image
          set(newGalleryRef, { url: downloadURL });

          // Update gallery images list with the new image
          setGalleryImages((prevImages) => [...prevImages, { key: newGalleryRef.key, url: downloadURL }]);

          setUploadProgress(0);
          setGalleryImage(null); // Reset the selected image
          setPreviewUrl(null); // Clear the preview
          alert('Imagem adicionada a galeria!');
          location.reload()

        });
      }
    );
  };

  // Function to remove an image from database and storage
  const handleRemove = (image: any) => {
    const imageKey = image.key;
    const imageUrl = image.url;

    // Remove the image entry from the database
    const imageRef = refDatabase(database, `gallery/${imageKey}`);
    remove(imageRef).then(() => {
      // Delete the image from storage
      const storageRef = refStorage(storage, imageUrl);
      deleteObject(storageRef)
        .then(() => {
          // Remove the image from the state
          setGalleryImages((prevImages) => prevImages.filter((item) => item.key !== imageKey));
          alert('Imagem removida com sucesso!');
          location.reload()
        })
        .catch((error) => {
          console.error('Error removing image from storage:', error);
        });
    }).catch((error) => {
      console.error('Error removing image from database:', error);
    });
  };

  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="text-3xl font-medium text-center">Gerenciamento da galeria</h2>

      <div className="flex justify-between items-start w-full flex-wrap gap-y-10">
        <form className="flex flex-col gap-2" onSubmit={handleUpload}>
          <h2>Formulário galeria</h2>
          <label className="w-60 cursor-pointer bg-white text-gray-400 px-4 py-2 rounded-md mt-4" htmlFor="file_gallery">
            Nova imagem para a galeria
          </label>
          <input
            accept="image/*"
            required
            id="file_gallery"
            hidden
            type="file"
            onChange={handleImageChange}
          />
          {previewUrl && (
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-medium">Pré-visualização da imagem selecionada:</h3>
              <img src={previewUrl} alt="Preview" className="w-40 h-40 object-cover rounded-md border" />
            </div>
          )}
          <button
            type="submit"
            disabled={!galleryImage}
            className={`w-60 rounded-md px-4 py-2 font-medium ${galleryImage ? 'bg-yellow text-blue cursor-pointer' : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
          >
            Salvar
          </button>
          {uploadProgress > 0 && <progress value={uploadProgress} max="100" />}
        </form>

        <div className="flex flex-col gap-2">
          <h2>Galeria de fotos</h2>
          <div className="flex flex-wrap gap-4 mt-4">
            {galleryImages.length > 0 ? (
              galleryImages.map((image, index) => (
                <div key={index} className="relative">
                  <img src={image.url} alt={`Gallery Image ${index}`} className="w-40 h-40 object-cover rounded-md border" />
                  <button
                    onClick={() => handleRemove(image)}
                    className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                  >
                    ✕
                  </button>
                </div>
              ))
            ) : (
              <p className="text-orange-400">Nenhuma imagem na galeria no momento.</p>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default GalleryManager;
