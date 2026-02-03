import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

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
            src="https://via.placeholder.com/200" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Hi, I'm <span className="text-blue-600">Jacob Meksavanh</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-lg">
            Software Engineer and University of Waterloo graduate (Honours Bachelor of Computer Science). 
            I am dedicated to building elegant, user-centric solutions and turning complex 
            problems into simple, beautiful experiences.
          </p>
          
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://github.com/royaljuggy" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/jacob-meksavanh/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:jacob.meksavanh@gmail.com" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
        <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg mb-2">Technical Skills</h3>
          <p className="text-sm text-gray-500">Full-stack development, modern web frameworks, and cloud-native architecture.</p>
        </div>
        <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg mb-2">Education</h3>
          <p className="text-sm text-gray-500">BCS Honours, University of Waterloo. Focused on software engineering and algorithms.</p>
        </div>
        <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg mb-2">Current Interests</h3>
          <p className="text-sm text-gray-500">Exploring AI-driven development, distributed systems, and creative photography.</p>
        </div>
      </section>
      
      <section className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Interested in working together?</h2>
          <p className="text-blue-100">Let's build something amazing together.</p>
        </div>
        <a 
          href="mailto:jacob.meksavanh@gmail.com"
          className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center gap-2"
        >
          Get in Touch <ExternalLink className="w-4 h-4" />
        </a>
      </section>
    </div>
  );
};

export default Home;
