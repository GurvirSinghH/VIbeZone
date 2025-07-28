import { Search } from 'lucide-react';

const ExplorePage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
        <section className="mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Explore</h1>
            <div className="relative max-w-2xl">
                <input type="search" placeholder="Search for artists, songs, or playlists..." className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <Search className="text-neutral-500" size={20} />
                </div>
            </div>
        </section>

        <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Browse Genres</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <a href="#" className="aspect-square rounded-lg relative overflow-hidden transition-transform hover:scale-105 group">
                    <img src="https://placehold.co/300x300/EC4899/FFFFFF?text=Pop" alt="Pop Genre" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                        <h3 className="text-xl font-bold text-white">Pop</h3>
                    </div>
                </a>
            </div>
        </section>
    </div>
  );
};

export default ExplorePage;