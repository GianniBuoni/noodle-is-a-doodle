import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Gallery = () => {

    const data = useStaticQuery(graphql`
    query {
        allMdx(
          filter: {frontmatter: {heroimage: {sourceInstanceName: {eq: "noodle"}}}}
          sort: {frontmatter: {date: DESC}}
        ) {
          nodes {
            frontmatter {
              heroimage_alt
              heroimage {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            id
          }
        }
      }
    `)

  return (
    <div className="grid">
        
        {
            data.allMdx.nodes.map(node => (
                
                <GatsbyImage
                    image={node.frontmatter.heroimage.childImageSharp.gatsbyImageData}
                    alt={node.frontmatter.heroimage_alt}
                />
                
        ))
        }
    </div>
  )
}

export default Gallery
