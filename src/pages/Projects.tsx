import { Github, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with real-time inventory management and secure payment processing.',
    image: 'https://via.placeholder.com/600x400',
    tags: ['React', 'Stripe', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'AI Chat Assistant',
    description: 'A custom LLM interface with support for multiple personas and persistent conversation history.',
    image: 'https://via.placeholder.com/600x400',
    tags: ['OpenAI API', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Portfolio Engine',
    description: 'A lightweight framework for developers to generate stunning personal websites in minutes.',
    image: 'https://via.placeholder.com/600x400',
    tags: ['TypeScript', 'Vite', 'Framer Motion'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Weather Visualizer',
    description: 'Beautiful 3D visualizations of global weather patterns using WebGL and open-source data.',
    image: 'https://via.placeholder.com/600x400',
    tags: ['Three.js', 'React', 'OpenWeatherMap'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

const Projects = () => {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Personal Projects</h1>
        <p className="text-xl text-gray-500">A collection of things I've built to explore new technologies.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="aspect-video w-full overflow-hidden bg-gray-100">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <div className="flex gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
                {project.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    <Code2 className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
