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
      title: "The Fundamentals of Digital Marketing",
      organization: "Google Digital Garage",
      date: "February 2024",
      skills: ["Digital Marketing", "SEO", "Analytics", "Content Strategy", "Social Media"]
    },
    {
      id: 5,
      title: "Agile Scrum Master",
      organization: "Simplilearn",
      date: "November 2023",
      skills: ["Agile Methodology", "Scrum", "Sprint Planning", "Retrospectives"]
    },
    {
      id: 6,
      title: "Automation Framework Development using Selenium",
      organization: "Unicode Technologies HR",
      date: "November 2023",
      skills: ["Selenium", "Test Automation", "Java", "TestNG", "Framework Design"]
    },
    {
      id: 7,
      title: "Human Resource Management",
      organization: "Great Learning",
      date: "December 2023",
      skills: ["HR Management", "Talent Acquisition", "Employee Relations", "Performance Management"]
    },
    {
      id: 8,
      title: "Introduction to Amazon Elastic Compute Cloud (EC2)",
      organization: "AWS Training Online",
      date: "December 2023",
      skills: ["AWS", "EC2", "Cloud Computing", "Instance Management", "Scaling"]
    },
    {
      id: 9,
      title: "Manual and Automation Testing",
      organization: "Unicode Technologies HR",
      date: "November 2023",
      skills: ["Manual Testing", "Test Cases", "Automation Testing", "QA"]
    },
    {
      id: 10,
      title: "Operating System",
      organization: "NPTEL",
      date: "January 2024",
      skills: ["OS Concepts", "Process Management", "Memory Management", "File Systems"]
    },
    {
      id: 11,
      title: "Programming in Java",
      organization: "NPTEL",
      date: "January 2024",
      skills: ["Java", "OOP", "Data Structures", "Collections", "Multithreading"]
    },
    {
      id: 12,
      title: "Environmental Engineering and Artificial Intelligence",
      organization: "Udemy Free Courses",
      date: "November 2023",
      skills: ["Environmental Engineering", "AI Applications", "Sustainability"]
    },
    {
      id: 13,
      title: "Elementary Drawing Grade Examination",
      organization: "State Examination Board Gujarat",
      date: "December 2023",
      skills: ["Drawing Fundamentals", "Sketching", "Art Techniques"]
    },
    {
      id: 14,
      title: "Intermediate Drawing Grade Examination",
      organization: "State Examination Board Gujarat",
      date: "December 2023",
      skills: ["Advanced Drawing", "Composition", "Visual Arts"]
    },
    {
      id: 15,
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificates.map((cert) => (
          <div 
            key={cert.id} 
            className="certificate-card bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-lg shadow-lg border border-purple-400/30 hover:border-purple-400/70 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col h-full">
              <div className="mb-2">
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-base font-semibold text-white">{cert.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded bg-purple-500/20 text-purple-200 font-medium ml-1 whitespace-nowrap">{cert.date}</span>
                  </div>
                  <p className="text-purple-300 font-medium text-sm">{cert.organization}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mt-2 mb-3">
                {cert.skills.slice(0, 4).map((skill, index) => (
                  <span 
                    key={index} 
                    className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
                {cert.skills.length > 4 && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">
                    +{cert.skills.length - 4} more
                  </span>
                )}
              </div>
              
              <div className="mt-auto pt-2 border-t border-slate-700">
                {cert.credentialUrl ? (
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-purple-400 hover:text-purple-300 flex items-center transition-colors"
                  >
                    <span>View Credential</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <span className="text-xs text-gray-500 italic">Credential not available online</span>
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