import { RevealOnScroll } from "../RevealOnScroll"
import { Link } from "react-router-dom";

const PDF_FILE_URL = "http://localhost:5173/public/portfolio.pdf";
export const About = () => {
    const frontendSkills = ["html", "CSS", "Bootstrap", "React" , "TailwindCSS"]
    const backendSkills = ["Java", "python", "nodeJS", "dotnet", "php", "alpine", "laravel", "livewire", "mysql"]

    const downloadFile = (url) => {
        fetch(url)
        .then((response)=>response.blob())
        .then((blob)=>{
          const blobUrl = window.URL.createObjectURL(new Blob([blob]));
          const fileName = url.split("/").pop();
          const aTag = document.createElement("a");
          aTag.href = url;
          aTag.setAttribute("download", fileName);``
          document.body.appendChild(aTag);
          aTag.click();
          aTag.remove();
        });
    };

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Over Mij</h2>
                    
                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Ik ben een Full Stack Developer met een passie voor het creëren van gebruiksvriendelijke en visueel aantrekkelijke webapplicaties. Mijn reis in de wereld van technologie begon met een fascinatie voor computers en programmeren, en sindsdien heb ik mijn vaardigheden voortdurend ontwikkeld en verfijnd.
                        </p>

                        <div className="flex justify-center space-x-4 mb-6">
                                <Link 
                                    to="/cv" 
                                    className="bg-blue-500 text-white py-3 
                                    px-6 rounded-lg font-medium transition relative 
                                    overflow-hidden hover:-translate-y-0.5 
                                    hover:shadow-[O_0_15px_rgba(59, 130, 246, 0.4)] duration-300">
                                        Open CV
                                </Link>
                            </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* niet gekozen keuze waarschijnlijk */}
                            {/*
                            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 
                                        py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition
                                        cursor-pointer">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend test</h3>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm">tailwind</span>
                                    <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm">react</span>
                                </div>
                            </div>
                            */}
                            

                        
                            
                            {/* gekozen keuze waarschijnlijk */}
                            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2 cursor-pointer">
                                    {frontendSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                            </div>

                            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2 cursor-pointer">
                                    {backendSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                            </div>
                            

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">Opleiding</h3>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>
                                            <strong>Toegepaste informatica</strong> - Thomas More (2022 - 2026)
                                        </li>
                                        <li>
                                            Relevante studiewerk: Data Structuren, Web Development, AI
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">Werkervaring</h3>
                                    <div className="space-y-4 text-gray-300">
                                        <div>
                                            <h4>Bakkerij Max in Sint-Anthonius (2019-2020)</h4>
                                        </div>
                                        <div>
                                            <h4>Cadiemaster at Rinken International (2020-2021)</h4>
                                            <p>
                                                Ontvangen van leden, helpen en hun golfzak aanbieden.
                                                Drivingrange proper houden en ballen afrijden.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                    </div>
                    
                
                </div>
            </RevealOnScroll>
        </section>
    )
}