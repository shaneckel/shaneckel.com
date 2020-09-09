import { motion } from 'framer-motion'
import { Theme } from '../../components/Theme'
import WritingsList from '../../components/WritingsList'
import Prismic from 'prismic-javascript'
import { Box, A } from '../../components/Common'
import { useState } from 'react'
import Link from 'next/link'

const client = Prismic.client('https://shaneckel.cdn.prismic.io/api/v2')

const Writing = (props) => {
  const writings = props.writings.results;
  // const { total_pages, results_size } = props.writings
  // const paginate = []
  // const [page, setPage] = useState(1)

  // for (let i = 0, j = 1; i <= total_pages; i += results_size, j++ ) {
  //   paginate.push(
  //     <Link href='/' key={i}>
  //       <A 
  //         borderRadius='4px' 
  //         href='' 
  //         pr={4} 
  //         mr={2} 
  //         pl={4} 
  //         as='a'
  //         bg={page !== j ? 'background_light' : 'background_dark'}
  //         boxShadow={page !== j ? Theme.shadow.small : null}
  //       >{j}</A>
  //     </Link>
  //   )
  // }

  return (
    <motion.div       
      initial="initial"
      animate="enter"
      exit="exit"
      variants={Theme.transition.default}
    >
      <Box
        maxWidth={Theme.Breakpoints.md}
        m='auto' 
      >
        {/* <h1>Writings</h1> */}
        <WritingsList 
          writings={writings} 
          boxShadow='main'
        />
        {/* <Box p={4}>
          {paginate}
        </Box> */}
      </Box>
    </motion.div>
  )
}

Writing.getInitialProps = async (context) => {
  const writings = await client.query(
    Prismic.Predicates.at('document.type', 'writings'),{
      orderings : '[my.writings.date desc]',
      pageSize : 10,
      page : 1
    }
  )
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  return { writings }
}


export default Writing
