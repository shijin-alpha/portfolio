import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-dark-300 mb-6 leading-relaxed">
                I'm a passionate Full-Stack Developer with experience in building real-world web applications 
                that solve actual problems. My approach focuses on creating scalable solutions with clean, 
                maintainable code and structured workflows.
              </p>
              
              <p className="text-lg text-dark-300 mb-6 leading-relaxed">
                I specialize in modern web technologies and have hands-on experience developing complete 
                platforms from concept to deployment. My work emphasizes clean backend logic, intuitive 
                user interfaces, and robust system architecture.
              </p>
              
              <p className="text-lg text-dark-300 leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to open-source projects, 
                and continuously learning to stay at the forefront of web development.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="card">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Frontend Development</h3>
                <p className="text-dark-300">
                  Creating responsive, interactive user interfaces with React, modern CSS, and performance optimization.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Backend Development</h3>
                <p className="text-dark-300">
                  Building robust server-side applications with Node.js, Express, PHP, and database management.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold mb-3 text-green-400">System Architecture</h3>
                <p className="text-dark-300">
                  Designing scalable system architectures with clean code principles and efficient workflows.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About