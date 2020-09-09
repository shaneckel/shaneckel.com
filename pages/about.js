import { motion } from 'framer-motion'
import { Box } from '../components/Common'
import { Theme } from '../components/Theme'

const postVariants = {
  initial: { y: 5, opacity: 0 },
  enter: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { y: 5, opacity: 0,  transition: { duration: 0.25 }
  }
}

const About = () => (
  <Box        
    maxWidth={Theme.Breakpoints.md}
    m='auto'
  >    
    <motion.div       
      initial="initial"
      animate="enter"
      exit="exit"
      variants={Theme.transition.default}
    >
      <p>About</p>
    </motion.div>
  </Box>
)

export default About