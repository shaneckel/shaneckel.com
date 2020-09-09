/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { motion } from 'framer-motion'
import { Text, Box, Image } from './Common'
import Link from 'next/link'
import { Theme } from './Theme'

const FrontCard = (props) => {
  const { image, url, urlas, info } = props
  return (
    <Link 
      href={url} 
      as={urlas}
    >
      <Box 
        flex='1 0 40%' 
        width={[1, 1, null, 1/2]} 
        bg='background'
        m={[0, null, null, 4]}
        mb={[4, 4, 4, null]}
        pb={[5, 4, null]}
        css={css`cursor: pointer;`}
      >
        <a>
          <motion.div 
            whileHover="hover" 
            variants={Theme.transition.hover}
            >
            <Image
              boxShadow={Theme.shadow.main} 
              src={image}
              borderRadius={['16px', 0, 0, '16px' ]}
            />
          </motion.div>
          <Text fontSize={0}>{info}</Text>
        </a>
      </Box>
    </Link>
  )
}

export default FrontCard