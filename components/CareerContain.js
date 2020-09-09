import React from 'react'
import { motion } from 'framer-motion'
import { Theme } from './Theme'
import { Box } from './Common'

const CareerContain = ({ children }) => { 
  return (
    <Box        
      m='auto'
    >
      <motion.div       
        initial="initial"
        animate="enter"
        exit="exit"
        variants={Theme.transition.default}
      >
        {children}
      </motion.div>
    </Box>
  )
}

export default CareerContain