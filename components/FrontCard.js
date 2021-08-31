import { css, jsx } from '@emotion/react'
import { motion } from 'framer-motion'
import { Text, Box, ImageContainer } from './Common'
import Link from 'next/link'
import { Theme } from './Theme'
import { borderRadius } from 'styled-system'

const FrontCard = (props) => {
  const { image, url, urlas, info } = props
  return (
    <Link 
      href={url} 
      as={urlas}
    >
      <Box 
        flex='1 0 40%' 
        width={[1, 1, 1, 1/2]} 
        bg='background'
        m={[0, null, 2, 4]}
        mb={[4, 4, 4, null]}
        pb={[5, 4, null]}
        css={css`cursor: pointer;`}
      >
        <a>
          <motion.div 
            whileHover="hover" 
            variants={Theme.transition.hover}
          >
            <ImageContainer
              src={`/images/${image}`}
              width='700'
              height='551'
              className='image-styles'
              priority={props.priority || 'false'}
            />
          </motion.div>
          <Text fontSize={0}>{info}</Text>
        </a>
      </Box>
    </Link>
  )
}

export default FrontCard