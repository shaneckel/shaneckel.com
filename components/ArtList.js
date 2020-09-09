/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { motion } from 'framer-motion'
import { Text, Box, Image, Flex } from './Common'
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
        display={['block', 'flex']}
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
                width={[1, 1, null, 1/2]} 
                bg='background'
                m={[0, null, null, 4]}
                mb={[4, 4, 4, null]}
                pb={[1, 4, null]}
                css={css`cursor: pointer;`}
              >
                <a>
                  <motion.div 
                    whileHover="hover" 
                    variants={Theme.transition.hover}
                    >
                    <Image
                      src={`/images/art/art_${item.id}s.jpg`}
                      boxShadow={Theme.shadow.main} 
                      borderRadius={['16px', 0, 0, '16px' ]}
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