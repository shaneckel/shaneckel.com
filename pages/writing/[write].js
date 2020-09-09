import { motion } from 'framer-motion'
import { Theme } from '../../components/Theme'
import Prismic from 'prismic-javascript'
import { Box, Text } from '../../components/Common'
import { RichText, Date } from 'prismic-reactjs'
import { format } from 'date-fns'
import Link from 'next/link'

const client = Prismic.client('https://shaneckel.cdn.prismic.io/api/v2')

const Write = (props) => {
  const { article } = props;

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
        <Link href='/writing'><Text fontSize={0} href='/writing' as='a'>{`< back to writings`}</Text></Link>
      </Box>
      <Box
        maxWidth={Theme.Breakpoints.md}
        m='auto' 
      >
        <Text pb='0' mb='2' as='h1'>{RichText.asText(article.data.title)}</Text>
        <Text fontSize={0}>{format(new Date(Date(article.data.date).toString()), 'MMMM do, yyyy')}</Text>
        <Box>
          {RichText.render(article.data.body)}
        </Box>
      </Box>
    </motion.div>
  )
}

Write.getInitialProps = async (context) => {
  const { write } = context.query
  const article = await client.getByUID('writings', write)
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  return { article }
}


export default Write