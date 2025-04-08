import { useState, useEffect, useRef } from 'react';

interface Certificate {
  id: number;
  title: string;
  organization: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
}

export default function CertificatesSection() {
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

  const [certificates] = useState<Certificate[]>([
    {
      id: 1,
      title: "Frontend Development Libraries",
      organization: "FreeCodeCamp",
      date: "December 2023",
      credentialUrl: "https://www.freecodecamp.org/certification/vidhi/front-end-development-libraries",
      skills: ["React", "Redux", "Bootstrap", "jQuery", "SASS"]
    },
    {
      id: 2,
      title: "Javascript (Intermediate)",
      organization: "HackerRank",
      date: "August 2023",
      credentialUrl: "https://www.hackerrank.com/certificates/96b2b42064ee",
      skills: ["JavaScript", "ES6", "Promise", "Async/Await", "DOM Manipulation"]
    },
    {
      id: 3,
      title: "Node Basics",
      organization: "HackerRank",
      date: "January 2023",
      credentialUrl: "https://www.hackerrank.com/certificates/ef0fbcb53e3e",
      skills: ["Node.js", "Express", "REST API", "Middleware"]
    },
    {
      id: 4,
      title: "Web Development with HTML, CSS, JavaScript",
      organization: "Udemy",
      date: "October 2022",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    }
  ]);

  return (
    <section ref={sectionRef} id="certificates" className="section certificates-section fade-in-up">
      <h2 className="section-title text-gradient-purple flex items-center">
        <span className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </span>
        Certifications
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {certificates.map((cert) => (
          <div 
            key={cert.id} 
            className="certificate-card bg-gradient-to-br from-slate-800 to-slate-900 p-5 rounded-lg shadow-lg border border-purple-400/30 hover:border-purple-400/70 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col h-full">
              <div className="mb-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-white mb-1">{cert.title}</h3>
                  <span className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-200 font-medium">{cert.date}</span>
                </div>
                <p className="text-purple-300 font-medium">{cert.organization}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2 mb-4">
                {cert.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="text-xs px-2 py-1 rounded-full bg-slate-700 text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto pt-2 border-t border-slate-700">
                {cert.credentialUrl ? (
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-purple-400 hover:text-purple-300 flex items-center transition-colors"
                  >
                    <span>View Credential</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <span className="text-sm text-gray-500 italic">Credential not available online</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="floating-dots"></div>
    </section>
  );
}