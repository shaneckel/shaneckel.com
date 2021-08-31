import { css, jsx } from '@emotion/react'
import DeskHeader from './DeskHeader';
import MobileHeader from './MobileHeader';
import { useEffect, useState } from 'react'
import Break from './Break'
import { Box, Header, Flex } from './Common'
import { Theme } from './Theme';
import { motion } from 'framer-motion'

const Layout = ({ children }) => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const scrollCallBack = window.addEventListener("scroll", () => {
      window.pageYOffset > 5 ? setShadow(true) : setShadow(false)
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, [shadow]);

  return (
    <>
      <Box 
        position={['inherit','fixed']}
        zIndex='10'
        pt={[null, shadow ? 1 : 5]}
        bg={[null, shadow ? 'background' : 'background']}
        width='100%'
        borderTop='4px solid'
        borderColor='red' 
        boxShadow={[null, shadow ? Theme.shadow.main : null]}
        style={{
          'transition': 'all 380ms ease'
        }}          
      >
        <motion.div       
          initial="initial"
          animate="enter"
          exit="exit"
          variants={Theme.transition.navigation}
          >
          <Header
            maxWidth={Theme.Breakpoints.md} 
            m='auto'
            pl={[4, 5, 6]}
            pr={[4, 5, 6]}
            as='header'
          >
          {
            Break().isMobile 
              ? <MobileHeader />
              : <DeskHeader shadow />
          }
          </Header>
        </motion.div>
      </Box>
      <Box pt={[2, 6]}>
        <Box
          m='auto'
          p={[ 4, 5, 6 ]}
          as='main'
        >
          {children}
        </Box>   
      </Box>
      <Box 
        p={[4, 5, 6]} 
        m='auto'
        as='footer'
      >
        <Flex
          display={['block', 'block', 'flex']}
          maxWidth={Theme.Breakpoints.md}
          m='auto'
          flexWrap='wrap'
        >   
          {/* <Box
            flex='1 0 40%'
            textAlign='left'
            fontSize={0}
          > 
            2020
          </Box> */}
          {/* <Box
            fontSize={0}
            bg='background'
            textAlign={['left', 'left', 'right']}
          >
            github twitter email
          </Box> */}
        </Flex>
      </Box>
    </>
  )
}

export default Layout
