import { css, jsx } from '@emotion/react'
import Link from 'next/link'
import { m, motion } from 'framer-motion'
import { Text, Box } from './Common'
import { Theme } from './Theme'
import { useRouter } from 'next/router'

const CareerList = ({ items }) => {
  const router = useRouter()

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
              <motion.div 
                whileHover="hover" 
                variants={item.project_link !== '' ? Theme.transition.flip : null}
                style={
                  item.project_link ? {
                    // 'border': '1px solid',
                    cursor: 'pointer',
                    background: `${Theme.colors.text}`,
                    color: `${Theme.colors.background}`,
                    borderRadius: '6px',
                    paddingBottom: '1px',
                    paddingLeft: '2px',
                    boxShadow: "1px 3px 8px rgba(30, 30, 30, 0.0)",

                  } : null
                }
                onClick={item.project_link ? () => router.push(`/career/${item.project_link}`) : null}
              >
                <Box 
                  display='block'
                  // background='background'
                  width='100%'
                  pt={[2, 2]}
                  pb={[2, 2]}
                  pl={2}
                >
                  <Text fontSize={[0, 0]} p={1} >
                    <Text as='span' fontWeight='800'> 20{item.date.slice(item.date.length-2)}</Text>: {item.client} . {item.project} {` `}
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
                        // borderTop={idx === 0 ? '1px solid': null}
                      >
                        <Text 
                          fontSize={[0, 0]}
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
              </motion.div>
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