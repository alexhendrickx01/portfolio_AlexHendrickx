import { useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from "react";


export const ProjectDetails = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
  
    useEffect(() => {
      // Laad het JSON-bestand van de server
      fetch("/projects.json")
        .then((response) => response.json())
        .then((data) => {
          const project = data.projects.find((p) => p.id === projectId);
          setProject(project);
        })
        .catch((error) => console.error("Error loading project:", error));
    }, [projectId]);

    if (!project) {
        return <div className="p-10">Project not found.</div>
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center max-w-4xl mx-auto p-10">
                        {/* Terug knop */}
                        <HashLink
                            to="/#projects"
                            className="absolute top-20 left-4 bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
                        >
                            Terug gaan
                        </HashLink>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-400 mb-6">{project.details}</p>
            <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, key) => (
                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};
