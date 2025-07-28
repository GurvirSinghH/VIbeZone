import { useState } from 'react';

type Tab = 'playlists' | 'albums' | 'artists' | 'songs';

const LibraryPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>('playlists');

  const TabButton = ({ tab, children }: { tab: Tab, children: React.ReactNode }) => (
    <button
      className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-colors ${activeTab === tab ? 'bg-neutral-200 text-neutral-900' : 'text-neutral-300 hover:bg-neutral-700'}`}
      onClick={() => setActiveTab(tab)}
    >
      {children}
    </button>
  );

  return (
    <div className="container mx-auto px-6 py-12">
      <section>
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">My Library</h1>
          <div className="bg-neutral-800 p-1 rounded-lg flex items-center space-x-1">
            <TabButton tab="playlists">Playlists</TabButton>
            <TabButton tab="albums">Albums</TabButton>
            <TabButton tab="artists">Artists</TabButton>
            <TabButton tab="songs">Songs</TabButton>
          </div>
        </div>

        <div>
          {activeTab === 'playlists' && <div>Playlists Content</div>}
          {activeTab === 'albums' && <div>Albums Content</div>}
          {activeTab === 'artists' && <div>Artists Content</div>}
          {activeTab === 'songs' && <div>Songs Content</div>}
        </div>
      </section>
    </div>
  );
};

export default LibraryPage;