import { css, jsx } from '@emotion/react'
import { motion } from 'framer-motion'
import { Theme } from '../../components/Theme'
import WritingsList from '../../components/WritingsList'
import Prismic from 'prismic-javascript'
import { Box, A } from '../../components/Common'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const client = Prismic.client('https://shaneckel.cdn.prismic.io/api/v2')

const Writing = (props) => {
  const paginate = []
  const writings = props.writings.results
  const pageNum = parseInt(props.page)
  const { total_pages, results_size } = props.writings
  const [page, setPage] = useState(pageNum)

  useEffect(() => setPage(pageNum))

  for (let i = 0, j = 1; i <= total_pages; i += results_size, j++ ) {
    paginate.push(
      <Link href={`/writing?p=${j}`} key={i} as={`/writing?p=${j}`}>
        <A 
          href='' 
          as='a'
          p={2}
          mr={1}
          width='32px'
          color={page !== j ?'background' : 'text'}
          height='32px'
          bg={page !== j ? 'text' : ''}
          borderRadius='6px'
          css={css`
            line-height: 32px;
            text-align: center;
            display: inline-block;
            ${
              page !== j ? `
                &:hover {
                  background: ${Theme.colors.background_light};
                }
              `:``
            }
          `}
        >{j}</A>
      </Link>
    )
  }

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
        <motion.div       
          initial="initial"
          animate="enter"
          exit="exit"
          variants={Theme.transition.list}
          key={pageNum}
        >
          <WritingsList 
            writings={writings}
            page={page}
            boxShadow='main'
          />
        </motion.div>
        <Box 
          pt={3}
          mt={4}
        >
          {paginate}
        </Box>
      </Box>
    </motion.div>
  )
}

Writing.getInitialProps = async (context ) => {
  const page = context.query.p || 1
  const writings = await client.query(
    Prismic.Predicates.at('document.type', 'writings'),{
      orderings : '[my.writings.date desc]',
      pageSize : 2,
      page : page
    }
  )
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  return { writings, page }
}


export default Writing
