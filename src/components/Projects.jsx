import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'BUILDHUB',
      description: 'A comprehensive construction service platform that connects clients with construction professionals. Features role-based authentication, project coordination tools, and real-time communication between stakeholders.',
      technologies: ['PHP', 'MySQL', 'React', 'CSS3', 'JavaScript'],
      features: [
        'Role-based login system (Clients, Contractors, Admins)',
        'Project management and coordination tools',
        'Real-time messaging and notifications',
        'Service provider directory and ratings',
        'Project timeline and milestone tracking'
      ],
      type: 'Full-Stack Web Application',
      status: 'Production Ready'
    }
  ]

  return (
    <section id="projects" className="py-20 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card mb-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <h3 className="text-2xl font-bold text-gradient">{project.title}</h3>
                      <span className="px-3 py-1 bg-green-600/20 text-green-400 text-sm rounded-full border border-green-600/30">
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-dark-400 text-sm mb-3 font-medium">{project.type}</p>
                    
                    <p className="text-dark-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-blue-400">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                            <span className="text-dark-300">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-purple-400">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: techIndex * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-dark-700 text-dark-200 rounded-lg text-sm font-medium border border-dark-600 hover:border-dark-500 transition-colors duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-dark-400 mb-6">
              More projects coming soon. I focus on building real, impactful applications that solve genuine problems.
            </p>
            <motion.a
              href="https://github.com/shijin-alpha"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View GitHub Profile
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects