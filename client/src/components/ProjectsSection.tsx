import { useState, useEffect, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  techs: string[];
  link?: string;
  image?: string;
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('animate-in');
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Fake News Buster - Innodel Technologies",
      description: "Managed requirement gathering, assigned tasks to developers, and ensured proper implementation through testing, and refining system functionalities through market research and business process analysis.",
      techs: ["Requirement Analysis", "Project Management", "QA Testing", "Market Research"],
      link: "https://innodel.com",
      image: "https://placehold.co/300x200/001845/ffffff?text=Fake+News+Buster"
    },
    {
      id: 2,
      title: "Formzi - Innodel Technologies",
      description: "Improved UI/UX strategy for a form management system, enhancing accessibility and usability. Analyzed workflows and collaborated with designers to implement changes.",
      techs: ["UI/UX Design", "Accessibility", "Usability Testing", "Workflow Analysis"],
      link: "https://innodel.com",
      image: "https://placehold.co/300x200/570861/ffffff?text=Formzi"
    },
    {
      id: 3,
      title: "ERPZi - Pacific Placing & Finishing - Innodel Technologies",
      description: "Gathered business requirements and optimized ERP workflows for project tracking and resource management. Conducted UAT testing and provided feedback for process improvements.",
      techs: ["ERP", "Business Analysis", "UAT Testing", "Resource Management"],
      link: "https://innodel.com",
      image: "https://placehold.co/300x200/0a5700/ffffff?text=ERPZi"
    },
    {
      id: 4,
      title: "Aquarius Salon in Cloud - Samcom Technobrains",
      description: "Worked as a React.js developer on a cloud-based salon management project, handling appointments, products, and operations. Implemented REST APIs and enhanced functionality.",
      techs: ["React.js", "REST API", "Cloud Services", "Salon Management"],
      link: "https://samcomtechnobrains.com",
      image: "https://placehold.co/300x200/00094d/ffffff?text=Aquarius+Salon"
    }
  ]);
  
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const handleProjectHover = (id: number | null) => {
    setActiveProject(id);
  };

  return (
    <section ref={sectionRef} id="projects" className="section projects-section fade-in-up">
      <h2 className="section-title text-gradient-blue flex items-center">
        <span className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </span>
        Featured Projects
      </h2>
      
      <div className="project-grid grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`project-card group relative overflow-hidden rounded-xl transition-all duration-500 transform perspective-1000 ${
              activeProject === project.id ? 'scale-[1.02] z-10' : 'hover:scale-[1.01]'
            }`}
            onMouseEnter={() => handleProjectHover(project.id)}
            onMouseLeave={() => handleProjectHover(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90 opacity-90 z-10"></div>
            
            <div className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            
            <div className="relative z-20 p-6 h-full flex flex-col">
              <h3 className="text-xl font-bold text-white mb-3 project-title">{project.title}</h3>
              
              <p className="text-blue-100 mb-4 flex-grow opacity-90 project-description">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techs.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-blue-800/50 text-blue-200 text-xs rounded-full border border-blue-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors group"
                >
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
          </div>
        ))}
      </div>
      
      <div className="lines-animation"></div>
    </section>
  );
}