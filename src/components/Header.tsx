import { Music } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-white font-semibold' : 'text-neutral-300 hover:text-white transition-colors';

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Music className="text-indigo-500" />
          <h1 className="text-xl font-bold text-white">VibeZone</h1>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/explore" className={navLinkClasses}>Explore</NavLink>
          <NavLink to="/library" className={navLinkClasses}>Library</NavLink>
          <NavLink to="/upload" className={navLinkClasses}>Upload</NavLink>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/auth" className="text-neutral-300 hover:text-white transition-colors">Log In</Link>
          <Link to="/auth" className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg transition-all hover:scale-105">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;