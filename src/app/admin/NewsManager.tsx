import React, { useState, useEffect } from 'react';
import { deleteObject, getDownloadURL, ref as refStorage, uploadBytesResumable } from "firebase/storage";
import { ref as refDatabase, push, get, remove } from "firebase/database";
import { database, storage } from "@/firebase";

function NewsManager() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [news, setNews] = useState<any[]>([]); // Array to hold the news data
  const [previewUrl, setPreviewUrl] = useState<string | null>(null); // Preview URL for the selected image

  // Fetch news data from Firebase when the component mounts
  useEffect(() => {
    loadData()
  }, []);

  function loadData() {
    const newsRef = refDatabase(database, 'news');
    get(newsRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const newsArray = Object.entries(data).map(([key, value]) => ({
          key, // Store the key for each news item
          ...value!,
        }));
        setNews(newsArray); // Set the news array
      }
    }).catch((error) => {
      console.error('Error fetching news:', error);
    });
  }

  const handleImageChange = (e: any) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);

      // Generate a preview URL for the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string); // Set the preview URL
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!image || !title || !subtitle || !text) return alert('Preencha todos os campos e selecione uma imagem.');

    const storageRef = refStorage(storage, `news/${image.name}`);

    const uploadTask = uploadBytesResumable(storageRef, image);

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
          const newNews = {
            title,
            subtitle,
            text,
            imageUrl: downloadURL,
          };

          const newsRef = refDatabase(database, 'news');
          push(newsRef, newNews);

          // Update news list with the new item
          setNews((prevNews) => [...prevNews, newNews]);

          setUploadProgress(0);
          setImage(null); // Reset image selection
          setPreviewUrl(null); // Clear the image preview
          setTitle(''); // Clear title field
          setSubtitle(''); // Clear subtitle field
          setText(''); // Clear text field
          alert('Notícia adicionada com sucesso!');
        });
      }
    );
  };

  const handleRemove = (newsItem: any) => {
    const newsKey = newsItem.key;
    const newsImageUrl = newsItem.imageUrl;

    // Remove the news entry from the database
    const newsRef = refDatabase(database, `news/${newsKey}`);
    remove(newsRef).then(() => {
      // Delete the image from storage
      const imageRef = refStorage(storage, newsImageUrl);
      deleteObject(imageRef)
        .then(() => {
          // Remove the news item from the state
          setNews((prevNews) => prevNews.filter((item) => item.key !== newsKey));
          loadData()
          alert('Notícia removida com sucesso!');
          location.reload()
        })
        .catch((error) => {
          console.error('Error removing image:', error);
        });
    }).catch((error) => {
      console.error('Error removing news:', error);
    });
  };

  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="text-3xl font-medium text-center">Gerenciamento de notícias</h2>

      <div className="flex justify-between items-center w-full">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <h2>Formulário de notícias</h2>

          <input
            className="rounded-md w-60 bg-white text-black px-4 py-2"
            type="text"
            placeholder="Título da notícia"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="rounded-md w-60 bg-white text-black px-4 py-2"
            type="text"
            placeholder="Subtítulo da notícia"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
          <textarea
            className="rounded-md w-60 bg-white text-black px-4 py-2"
            placeholder="Texto"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <label className="w-60 cursor-pointer bg-white text-gray-400 px-4 py-2 rounded-md" htmlFor="file">
            Foto da notícia
          </label>
          <input accept="image/*" id="file" hidden type="file" onChange={handleImageChange} />

          {/* Preview of selected image */}
          {previewUrl && (
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-medium">Pré-visualização da imagem selecionada:</h3>
              <img src={previewUrl} alt="Preview" className="w-40 h-40 object-cover rounded-md border" />
            </div>
          )}

          <button
            type="submit"
            className={`w-60 rounded-md px-4 py-2 font-medium ${title && subtitle && text && image
              ? 'bg-yellow text-blue cursor-pointer'
              : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
          >
            Salvar
          </button>
        </form>
        {uploadProgress > 0 && <progress value={uploadProgress} max="100" />}

        <div className="flex flex-col gap-4 mt-8">
          <h2>Notícias:</h2>
          {news.length > 0 ? (
            news.map((newsItem, index) => (
              <div key={index} className="flex flex-col items-center gap-2 p-2 border rounded-md w-80">
                <img src={newsItem.imageUrl} alt={newsItem.title} className="w-full object-cover rounded-md" />
                <h3 className="text-xl font-medium">Título: {newsItem.title}</h3>
                <h4 className="text-lg font-light">Subtítulo: {newsItem.subtitle}</h4>
                <p>Texto: {newsItem.text}</p>
                <button
                  onClick={() => handleRemove(newsItem)}
                  className="bg-red-500 text-white rounded-md px-4 py-2"
                >
                  Remover
                </button>
              </div>
            ))
          ) : (
            <p className="text-orange-400">Nenhuma notícia disponível no momento.</p>
          )}
        </div>
      </div>

    </div>
  );
}

export default NewsManager;
