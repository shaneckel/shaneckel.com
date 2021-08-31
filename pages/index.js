import WritingsList from '../components/WritingsList'
import { Text, Flex, Box } from '../components/Common'
import Prismic from 'prismic-javascript'
import { Theme } from '../components/Theme'
import { motion } from 'framer-motion'
import FrontCard from '../components/FrontCard'
import Link from 'next/link'

const client = Prismic.client('https://shaneckel.cdn.prismic.io/api/v2')
const cardData = [
  ['art/art_1s.jpg', '/artwork/1', 'artwork/1', 'version 2 - 2020'],
  // ['scscmu_front.jpg', '/careers', 'career/carnegie', 'CMU School of Computer Science - Technical Architecture'],
  // ['superior_front.jpg', '/careers', 'career', 'Superior Motors - Branding & Design'],
  ['art/art_2s.jpg', '/artwork/2', 'artwork/2', 'Untitled 7 - 2014'],
]

const Home = (props) => {
  const writings = props.writings.results;
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
        <Text 
          fontSize={[ 5, 6, 7]} 
          fontWeight={200}
          pb={6} 
          as='h1'
        >
          Hello. I'm <Text as='span'fontWeight='800'>Shane</Text>. A <strike>designer, engineer, artist, product manager</strike> <Text as='span'fontWeight='800'>guy who does a bunch of things</Text> in the city of Pittsburgh.
        </Text>
      </Box>
      <Flex 
        display={['block', 'block', 'flex']}
        maxWidth={Theme.Breakpoints.lg}
        m='auto'
        flexWrap='wrap'
      >
      {
        cardData.map((card, id) => {
          return(
            <FrontCard
              key={id}
              image={card[0]}
              url={card[1]}
              urlas={card[2]}
              info={card[3]}
              priority={true}
            />
          )
        })
      }
      </Flex>
      {/* <Box 
        maxWidth={Theme.Breakpoints.md} 
        m='auto'
        pt={6}
      >
        <WritingsList 
          writings={writings} 
        />
        <Box mt={4}>
          <Link href='writing'>
            <Text fontSize={0} as='a' href='/writing'>more writings</Text>
          </Link>
        </Box>
      </Box> */}
    </motion.div>
  )
}

Home.getInitialProps = async (context) => {
  const writings = await client.query(
    Prismic.Predicates.at('document.type', 'writings'),{
      pageSize: 2,
      orderings : '[my.writings.date desc]'
    }
  )
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  return { writings }
}

export default Home