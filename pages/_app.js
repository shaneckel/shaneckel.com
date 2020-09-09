import * as React from 'react'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { cache } from '@emotion/css'
import { Theme, GlobalStyles} from '../components/Theme'
// import { Box } from '../components/common'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/Layout'
import Head from 'next/head'
// import Break from '../components/Break'

function MyApp({ Component, pageProps }) {

  return (
    <CacheProvider value={cache}>
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=block" 
          rel="stylesheet"
          key="fonts" 
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
