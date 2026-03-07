import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <section className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Education</h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          My academic journey, certifications, and the clubs that shaped my university and high school experience.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* University Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-blue-600">
            <GraduationCap className="w-6 h-6" />
            <h2 className="text-2xl font-bold">University</h2>
          </div>
          <div className="p-6 rounded-3xl border border-gray-200 bg-white shadow-sm space-y-4">
            <div>
              <h3 className="font-bold text-xl">University of Waterloo</h3>
              <p className="text-sm text-gray-400 font-bold mb-1">2020 - 2025</p>
              <p className="text-gray-600 font-medium">Honours Bachelor of Computer Science</p>
              <p className="text-sm text-blue-600 font-semibold italic">Co-operative Program</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400">Certificates & Awards</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li className="font-medium text-gray-900">
                  <a 
                    href="https://uwaterloo.ca/math/class-winter-2025" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 underline decoration-blue-200 underline-offset-4 transition-colors"
                  >
                    Dean's Honours List
                  </a>
                </li>
                <li>Diploma in Japanese Language II (3.0 credits)</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Object-Oriented Programming', 'Data Structures', 'Algorithms', 
                  'Operating Systems', 'Application Development', 'Japanese', 
                  'Numerical Computation', 'Database Management', 
                  'Data-Intensive Distributed Computing', 'Machine Learning', 
                  'Artificial Intelligence', 'Neural Networks'
                ].map(course => (
                  <span key={course} className="px-2 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold rounded-lg border border-blue-100">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* High School Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-emerald-600">
            <BookOpen className="w-6 h-6" />
            <h2 className="text-2xl font-bold">High School</h2>
          </div>
          <div className="p-6 rounded-3xl border border-gray-200 bg-white shadow-sm space-y-4">
            <div>
              <h3 className="font-bold text-xl">Mississauga Secondary School</h3>
              <p className="text-sm text-gray-400 font-bold mb-1">2016 - 2020</p>
              <p className="text-gray-600 font-medium">Ontario Secondary School Diploma</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400">Certificates & Awards</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li className="font-medium text-gray-900">Schulich Leader Scholarship Nominee</li>
                <li>Waterloo Admission Average: <span className="text-emerald-600 font-bold">97.83%</span></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400">Key Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Computer Science (ICS4U)', 'Advanced Functions (MHF4U)', 
                  'Calculus (MCV4U)', 'Data Management (MDM4U)', 
                  'Physics (SPH4U)', 'Chemistry (SCH4U)', 
                  'Economics (CIA4U)', 'French (FSF3U)'
                ].map(course => (
                  <span key={course} className="px-2 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-lg border border-emerald-100">
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400">Clubs & Extracurriculars</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>
                  <span className="font-medium text-gray-900">Curling (4 Years):</span> 3x ROPSSAA Gold Medalist; 2x OFSAA Qualifier.
                </li>
                <li>
                  <span className="font-medium text-gray-900">DECA (3 Years):</span> 2x Provincial Qualifier.
                </li>
                <li>
                  <span className="font-medium text-gray-900">Math Club:</span> Top 25% in all Waterloo Math Contests (Pascal, Cayley, Fermat, Euclid).
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Education;
