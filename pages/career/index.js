
import { motion } from 'framer-motion'
import CareerData from '../../data/career';
import CareerList from '../../components/CareerList';
import { Box } from '../../components/Common';
import { Theme } from '../../components/Theme'

const Career = () => (
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
      <CareerList items={CareerData} />
    </motion.div>
  </Box>
)

export default Career