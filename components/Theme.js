import { css, Global } from '@emotion/react'
import { color } from 'styled-system'

const colors = {
  background: "#c7c7c7",
  background_light: "#bbbbbb",
  background_dark: "#4e4e4e",
  red: "#4e4e4e",
  primary: '#423EA2',
  link: '#5d5d5d',
  link_highlight: '#bebec1',
  heading: '#423EA2',
  text_light: '#949494',
  text: '#5d5d5d'
}

const fontSizes = [ 
  '.72em', 
  '.95em', 
  '1em', 
  '1.2em', 
  '1.6em', 
  '1.8em',
  '2em',
  '2.6em',
  '3.2em',
]

export const Breakpoints = [
  '639px',
  '800px',
  '1024px',
  '1280px',
]

export const Theme = {
  Breakpoints,
  colors,
  fontSizes,
  shadow: {
    main: '#3c3c3c73 0px 1px 10px',
    small: '#3c3c3c73 0px 1px 2px',
  },
  space: [0, 2, 4, 8, 16, 32, 64 ],
  transition: {
    hover: {
      hover: {
        scale: 0.96 
      }
    },        
    flip: {

      hover: {
        x: 8,
        transition: { 
          duration: .1
        }
      }
    },    
    soft_hover: {
      hover: {
        x: 5 
      }
    },    
    default: {
      initial: { 
        y: 5, 
        opacity: .5 
      },
      enter: { 
        y: 0, 
        opacity: 1 
      },
      exit: { 
        y: 5, 
        opacity: .5
      }
    },       
    list: {
      initial: { 
        opacity: .2,
        x: -10
      },
      enter: { 
        opacity: 1,
        x: 0, 
        transition: { 
          duration: .35 
        } 
      },
      exit: {
        x: 10, 
        opacity: .2,  
        transition: { 
          duration: .35
        } 
      }
    },        
    navigation: {
      initial: { 
        opacity: 0 
      },
      enter: { 
        opacity: 1, 
      },
      exit: { 
        opacity: 0,  
      }
    }
  }
}

Breakpoints.sm = Breakpoints[0],
Breakpoints.md = '800px',
Breakpoints.lg = Breakpoints[2],
Breakpoints.xl = Breakpoints[3],
fontSizes.body = fontSizes[3]

export const GlobalStyles = (
  <Global
    styles={css`
      html {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background: ${colors.background};
      }
      body {
        margin: ${Theme.space[0]};
        padding: ${Theme.space[0]};
        font-size: ${fontSizes.body};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-display: block;
        font-family: 'Noto Sans', sans-serif;
        text-rendering: optimizeLegibility;
        color: ${colors.text};
        background: ${colors.background};
        overflow-y: scroll;
      }
      a {
        color: ${colors.link};
        text-decoration: none;
      }
      img {
        max-width: 100%;
      }
      .image-styles {
        border-radius: 16px;
        cursor:pointer;
      }
    `}
  />
)
