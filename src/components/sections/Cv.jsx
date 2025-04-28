import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


const PDF_FILE_URL = "http://localhost:5173/public/portfolio.pdf";

export const Cv = () => {
    const downloadFile = (url) => {
        fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
                const blobUrl = window.URL.createObjectURL(new Blob([blob]));
                const fileName = url.split("/").pop();
                const aTag = document.createElement("a");
                aTag.href = blobUrl; // Kleine fix: gebruik blobUrl ipv url zelf
                aTag.setAttribute("download", fileName);
                document.body.appendChild(aTag);
                aTag.click();
                aTag.remove();
            });
    };

    return (
        <section className="pt-20 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
            {/* Terug knop */}
            <HashLink
                to="/#about"
                className="absolute top-20 left-4 bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
            >
                Terug gaan
            </HashLink>


            <button
                className="
                bg-blue-500 text-white py-3 
                px-6 rounded-lg font-medium transition relative 
                overflow-hidden hover:-translate-y-0.5 
                hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] duration-300 cursor-pointer"
                onClick={() => downloadFile(PDF_FILE_URL)}
            >
                Download CV
            </button>

            <img src="../../../portfolio.png" alt="" className="w-2/5" />    
        </section>
    );
}
