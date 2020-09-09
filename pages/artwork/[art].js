/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Link from 'next/link'
import ArtData from '../../data/art'
import { motion } from 'framer-motion'
import { Box, Flex, Text, Image } from '../../components/Common'
import { Theme } from '../../components/Theme'

const Art = ({ art }) => {
  return art.title === 'sketchbook' 
  ? 
  (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={Theme.transition.default}
    >
        <Box 
          m={[0, null, null, 4]}
          mb={[4, 4, 4, null]}
          pb={[1, 4, null]}             
          fontSize={[2, 1, 1, 2]}
          maxWidth={Theme.Breakpoints.md}
          m='auto'
        >
          <Text mt='0' pt={2} borderTop='1px solid' as='h3'>Sketchbook</Text>
          <Text as='p' fontSize={0}>(2004 - 2020)</Text>
          <Text as='p' fontSize={0}>Spending most of your time sketching with pencil and then working with paint doesn't offer a lot of lessons on permanence and absolution. Even with computer work the concept of permanence was manufactured by freezing state periodically. In order to work on permanence I decided to carry a sketchbook for ink renderings only. Spending hours on or waiting for a bus, waiting on customers or after prep at a kitchen, or really any available time is used to render a unique and permanent concept.</Text>
          <Text as='p' fontSize={0}>If you find yourself with time, do yourself a favor and look up any Van Gogh work done with a reed pen, quill, and ink. If I ever do have time to research technique, it would just be looking through his sketchbooks. Another thing I found myself doing is destroying or marking points of emphasis. Taking a portion of the work that is integral to the continuity and putting a big box or mark over it. It's cathartic and permanent. Something that can be hard to find in modern editable temporary times. </Text>
          <Text as='p' fontSize={0}>The subject matter varies. Trying to find a a mapping between personal subjectivity and objectively accurate representation. I'm not holding onto objectivity, but the nature of the medium forces your hand to decide.  It could be a smiling face I saw walking to work. It could be something from my childhood that echos into my adulthood. It could simply be a reaction to a line that is visually appealing. The story unfolds with every shape and mark I put down. Some of these renderings are living breathing ideas and stories full of drama and life that I could explore for hours... but the bus is here.</Text>
        </Box>
        <Flex 
          display={['block', 'flex']}
          maxWidth={Theme.Breakpoints.lg}
          m='auto'
          flexWrap='wrap'
        >
          {
            Array(22).fill().map((_, idx) => {
              return(
                <Box 
                  key={idx}
                  fontSize='0px'
                  flex='1 0 40%' 
                  width={[1, 1, null, 1/2]} 
                  bg='background'
                  m={[0, null, null, 2]}
                  mb={[1, 2, 2, null]}
                  pb={[1, 2, null]}
                >
                  <Image
                    src={`/images/sketch/${idx}.jpg`}
                  />
                </Box>
              )
           })
          }   

        </Flex>
      
    </motion.div>
  )
  : 
  (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={Theme.transition.default}
    >
      <Box
        maxWidth={Theme.Breakpoints.md}
        m='auto' 
        pb={3}
      >
        <Link href='/artwork'><Text fontSize={0} href='/artwork' as='a'>{`< back`}</Text></Link>
      </Box>
      <Flex 
        display={['block', 'flex']}
        maxWidth={Theme.Breakpoints.md}
        m='auto'
        flexWrap='wrap'
      >
        <Box 
          flex='1 0 40%' 
          width={[1, 1, null, 1/2]} 
          p={0}
          fontSize={[2, 0, 1, 2]}
        >
          <Text mt='0' pt={2} borderTop='1px solid' as='h3'>{art.title}</Text>
          <Text as='p' fontSize={0}>({art.date})</Text>
          <Text as='p' fontSize={0}>{art.description}</Text>
        </Box>
        <Box 
          fontSize='0px'
          flex='1 0 40%' 
          width={[1, 1, null, 1/2]} 
          bg='background'
          mb={[4, 3]}
          pl={[0, '8px']}
        >
          <Image
            src={`/images/art/art_${art.id}w.jpg`}
          />
        </Box>
      </Flex>
      <Flex 
        display={['block', 'flex']}
        maxWidth={Theme.Breakpoints.md}
        m='auto'
        flexWrap='wrap'
      >
        <Box 
          fontSize='0px'
          flex='1 0 40%' 
          width={[1, 1, null, 1/2]} 
          bg='background'
          mb={[4, 3]}
          mr={[0, '4px']}
        > 
          <Image src={`/images/art/art_${art.id}ma.jpg`} />
        </Box>
        <Box 
          fontSize='0px'
          flex='1 0 40%' 
          width={[1, 1, null, 1/2]} 
          bg='background'
          mb={[4, 3]}
          ml={[0, '4px']}
        > 
          <Image src={`/images/art/art_${art.id}mb.jpg`} />
        </Box>
      </Flex>
      <Box>
        <Box 
          maxWidth={Theme.Breakpoints.md}
          bg='background'
          m='auto'
        >
          <Image src={`/images/art/art_${art.id}l.jpg`} />
        </Box>
      </Box>
      <Flex 
        display='flex'
        maxWidth={Theme.Breakpoints.md}
        m='auto'
        pb={3}
        borderTop='1px solid'
        mt={3}
      >
        <Box 
          flex='50%' 
          width={1/2} 
        > 
          <Link href={`/artwork/${art.id === 1 ? ArtData.length : art.id - 1 }`}><Text fontSize={0} href='/artwork' as='a'>{`< prev`}</Text></Link>
        </Box>
        <Box 
          flex='50%' 
          width={1/2} 
          textAlign='right'
        > 
          <Link href={`/artwork/${ArtData.length === art.id ? 1 : art.id + 1 }`}><Text fontSize={0} href='/artwork' as='a'>{`next >`}</Text></Link>
        </Box>
      </Flex>
    </motion.div>
  )
};

Art.getInitialProps = ({ query }) => {
  let art = ArtData.find(art => art.id == query.art)
  return { art }
}

export default Art;