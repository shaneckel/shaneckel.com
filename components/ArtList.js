import { css, jsx } from '@emotion/react'
import { motion } from 'framer-motion'
import { Text, Box, ImageContainer, Flex } from './Common'
import { Theme } from './Theme'
import Link from 'next/link'

const ArtList = ({ items }) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Flex 
        display={['block', 'flex', 'flex']}
        maxWidth={Theme.Breakpoints.lg}
        m='auto'
        flexWrap='wrap'
      >
        {items.map((item, idx) => {
          
          return (
            <Link 
              key={idx}
              href={`/artwork/${item.id}`}
              as={`/artwork/${item.id}`}
            >
              <Box 
                flex='1 0 40%' 
                width={[1, 1, 1, 1/2]} 
                bg='background'
                m={[0, 2, 3, 4]}
                mb={[4, 4, 4, null]}
                pb={[1, 4, null]}
                style={{
                  'cursor': 'pointer'
                }}
              >
                <a>
                  <motion.div 
                    whileHover="hover" 
                    variants={Theme.transition.hover}
                    >
                    <ImageContainer
                      src={require(`../public/images/art/art_${item.id}s.jpg`)}
                      className='image-styles'
                      priority={(idx < 4) ? true : false }
                    />
                  </motion.div>
                  <Text fontSize={0}>{item.title}</Text>
                </a>
              </Box>
            </Link>
          )
        })}
      </Flex>
    </motion.div>
  )
}

export default ArtList