import { RevealOnScroll } from "../RevealOnScroll"
import { HashLink } from 'react-router-hash-link';

export const Home = () => {
    return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
            <div className="flex flex-col-reverse md:flex-row justify-around items-center gap-y-2">
                <div className="text-center z-10 px-4 w-2/5">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-right">
                        Hallo, ik ben <br/><span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Alex Hendrickx</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        Ik ben een software developer met een passie voor het bouwen van innovatieve oplossingen. 
                        {/*Mijn expertise ligt in het ontwikkelen van webapplicaties en het optimaliseren van gebruikerservaringen. */}
                    </p>
                    <div className="flex justify-center space-x-4">
                        <HashLink 
                            to="/#projects" 
                            className="bg-blue-500 text-white py-3 
                            px-6 rounded-lg font-medium transition relative 
                            overflow-hidden hover:-translate-y-0.5 
                            hover:shadow-[O_0_15px_rgba(59, 130, 246, 0.4)] duration-300">
                            Bekijk mijn werk
                        </HashLink>

                        <HashLink
                            to="/#contact"
                            className="border border-blue-500/50 text-blue-500
                            py-3 px-6 rounded font-medium transition-all duration-200
                            over:-translate-y-0.5 hover:shadow-[O_0_15px_rgba(59, 130, 246, 0.2)] duration-300
                             hover:bg-blue-500/10">
                            Contacteer me
                        </HashLink>

                    </div>
                </div>
                <img src="/me.jpg" alt="" className="rounded-full w-2/5" />    

            </div>

            
        </RevealOnScroll>
    </section>
    )
}