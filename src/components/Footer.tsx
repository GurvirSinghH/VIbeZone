import { Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-20">
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                <div className="col-span-full lg:col-span-1 mb-8 lg:mb-0">
                    <Link to="/" className="flex items-center space-x-2">
                         <Music className="text-indigo-500" />
                        <h1 className="text-xl font-bold text-white">VibeZone</h1>
                    </Link>
                    <p className="text-neutral-400 mt-4 text-sm">Your Music, Your Vibe.</p>
                </div>
                <div>
                    <h5 className="font-semibold text-white mb-4">Product</h5>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Features</a></li>
                        <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Pricing</a></li>
                        <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Updates</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold text-white mb-4">Company</h5>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">About</a></li>
                        <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold text-white mb-4">Resources</h5>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Support</a></li>
                        <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy</a></li>
                        <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold text-white mb-4">Follow Us</h5>
                </div>
            </div>
            <div className="mt-12 text-center text-sm text-neutral-500">
                &copy; 2024 VibeZone. All Rights Reserved.
            </div>
        </div>
    </footer>
  );
};

export default Footer;