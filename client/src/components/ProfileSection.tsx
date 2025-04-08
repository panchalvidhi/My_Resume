export default function ProfileSection() {
  return (
    <section id="profile" className="section">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-accent fade-in-up">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop" 
            alt="Vidhi Panchal profile picture" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Vidhi Panchal</h1>
          <h2 className="text-xl text-primary font-medium mb-4">Analyst - Quality and Project</h2>
          <p className="text-gray-600 max-w-2xl mb-6">
            I am a results-driven professional with expertise in quality assurance, project management, and front-end development.
            Proficient in optimizing outcomes through strategic planning, process improvement, and Agile Methodologies.
            Committed to leveraging technical expertise and leadership capabilities to achieve organizational excellence.
          </p>
          <div className="flex flex-wrap gap-3">
            <a 
              href="#contact" 
              className="btn btn-primary no-print"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Contact Me
            </a>
            <a 
              href="javascript:window.print()" 
              className="btn btn-outline no-print"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
              </svg>
              Print Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
