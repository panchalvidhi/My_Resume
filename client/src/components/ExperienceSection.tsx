import TimelineItem from "./TimelineItem";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section fade-in-up">
      <h2 className="section-title">Professional Experience</h2>
      <div className="space-y-8">
        <TimelineItem 
          title="Analyst - Quality and Project" 
          organization="Innodel Technologies Pvt. Ltd." 
          period="Jul 2023 - Present"
        >
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>Identified needs of customers promptly and efficiently</li>
            <li>Collaborated with cross-functional teams on projects related to analytics initiatives</li>
            <li>Created plans to propose solutions to problems related to efficiency, costs or profits</li>
            <li>Evaluated needs of departments and delegated tasks to optimize overall production</li>
            <li>Utilized a document management system to organize company files, ensuring data is up-to-date</li>
            <li>Prioritized and organized tasks to efficiently accomplish service goals</li>
          </ul>
        </TimelineItem>

        <TimelineItem 
          title="Software Developer" 
          organization="Samcom Technobrains" 
          period="Apr 2022 - Apr 2023"
        >
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>Designed and implemented React components to enhance website functionality and aesthetics</li>
            <li>Adapted to diverse client requirements and delivered effective solutions through clear communication</li>
            <li>Developed a dynamic website using React.js, incorporating various libraries, packages, and React hooks</li>
            <li>Implemented APIs and utilized React.js to build a dynamic website with diverse libraries and packages</li>
          </ul>
        </TimelineItem>

        <TimelineItem 
          title="Business Analyst" 
          organization="Vayak Pvt. Ltd." 
          period="Mar 2021 - Mar 2022"
        >
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>Conducted in-depth research to understand client business objectives and challenges</li>
            <li>Defined business requirements and reported them back to stakeholders</li>
            <li>Customized presentations to address specific client needs and pain points</li>
            <li>Demonstrated comprehensive understanding of product features and functionalities</li>
            <li>Showcased the team's expertise in quickly addressing and resolving technical issues</li>
            <li>Analyzed existing systems and processes to identify areas of improvement</li>
          </ul>
        </TimelineItem>
      </div>
    </section>
  );
}
