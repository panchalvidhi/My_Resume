import { useRef, useEffect } from "react";





export default function AwardsSection() {
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

  return (
    <section
      ref={sectionRef}
      id="awards"
      className="section awards-section fade-in-up"
    >
      <h2 className="section-title text-gradient-gold flex items-center">
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        </span>
        Honors & Awards
      </h2>

      <div className="award-container relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 border border-gold shadow-glow-gold">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Award Description */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-amber-300">
                Employee of the Year 2024
              </h3>
              <p className="text-gray-300 flex items-center">
                Innodel Technologies
              </p>
            </div>

            <div className="prose prose-invert">
              <p>
                Recognized for outstanding contributions to product development
                and team leadership. This prestigious award acknowledges
                exceptional performance, dedication, and innovative thinking
                throughout the year.
              </p>
              <ul className="text-gray-300">
                <li>Led the successful delivery of 3 major client projects</li>
                <li>
                  Implemented process improvements resulting in 30% efficiency
                  gains
                </li>
                <li>
                  Mentored junior developers and fostered a collaborative team
                  culture
                </li>
              </ul>
            </div>
          </div>

          {/* Award Trophy Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square w-full max-w-[300px] overflow-hidden rounded-lg">
                <img
                  src="https://media.licdn.com/dms/image/v2/D562DAQHmtaOOvPqsNg/profile-treasury-image-shrink_1280_1280/B56ZTy9zcYHQAU-/0/1739243130276?e=1744722000&v=beta&t=BYZwx4aYUSthZT9MWenpn4TuL9wAinh-FGNd3eAGT_8"
                  alt="Employee of the Year Trophy - Vidhi Panchal"
                  className="w-full h-full object-contain"
                  style={{ maxHeight: "300px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 text-center">
                  <div className="inline-block bg-amber-500 text-gray-900 text-xs font-bold px-2 py-1 rounded">
                    April 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated star background effect */}
        <div className="rotating-star absolute top-10 right-10 -z-10"></div>
        <div
          className="rotating-star absolute bottom-10 left-10 -z-10"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>
    </section>
  );
}
