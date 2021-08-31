import styled from '@emotion/styled'
import {
  space,
  color,
  fontSize,
  width,
  fontWeight,
  maxWidth,
  flexbox,
  border,
  display,
  typography,
  position,
  shadow,
  textAlign,
  borderRadius
} from 'styled-system'
import Image from 'next/image'

export const ImageContainer = (props) => {
  return(
  <Image 
    {...props} 
    layout="responsive" 
    placeholder='blur' 
    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPc+x8AAn8BvgA42gcAAAAASUVORK5CYII=' 
  />
)}

export const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${maxWidth}
  ${flexbox}
  ${border}
  ${typography}
  ${position}
  ${shadow}
  ${display}
  ${borderRadius}
  `
  export const Header = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${maxWidth}
  ${flexbox}
  ${border}
  ${typography}
  ${position}
  `
  export const A = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${border}
  ${typography}
  ${display}
  ${shadow}
  `
  export const Flex = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${maxWidth}
  ${flexbox}
  ${border}
  ${display}
  ${typography}
  ${position}
  ${display}
`

export const Text = styled.div`
  ${space}
  ${fontSize}
  ${color}
  ${fontWeight}
  ${border}
  ${textAlign}
`