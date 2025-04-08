import { useRef, useEffect } from "react";

export default function ProfileSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add("animate-in");
        }
      },
      { threshold: 0.3 },
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

  const handleDownloadResume = () => {
    // Create a link to download the resume PDF
    const link = document.createElement("a");
    link.href = "/Vidhi Panchal-Resume (1).pdf";
    link.download = "Vidhi_Panchal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section ref={sectionRef} id="profile" className="section profile-section">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-500/30 profile-image">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQGKsfswWGDt8g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729263037060?e=1749686400&v=beta&t=oTcmJ61f_NmkJtFaU6GmXKgtOiRaUMjyAouybbJCcG8"
            alt="Vidhi Panchal profile picture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="profile-content">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Vidhi Panchal
          </h1>
          <h2 className="text-xl text-blue-400 font-medium mb-4">
            Analyst - Quality and Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mb-6">
            I am a results-driven professional with expertise in quality
            assurance, project management, and front-end development. Proficient
            in optimizing outcomes through strategic planning, process
            improvement, and Agile Methodologies. Demonstrated success in
            leading cross-functional teams, driving customer satisfaction, and
            delivering customized solutions. Committed to leveraging technical
            expertise and leadership capabilities to achieve organizational
            excellence and impactful results.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-primary no-print">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Contact Me
            </a>
            <button
              onClick={handleDownloadResume}
              className="btn btn-outline no-print relative group overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:translate-x-0"></span>
              <span className="relative flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:translate-y-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clipRule="evenodd"
                  />
                </svg>
                Download Resume
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
