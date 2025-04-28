import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from '/src/components/NavBar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

import { Routes, Route, useLocation } from 'react-router-dom'
import { Cv } from './components/sections/Cv'
import { ProjectDetails } from './components/sections/ProjectDetails'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Gebruik useLocation om de huidige locatie op te halen
  const location = useLocation();

  const MainPage = () => (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
        {/* Alleen de Navbar en MobileMenu tonen als we niet op de /cv pagina zitten */}
        {location.pathname !== '/cv' && (
          <>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </>
        )}
        
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
