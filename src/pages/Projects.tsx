import { Github, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Personal Portfolio 2026',
    description: 'A modern, responsive personal portfolio built with React 19 and Tailwind CSS v4. Features a custom Bento Grid, interactive timeline, and seamless animations.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600&h=400',
    tags: ['React 19', 'Tailwind CSS v4', 'Vite', 'Framer Motion'],
    github: 'https://github.com/royaljuggy/personal-website-2026',
    demo: 'https://royaljuggy.github.io',
  },
  {
    title: 'Anime & Media Blog',
    description: 'A passion project dedicated to in-depth, human-written reviews and analysis of anime and media. Features detailed breakdowns of story, animation, and music.',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&q=80&w=600&h=400',
    tags: ['Markdown', 'GitHub', 'Writing', 'Media Analysis'],
    github: 'https://github.com/royaljuggy/blogs',
    demo: 'https://royaljuggy.github.io/blogs/',
  },
  {
    title: 'Japan Internship Blog',
    description: 'A personal blog built with React and Markdown to document my 8-month internship in Tokyo. It covers everything from cultural shocks to travel stories.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=600&h=400',
    tags: ['React', 'Markdown', 'Bootstrap', 'GitHub Actions'],
    github: 'https://github.com/royaljuggy/internship-in-japan',
    demo: 'https://royaljuggy.github.io/internship-in-japan',
  },
  {
    title: 'TODO List',
    description: 'A layered architecture TODO application built for undergraduate coursework. Features automated CI/CD and data persistence. Achieved a 96% grade.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=600&h=400',
    tags: ['Kotlin', 'Spring Boot', 'MySQL', 'GitLab CI/CD', 'JUnit'],
    github: 'https://git.uwaterloo.ca/',
    demo: 'https://git.uwaterloo.ca/',
  },
  {
    title: 'Recipe Directory',
    description: 'A full-stack recipe management application created for undergraduate coursework. Focuses on React routing, session tokens, and dynamic API integration. Achieved a 98% grade.',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=600&h=400',
    tags: ['React', 'Flask', 'MySQL', 'REST API', 'JavaScript'],
    github: 'https://git.uwaterloo.ca/',
    demo: 'https://git.uwaterloo.ca/',
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
