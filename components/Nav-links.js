/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import ActiveLink from './ActiveLink'
import { Flex, Box, A } from './Common'
import { useEffect, useRef, useState } from 'react'

const links = [
  // ['about', '/about' ],
  ['artwork', '/artwork' ],
  // ['photo', '/photos' ],
  ['career', '/career' ],
  // ['writing', '/writing' ],
]

export default ({ open, setOpen, ...props }) => {
  const navigationBox = useRef(null)
  const [navHeight, setNavHeight] = useState(500);

  useEffect( () => {
    if(navigationBox.current && navigationBox.current > 500) {
      setNavHeight(navigationBox.current.offsetHeight)
    }
  }, [navigationBox]);
  
  return (
    <Flex 
      {...props}
      ref={navigationBox}
      open={open} 
      display={[ 'block', 'flex'] } 
      alignItems="center" 
      width={['100%', 2/3]}
      p={[0, 2]}
      pt={[6, null]}
      pb={[6, null]}
      zIndex='0'
      position={['fixed', 'inherit']}
      left='0'
      bg={['red', 'inherit']}
      top={[open ? '0': `-${navHeight}px`, null]}
      css={css`
        transition: all 500ms ease;
      `}
    >
      {       
        links.map((link, idx) => {
          return (
            <Box 
              key={idx} 
              fontSize={[3, 0]}
              p={[4, null]}
              flex='1' 
              textAlign={['center', 'right']}
            >
              <ActiveLink 
                activeClassName="active" 
                href={link[1]}
              >
                <A 
                  onClick={() => setOpen ? setOpen(!open) : null }
                  as="a" 
                  href="" 
                  p={[3, 0]}
                  width="100%"
                  css={css`
                    &.active {
                      font-weight: 900;
                    }
                  `}    
                >
                  {link[0]}
                </A>
              </ActiveLink>
            </Box>
          )
        })
      }
      <Box 
        flex='1' 
        pt={[4, 0]}
        width={['100%', '25px']} 
        textAlign={['center', 'right']}
      >
        <a href="https://webring.xxiivv.com/#random" target="_blank">
          <img     
            css={css`
              width: 22px;
              height: 22px;
              padding-top: 6px;
            `}      
            src="https://webring.xxiivv.com/icon.white.svg" 
          />
        </a>
      </Box>

    </Flex>
  )
}