export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title text-gradient-blue flex items-center">
        <span className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </span>
        Contact Information
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="contact-card bg-gradient-to-br from-indigo-900/70 to-purple-900/70 p-6 rounded-xl shadow-md backdrop-blur-sm fade-in-up border border-indigo-700/30">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-indigo-400 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-white mb-1">Email</h3>
              <a href="mailto:vidhi9467@gmail.com" className="text-indigo-300 hover:text-white transition-colors">vidhi9467@gmail.com</a>
            </div>
          </div>
          
          <div className="flex items-start gap-4 mb-6">
            <div className="text-indigo-400 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-white mb-1">Phone</h3>
              <a href="tel:+917069998574" className="text-indigo-300 hover:text-white transition-colors">+91 7069998574</a>
            </div>
          </div>
          
          <div className="flex items-start gap-4 mb-6">
            <div className="text-indigo-400 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-white mb-1">Location</h3>
              <p className="text-indigo-300">Ahmedabad, India</p>
            </div>
          </div>
          
          <div className="pt-4 border-t border-indigo-700/30">
            <h3 className="font-medium text-white mb-3">Connect with me</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/vidhi-panchal27" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-indigo-300 hover:text-white transition-colors" 
                aria-label="LinkedIn Profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="col-span-1 lg:col-span-2 fade-in-up">
          <div className="bg-gradient-to-br from-indigo-900/70 to-purple-900/70 rounded-xl p-6 shadow-md backdrop-blur-sm border border-indigo-700/30 h-full">
            <h3 className="text-lg font-medium mb-6 text-white">Availability</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-indigo-800/50 rounded-lg border border-indigo-700/30">
                <h4 className="text-indigo-300 font-medium mb-2">Available for Full-time Opportunities</h4>
                <p className="text-white/90">Currently seeking full-time position in Project Coordinator roles.</p>
              </div>
              
              <div className="p-4 bg-indigo-800/50 rounded-lg border border-indigo-700/30">
                <h4 className="text-indigo-300 font-medium mb-2">Open to Relocation</h4>
                <p className="text-white/90">Willing to relocate for the right opportunity within India or abroad.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="stars-animation"></div>
    </section>
  );
}
