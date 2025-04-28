import { useEffect } from "react";
import { HashLink } from 'react-router-hash-link';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);


  
    return (
      <nav className="fixed top-0 w-full z-40 bg[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <a href="#Home" className="font-mono text-xl font-bold text-white">
                alex <span className="text-blue-500 text-2xl">.</span>
              </a>
              
              
              <div 
                className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                &#9776;
              </div>
  
              <div className="hidden md:flex items-center space-x-8">
                <HashLink to="/#home" className="text-gray-300 hover:text-white transition-colors">home</HashLink>
                <HashLink to="/#about" className="text-gray-300 hover:text-white transition-colors">About</HashLink>
                <HashLink to="/#projects" className="text-gray-300 hover:text-white transition-colors">Projects</HashLink>
                <HashLink to="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact</HashLink>

              </div>
  

            </div>
          </div>
      </nav>
    );
  }