import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'text-blue-400',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Backend',
      color: 'text-purple-400',
      skills: ['Node.js', 'Express.js', 'PHP', 'MySQL', 'RESTful APIs', 'Database Design']
    },
    {
      title: 'Tools & Technologies',
      color: 'text-green-400',
      skills: ['Git', 'Docker', 'Render', 'Vite', 'npm/yarn', 'Linux']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="skills" className="py-20 section-padding bg-dark-900/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="card"
              >
                <h3 className={`text-xl font-semibold mb-6 ${category.color}`}>
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-dark-800/30 hover:bg-dark-700/30 transition-colors duration-200"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                        category.color.includes('blue') ? 'from-blue-400 to-blue-600' :
                        category.color.includes('purple') ? 'from-purple-400 to-purple-600' :
                        'from-green-400 to-green-600'
                      }`} />
                      <span className="text-dark-200 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills