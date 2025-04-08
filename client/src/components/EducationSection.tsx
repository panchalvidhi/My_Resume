import TimelineItem from "./TimelineItem";

export default function EducationSection() {
  return (
    <section id="education" className="section fade-in-up">
      <h2 className="section-title">Education</h2>
      <div className="space-y-8">
        <TimelineItem 
          title="B.E. in Computer Engineering" 
          organization="LDRP-ITR, Ahmedabad, India" 
          period="Jul 2018 - May 2021"
        >
          <p className="text-gray-600">
            CGPA: 8.38 
          </p>
        </TimelineItem>

        <TimelineItem 
          title="Diploma in Computer Engineering" 
          organization="Government Polytechnic for Girls, Ahmedabad, India" 
          period="Jun 2015 - May 2018"
        >
          <p className="text-gray-600">
            CGPA: 8.09
          </p>
        </TimelineItem>
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-3">Languages</h3>
        <div className="flex flex-wrap gap-2">
          <span className="skill-tag">English - Intermediate</span>
          <span className="skill-tag">Hindi - Advanced</span>
          <span className="skill-tag">Gujarati - Native</span>
        </div>
      </div>
    </section>
  );
}
