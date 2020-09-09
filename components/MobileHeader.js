/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useState, useRef } from 'react';
import NavLinks from './Nav-links'
import { Box, Text } from './Common'
import Burger from './Burger'
import { useOnClickOutside } from '../hooks';
import Link from 'next/link'
import { Theme } from './Theme';

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <Box 
        position='fixed'
        top={3}
        right={1}
        zIndex={20}
      >
        <Burger open={open} setOpen={setOpen} />
      </Box>
      <Link href='/'>
        <Text 
          fontSize={2} 
          pt={2} 
          as='h1'
          css={css`
            cursor: pointer;
            width: 80px;
            &:hover{
              color ${Theme.colors.link}
            }
          `}
        >
          shane.
        </Text>
      </Link>
      <NavLinks open={open} setOpen={setOpen}  />
    </div>
  )
}

export default Header;
