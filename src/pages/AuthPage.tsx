import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

const AuthPage = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  const formInputClasses = "bg-[#181818] border border-[#333] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 w-full mt-1 p-3 rounded-lg focus:outline-none";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <Link to="/" className="inline-flex items-center space-x-3">
          <Music className="text-indigo-500 h-8 w-8" />
          <h1 className="text-3xl font-bold text-white">VibeZone</h1>
        </Link>
      </div>

      <div className="bg-[#121212] border border-white/10 w-full max-w-md rounded-2xl p-8 shadow-2xl">
        {isLoginView ? (
          <div>
            <h2 className="text-2xl font-bold text-white text-center mb-1">Welcome Back!</h2>
            <p className="text-center text-neutral-400 mb-6">Log in to continue to VibeZone.</p>
            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="login-email" className="text-sm font-medium text-neutral-300">Email</label>
                  <input type="email" id="login-email" name="email" className={formInputClasses} placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="login-password" className="text-sm font-medium text-neutral-300">Password</label>
                  <input type="password" id="login-password" name="password" className={formInputClasses} placeholder="••••••••" />
                </div>
              </div>
              <a href="#" className="text-sm text-indigo-400 hover:underline mt-3 block text-right">Forgot password?</a>
              <button type="submit" className="transition-transform hover:scale-102 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-lg mt-6">
                Log In
              </button>
            </form>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#121212] text-neutral-500">OR</span>
              </div>
            </div>
            <p className="mt-8 text-center text-sm text-neutral-400">
              Don't have an account?
              <button onClick={() => setIsLoginView(false)} className="font-semibold text-indigo-400 hover:underline ml-1">Sign up</button>
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-white text-center mb-1">Create Account</h2>
            <p className="text-center text-neutral-400 mb-6">Join VibeZone to start listening.</p>
            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="signup-name" className="text-sm font-medium text-neutral-300">Full Name</label>
                  <input type="text" id="signup-name" name="name" className={formInputClasses} placeholder="Chen Wang" />
                </div>
                <div>
                  <label htmlFor="signup-email" className="text-sm font-medium text-neutral-300">Email</label>
                  <input type="email" id="signup-email" name="email" className={formInputClasses} placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="signup-password" className="text-sm font-medium text-neutral-300">Password</label>
                  <input type="password" id="signup-password" name="password" className={formInputClasses} placeholder="••••••••" />
                </div>
              </div>
              <button type="submit" className="transition-transform hover:scale-102 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-lg mt-6">
                Create Account
              </button>
            </form>
            <p className="mt-6 text-center text-xs text-neutral-500">
              By signing up, you agree to our <a href="#" className="underline hover:text-indigo-400">Terms of Service</a>.
            </p>
            <p className="mt-6 text-center text-sm text-neutral-400">
              Already have an account?
              <button onClick={() => setIsLoginView(true)} className="font-semibold text-indigo-400 hover:underline ml-1">Log in</button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;