import { useState, useEffect } from 'react';
import { deleteObject, getDownloadURL, ref as refStorage, uploadBytesResumable } from "firebase/storage";
import { ref as refDatabase, set, get, remove } from "firebase/database";
import { database, storage } from "@/firebase";

function BannerManager() {
  const [bannerImage, setBannerImage] = useState<File | null>(null);
  const [bannerPreviewUrl, setBannerPreviewUrl] = useState<string | null>(null); // For selected image preview
  const [currentBannerUrl, setCurrentBannerUrl] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Fetch the current banner URL when the component mounts
  useEffect(() => {
    const bannerRef = refDatabase(database, 'banner');
    get(bannerRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setCurrentBannerUrl(data.url); // Set the current banner URL
      }
    }).catch((error) => {
      console.error('Error fetching current banner:', error);
    });
  }, []);

  const handleImageChange = (e: any) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setBannerImage(file);

      // Generate a preview URL for the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerPreviewUrl(reader.result as string); // Set the preview URL
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (!bannerImage) return alert('Selecione uma imagem');

    const storageRef = refStorage(storage, `banners/banner.jpg`);

    const uploadTask = uploadBytesResumable(storageRef, bannerImage);

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
          const bannerRef = refDatabase(database, 'banner');
          set(bannerRef, { url: downloadURL });

          setCurrentBannerUrl(downloadURL);
          setBannerPreviewUrl(null);
          setUploadProgress(0);
          alert('Banner inserido com sucesso!');
          location.reload()

        });
      }
    );
  };

  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="text-3xl font-medium text-center">Gerenciamento do banner do topo</h2>

      <div className="flex justify-between items-start w-full flex-wrap gap-y-10">
      <form className="flex flex-col gap-2">
          <h2>Formulário banner</h2>

          <label className="w-60 cursor-pointer bg-white  text-gray-400 px-4 py-2 rounded-md" htmlFor="file_banner">
            Nova imagem do banner
          </label>
          <input accept="image/*" id="file_banner" hidden type="file" onChange={handleImageChange} />

          <button
            className={`w-60 rounded-md px-4 py-2 font-medium ${bannerImage ? 'bg-yellow text-blue cursor-pointer' : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
            onClick={handleUpload}
            disabled={!bannerImage}
          >
            Salvar
          </button>

          {uploadProgress > 0 && <progress value={uploadProgress} max="100" />}
        </form> 
        
        <div>
          {currentBannerUrl ? (
            <div className="flex flex-col items-start gap-2">
              <h2>Banner Atual:</h2>
              <img src={currentBannerUrl} alt="Banner Atual" className="w-60 h-auto rounded-md border" />
            </div>
          ) : (
            <p className="text-orange-400">Nenhum banner disponível no momento.</p>
          )}

          {bannerPreviewUrl && (
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-medium">Pré-visualização da imagem selecionada:</h3>
              <img src={bannerPreviewUrl} alt="Pré-visualização do Banner" className="w-60 h-auto rounded-md border" />
            </div>
          )}
        </div>

  
      </div>

    </div>
  );
}

export default BannerManager;
