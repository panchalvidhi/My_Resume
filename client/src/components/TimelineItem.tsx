export interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  children: React.ReactNode;
}

export default function TimelineItem({ title, organization, period, children }: TimelineItemProps) {
  return (
    <div className="timeline-item fade-in-up">
      <div className="mb-2">
        <h3 className="text-xl font-medium text-dark">{title}</h3>
        <div className="flex justify-between flex-wrap">
          <p className="text-primary font-medium">{organization}</p>
          <p className="text-gray-500">{period}</p>
        </div>
      </div>
      {children}
    </div>
  );
}
