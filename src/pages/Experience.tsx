import { MapPin, Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Tech Innovators Inc.',
    role: 'Senior Software Engineer',
    tenure: 'Jan 2024 - Present',
    location: 'San Francisco, CA (Remote)',
    stack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    duties: [
      'Led the development of a flagship SaaS platform, improving performance by 40%.',
      'Mentored junior developers and established best practices for code reviews.',
      'Architected a microservices-based system to handle 1M+ daily active users.',
    ],
  },
  {
    company: 'Startup Hub',
    role: 'Full Stack Developer',
    tenure: 'June 2022 - Dec 2023',
    location: 'New York, NY',
    stack: ['Vue.js', 'Python', 'Django', 'Redis'],
    duties: [
      'Built and maintained several client-facing applications from scratch.',
      'Implemented real-time features using WebSockets and Redis.',
      'Collaborated with designers to ensure high-fidelity UI/UX implementation.',
    ],
  },
  {
    company: 'Junior Dev Corps',
    role: 'Software Engineer Intern',
    tenure: 'May 2021 - Aug 2021',
    location: 'Austin, TX',
    stack: ['JavaScript', 'HTML/CSS', 'Express'],
    duties: [
      'Assisted in fixing critical bugs and improving internal tooling.',
      'Wrote comprehensive unit tests, increasing coverage by 25%.',
      'Developed a dashboard for monitoring API health.',
    ],
  },
];

const Experience = () => {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Professional Experience</h1>
        <p className="text-xl text-gray-500">My journey through the tech industry.</p>
      </header>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Briefcase className="w-5 h-5" />
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col mb-4">
                <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                <span className="text-blue-600 font-medium">{exp.company}</span>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {exp.tenure}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Key Responsibilities</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                  {exp.duties.map((duty, i) => (
                    <li key={i}>{duty}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
