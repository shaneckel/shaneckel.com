import { css, jsx } from '@emotion/react'
import NavLinks from './Nav-links'
import { Text, Flex, Box} from './Common'
import Link from 'next/link';
import { Theme } from './Theme';
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <Flex display={[ 'block', 'flex'] }>
      <Box 
        width={3/4}
      >
        <Link href='/'>
          <Text 
            fontSize={[ 0, 1  ]}
            mt={[ 3, 4]} 
            mb={[ 3, 4]} 
            as="h1"
            style={{
              'cursor': 'pointer',
              'width': '62px'
            }}
          >
            shane.
          </Text>
        </Link>
      </Box>
      <NavLinks />
    </Flex>
  )
}
export default Header
