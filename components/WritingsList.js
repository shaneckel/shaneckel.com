import { css, jsx } from '@emotion/react'
import Link from 'next/link'
import { RichText, Date } from 'prismic-reactjs'
import { Text, Box } from '../components/Common'
import { format } from 'date-fns'
import { Theme } from '../components/Theme'
import { AnimatePresence, motion } from 'framer-motion'

const WritingsList = ({writings, page}) => {
  const pageNum = page || 1

  return (
    <motion.div       
      animation="enter"
      exit="exit"
      variants={Theme.transition.list}
      key={pageNum}
    >
    {
    writings.map((post, idx) => {
      return (
        post.data.single 
          ? (
            <Box p='4' mt='4' key={idx}>
              <Text mb='2' mt='0' as='p' fontSize={3}>"{RichText.asText(post.data.title)}"</Text>
              <Text fontSize={0}>{format(new Date(Date(post.data.date).toString()), 'MMMM do, yyyy')}</Text>
            </Box>           
          ):(
            <motion.div 
              whileHover="hover" 
              variants={Theme.transition.soft_hover}
              key={idx}
            >
              <Link href={`/writing/[write]?p=${pageNum}`} as={`/writing/${post.uid}?p=${pageNum}`}> 
                <Box
                  borderRadius='6px'
                  bg='text'
                  p='4'
                  color='background'
                  mt='4'
                  css={css`
                    cursor: pointer;
                    &:hover {
                      background: ${Theme.colors.background_light};
                    }
                  `}
                >
                  <Text mb='2' mt='0' as='h4'>{RichText.asText(post.data.title)}</Text>
                  <Text fontSize={0}>{format(new Date(Date(post.data.date).toString()), 'MMMM do, yyyy')}</Text>
                </Box>          
              </Link>
            </motion.div>
          ) 
      )
    })
    }
    </motion.div>
  )
}

export default WritingsList
