import { MapPin, Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'GEOTAB',
    role: 'Software Developer',
    tenure: 'Jun 2025 - Present',
    location: 'Waterloo, ON (Hybrid)',
    stack: ['C#', 'React', 'PostgreSQL', 'BigQuery', 'Docker', 'Grafana'],
    duties: [
      'Work on the full-stack for Driver Safety features in MyGeotab using C#, React, and PostgreSQL.',
      'Analyze billions of GO Device records with Postgres, BigQuery, and Grafana to calculate safety scores and identify driving events.',
      'Fix high-priority on-call issues like slow database transactions and GPS calculation errors by analyzing API logs and BigQuery data.',
      'Built a new acceleration model for tracking harsh driving (braking, cornering, speeding) to make events more accurate and reduce false alerts.',
      'Led the logic design for new driving rules during a team testing event at a racetrack.',
      'Added new risk analytics features to the web app so fleet managers can easily see how their employees are driving.',
    ],
  },
  {
    company: 'NN Life',
    role: 'Software Developer Intern',
    tenure: 'May 2024 - Dec 2024',
    location: 'Tokyo, Japan',
    stack: ['Python', 'Flask', 'React', 'SQL', 'Azure', 'Databricks', 'PySpark', 'C#/.NET'],
    duties: [
      'Built and managed an internal dashboard app using Python (Flask) and React, which helped the team stop using expensive third-party tools.',
      'Used Azure, Databricks, and PySpark to launch fast web apps that handle important tasks like insurance policy calculations.',
      'Automated many manual tasks to make things run smoother using Azure Pipelines and Salesforce.',
    ],
  },
  {
    company: 'GEOTAB',
    role: 'Software Developer Intern',
    tenure: 'Jan 2023 - Dec 2023',
    location: 'Waterloo, ON',
    stack: ['C#', '.NET', 'PostgreSQL', 'Linux', 'GCP', 'BigQuery'],
    duties: [
      'Created new features for fleet tracking using C#, .NET, and PostgreSQL on Linux and Google Cloud.',
      'Built a tool to set database connection sizes that helped solve tech support cases for major customers.',
      'Fixed issues with how the system handles messy data records, which cut down on failed retries by 10%.',
      'Helped hire new interns by leading many technical and behavioral interviews.',
    ],
  },
  {
    company: 'Infor',
    role: 'Software Developer Intern',
    tenure: 'May 2022 - Aug 2022',
    location: 'Toronto, ON',
    stack: ['Angular', 'NgRx', 'Java', 'Kotlin', 'SQL', 'TypeScript'],
    duties: [
      'Built features for workforce management software using Angular for the front-end and Java/Kotlin for the back-end.',
      'Used test-driven development (TDD) with JUnit and Jenkins to make sure the code was high quality.',
      'Created a new "Linked Timeline" component that other developers at the company can now use.',
      'Led team meetings and helped the group reach their goals during each two-week work cycle.',
    ],
  },
  {
    company: 'University of Waterloo',
    role: 'Undergraduate Teaching Assistant (MATH116)',
    tenure: 'Sep 2021 - Dec 2021',
    location: 'Waterloo, ON',
    stack: ['Crowdmark', 'Calculus'],
    duties: [
      'Graded Calculus assignments and gave students helpful tips on how to improve using the Crowdmark platform.',
      'Was recognized by the professor for helping other TAs finish their work on time.',
      'Managed my time well to finish grading while also taking five full-time university classes.',
    ],
  },
  {
    company: 'eSolutionsGroup',
    role: 'Website Configuration Specialist Intern',
    tenure: 'May 2021 - Aug 2021',
    location: 'Waterloo, ON (Remote)',
    stack: ['Jira', 'Confluence', 'WCAG', 'CMS'],
    duties: [
      'Used Jira and Confluence to help build and test websites following a step-by-step project plan.',
      'Updated websites to make sure they followed accessibility rules (WCAG) so everyone can use them easily.',
      'Handled several projects at once while working from home with very little supervision.',
      'Wrote simple guides and documents for both my team and our clients to follow.',
    ],
  },
  {
    company: 'Peel District School Board',
    role: 'Camp Explore Leader',
    tenure: 'Jul 2019 - Aug 2019',
    location: 'Mississauga, ON',
    stack: ['Leadership', 'Google Docs', 'Collaboration'],
    duties: [
      'Ran activities for middle schoolers to help them get better at working together and thinking for themselves.',
      'Planned out daily and weekly schedules for the kids using Google Docs.',
      'Watched over students during breaks and helped settle any arguments fairly.',
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
