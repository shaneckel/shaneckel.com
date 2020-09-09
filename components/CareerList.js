/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Text, Box } from './Common'
import { Theme } from './Theme'

const CareerList = ({ items }) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="posts">
        {items.map((item, idx) => {
          const projects = item.projects || []
          return (
            <Box key={idx}>
              <Box 
                display='block'
                borderTop='1px solid'
                borderColor='background_light'
                width='100%'
                pt={[2, 2]}
                pb={[2, 2]}
                bg='background'
              >
                <Text fontSize={[1, 0]} p={1}>
                  20{item.date.slice(item.date.length-2)} . {item.client} . {item.project} {` `}
                  {/* { item.project_link 
                    ? 
                      <Link 
                        key={idx}
                        href={`/career/${item.project_link}`}
                        as={`/career/${item.project_link}`}
                      ><button>info</button></Link> 
                    : null 
                  } */}
                </Text>
              </Box>
              {
                projects.map((project, idx ) => {
                  return (
                    <Box 
                      display='block'
                      key={idx}
                      width='100%'
                      pt={[2, 1]}
                      pb={[2, 1]}
                    >
                      <Text 
                        fontSize={[1, 0]}
                      >
                        <Text
                          as='span' 
                          p={1}
                          pl={[3, 4]}
                        >
                          
                          {project.client} . {project.project} 
                        </Text>
                      </Text>                        
                    </Box>
                  )
                })
              }
            </Box>
          )
        })}
      </div>
    </motion.div>
  )
}

export default CareerList

// <div key={post.id} className="post">
//   <motion.div variants={postVariants}>
//     <Link scroll={false} href="/posts/[post]" as={`/posts/${post.id}`}>
//       <a>
//         <motion.div whileHover="hover" variants={{ hover: { scale: 0.96 } }}>
//           <img src={`/static/images/${post.id}.jpg`} />
//         </motion.div>
//       </a>
//     </Link>
//     <PostInfo post={post} />
//   </motion.div>
// </div>