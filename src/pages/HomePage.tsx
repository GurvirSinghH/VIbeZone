import { Link } from 'react-router-dom';
import { Import, Sparkles, Users } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      <style>{`
        .hero-gradient {
            background: radial-gradient(ellipse at top, rgba(79, 70, 229, 0.3) 0%, rgba(10, 10, 10, 0) 50%);
        }
      `}</style>
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 text-center hero-gradient">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Your Music, Your Vibe.
            <br />
            <span className="text-indigo-400">Perfectly Synced.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-300 mb-10">
            Discover, create, and share playlists that move you. VibeZone is the ultimate music player for every moment.
          </p>
          <Link to="/explore" className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105 inline-block">
            Launch Web Player
          </Link>
          <p className="text-sm text-neutral-500 mt-4">Free forever. No credit card needed.</p>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">All Your Music in One Place</h2>
            <p className="text-lg text-neutral-400 mt-2">Everything you need to enjoy your favorite tracks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:-translate-y-1 p-8 rounded-2xl">
              <div className="bg-indigo-500/20 text-indigo-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Import size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Import with Ease</h3>
              <p className="text-neutral-400">Seamlessly import your playlists from other platforms. Your music library, now unified.</p>
            </div>
            <div className="bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:-translate-y-1 p-8 rounded-2xl">
              <div className="bg-purple-500/20 text-purple-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI-Powered Discovery</h3>
              <p className="text-neutral-400">Our smart engine suggests new tracks and artists based on your unique taste.</p>
            </div>
            <div className="bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:-translate-y-1 p-8 rounded-2xl">
              <div className="bg-sky-500/20 text-sky-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Collaborative Playlists</h3>
              <p className="text-neutral-400">Create the perfect mix with friends. Invite others to add and reorder tracks in real-time.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;