import { motion } from 'framer-motion'

const Contact = () => {
  const contactLinks = [
    {
      label: 'Email',
      value: 'shijinthomas1501@gmail.com',
      href: 'mailto:shijinthomas1501@gmail.com',
      icon: '✉️'
    },
    {
      label: 'GitHub',
      value: 'github.com/shijin-alpha',
      href: 'https://github.com/shijin-alpha',
      icon: '🔗'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/shijin-thomas',
      href: 'https://linkedin.com/in/shijin-thomas',
      icon: '💼'
    }
  ]

  return (
    <section id="contact" className="py-20 section-padding bg-dark-900/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          
          <p className="text-lg text-dark-300 mb-12 leading-relaxed">
            I'm always interested in discussing new opportunities, collaborating on projects, 
            or simply connecting with fellow developers. Feel free to reach out!
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card text-center group hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {link.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{link.label}</h3>
                <p className="text-dark-300 text-sm font-mono break-all">{link.value}</p>
              </motion.a>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-dark-800"
          >
            <p className="text-dark-400 text-sm">
              © 2024 Shijin Thomas. Built with React & Tailwind CSS.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact