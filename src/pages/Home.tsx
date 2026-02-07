import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from '../assets/images/jacob-2025-cropped.png';

const Home = () => {
  return (
    <div className="space-y-12">
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-48 h-48 rounded-2xl overflow-hidden bg-gray-200 flex-shrink-0"
        >
          <img 
            src={profileImg} 
            alt="Jacob Meksavanh" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Hi, I'm <span className="text-blue-600">Jacob Meksavanh</span>
          </h1>
          <div className="text-xl text-gray-600 max-w-lg space-y-4 leading-relaxed">
            <p>
              Honours Bachelor of <span className="text-gray-900 font-medium">Computer Science</span> graduate from the University of Waterloo (Dean's Honours List).
            </p>
            <p>
              Currently a Software Developer at <span className="text-blue-600 font-semibold">Geotab</span>, 
              focusing on driver safety and big-data analysis.
            </p>
            <p>
              I've lived and worked in Japan and hold a <span className="text-gray-900 font-medium">Certificate in Japanese Language II</span> from the University of Waterloo. I'm always down to talk about music and K-pop!
            </p>
          </div>
          
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://github.com/royaljuggy" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-200 shadow-sm">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/jacob-meksavanh" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-200 shadow-sm">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:jmeksava@uwaterloo.ca" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-200 shadow-sm">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
        <div className="p-6 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Software Dev
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">C#, React, and PostgreSQL. Working on massive fleet datasets and driver safety metrics.</p>
        </div>
        <div className="p-6 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-600" />
            Education
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">BCS Honours (Dean's Honours). Also earned a Certificate in Japanese Language II from UWaterloo.</p>
        </div>
        <div className="p-6 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-600" />
            Media & Blog
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">I write about Anime, K-pop, and tech. Top 3k Spotify listener for NMIXX in 2025.</p>
        </div>
      </section>

      <section className="space-y-8 pt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Skills & Expertise</h2>
            <p className="text-gray-500">A technical snapshot for recruiters and teams.</p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-100">Full-Stack</span>
            <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full border border-purple-100">Big Data</span>
            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-100">Cloud</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Languages */}
          <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {['C#', 'C++', 'Python', 'Java', 'Kotlin', 'TypeScript', 'SQL'].map(skill => (
                <span key={skill} className="px-2 py-1 bg-white rounded-lg text-sm font-medium border border-gray-200 shadow-sm">{skill}</span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400">Frameworks</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Angular', '.NET', 'Flask', 'Spring Boot', 'Spark'].map(skill => (
                <span key={skill} className="px-2 py-1 bg-white rounded-lg text-sm font-medium border border-gray-200 shadow-sm">{skill}</span>
              ))}
            </div>
          </div>

          {/* Infrastructure */}
          <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400">Tools & Cloud</h4>
            <div className="flex flex-wrap gap-2">
              {['Azure', 'GCP', 'PostgreSQL', 'BigQuery', 'Docker', 'Git', 'Linux', 'Claude / Gemini', 'PerfView'].map(skill => (
                <span key={skill} className="px-2 py-1 bg-white rounded-lg text-sm font-medium border border-gray-200 shadow-sm">{skill}</span>
              ))}
            </div>
          </div>

          {/* Professional */}
          <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400">Professional</h4>
            <div className="flex flex-wrap gap-2">
              {['Root-Cause Troubleshooting', '.NET Tracing', 'TDD/BDD', 'CI/CD', 'OOP', 'Agile', 'Japanese'].map(skill => (
                <span key={skill} className="px-2 py-1 bg-white rounded-lg text-sm font-medium border border-gray-200 shadow-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Interested in working together?</h2>
          <p className="text-blue-100">Feel free to reach out via email or LinkedIn!</p>
        </div>
        <a 
          href="mailto:jmeksava@uwaterloo.ca"
          className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center gap-2"
        >
          Get in Touch <ExternalLink className="w-4 h-4" />
        </a>
      </section>
    </div>
  );
};

export default Home;
