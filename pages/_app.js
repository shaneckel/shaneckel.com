import * as React from 'react'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { cache } from '@emotion/css'
import { Theme, GlobalStyles} from '../components/Theme'
// import { Box } from '../components/common'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/Layout'
import Head from 'next/head'
// import Break from '../components/Break'
import "@fontsource/noto-sans"

function MyApp({ Component, pageProps }) {

  return (
    <CacheProvider value={cache}>
      <Head>
        <script
          dangerouslySetInnerHTML={{      
            __html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-17701242-1', 'auto');
            ga('send', 'pageview');       
            `,
          }}
        />
      </Head>
      <ThemeProvider theme={Theme}>
        {GlobalStyles}
        <Layout>
          <AnimatePresence exitBeforeEnter>            
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
