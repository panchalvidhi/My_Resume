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


  return (
    <section ref={sectionRef} id="projects" className="section projects-section fade-in-up">
      <h2 className="section-title text-gradient-blue flex items-center">
        <span className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </span>
        Projects
      </h2>
      
      <div className="project-grid flex flex-col gap-4">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project-card bg-blue-900/40 rounded-lg p-6 border border-blue-800/50 hover:border-blue-600/50 transition-colors duration-300"
          >
            <h3 className="text-xl font-bold text-white mb-2 project-title">{project.title}</h3>
            
            <p className="text-blue-100 opacity-90 project-description mb-0">
              {project.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="lines-animation"></div>
    </section>
  );
}