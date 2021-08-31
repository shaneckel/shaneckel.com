
import CareerContainer from '../../components/CareerContain'
import { Box, Text, ImageContainer } from '../../components/Common'
import { Theme } from '../../components/Theme'

const Carnegie = () => (
  <CareerContainer>
    <Box 
      m={[0, null, null, 4]}
      mb={[4, 4, 4, null]}
      pb={[1, 4, null]}             
      fontSize={[2, 1, 1, 2]}
      maxWidth={Theme.Breakpoints.md}
      m='auto'
    >
      <Text mt='0' borderBottom='1px solid' mb={3} pb={3} as='h3'>Carnegie Mellon School of Computer Science</Text>
      <Text as='p' fontSize={0}>Senior Front End Engineer / 2015 - 2017</Text>
      <Text as='p' fontSize={0}>Being from this area, Carnegie Mellon has always been  </Text>
    </Box>
    <Box 
      // m={[0, null, null, 4]}
      mb={[4, 4, 4, null]}
      pb={[1, 4, null]}             
      fontSize={[2, 1, 1, 2]}
      maxWidth={Theme.Breakpoints.lg}
      m='auto'
    >
      {/* <ImageContainer width='' src='/images/career/carnegie_header.jpg' /> */}
    </Box>
    <Box 
      m={[0, null, null, 4]}
      mb={[4, 4, 4, null]}
      pb={[1, 4, null]}             
      fontSize={[2, 1, 1, 2]}
      maxWidth={Theme.Breakpoints.md}
      m='auto'
    >
      <Text as='h4' fontSize={1}>The Problem</Text>
      <Text as='p' fontSize={0}>To organize and optimize the technical infrastructure of SCS. To provide a modern web stack that is built towards mobile and offline first. To introduce an API driven architecture to allow more than just websites to use our data. To reduce the amount of cruft and duplicated efforts by our staff and faculty. To create a working communication within our campus employees. Change the development process from one that favors one massive deliverable to one that favors continuous feature additions and continuous updates</Text>
    </Box>
  </CareerContainer>
)

export default Carnegie