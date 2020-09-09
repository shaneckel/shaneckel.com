import { motion } from 'framer-motion'
import ArtData from '../../data/art';
import ArtList from '../../components/ArtList';
import { Box } from '../../components/Common'
import { Theme } from '../../components/Theme'

const Artwork = () => (
  <Box        
    maxWidth={Theme.Breakpoints.lg}
    m='auto'
  >    
    <motion.div       
      initial="initial"
      animate="enter"
      exit="exit"
      variants={Theme.transition.default}
    >
      <ArtList items={ArtData} />
    </motion.div>
  </Box>
)

export default Artwork