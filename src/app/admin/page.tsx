'use client'
import BannerManager from './BannerManager';
import NewsManager from './NewsManager';
import GalleryManager from './GalleryManager';

function AdminDashboard() {
  return (
    <main className="bg-primary h-full p-10 text-white flex flex-col gap-10">
      <h1 className="text-7xl text-center text-yellow font-bold">Painel de Admin</h1>
      <div className="flex flex-col gap-20">
        <BannerManager />
        <hr className="border-yellow" />
        <NewsManager />
        <hr className="border-yellow" />
        <GalleryManager />
        <hr className="border-yellow" />
      </div>
    </main>
  );
}

export default AdminDashboard;
