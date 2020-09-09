
import CareerContainer from '../../components/CareerContain'
import { Box, Text } from '../../components/Common'
import { Theme } from '../../components/Theme'

const Superior = () => (
  <CareerContainer>
    <Box 
      m={[0, null, null, 4]}
      mb={[4, 4, 4, null]}
      pb={[1, 4, null]}             
      fontSize={[2, 1, 1, 2]}
      maxWidth={Theme.Breakpoints.md}
      m='auto'
    >
      <Text mt='0' pt={2} borderTop='1px solid' as='h3'>Superior Motors</Text>
      <Text as='p' fontSize={0}>swag</Text>
    </Box>
  </CareerContainer>
)

export default Superior