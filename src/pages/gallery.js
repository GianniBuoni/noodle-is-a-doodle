import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

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
            slug
          }
          id
        }
      }
    }
  `)

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{350:1, 767:2, 1200:3}}
    >
      <Masonry gutter="10px">
        {data.allMdx.nodes.map(node => (
            <div key={node.id}>
              <Link to={`noodle/${node.frontmatter.slug}`}>
              <GatsbyImage
                image={node.frontmatter.heroimage.childImageSharp.gatsbyImageData}
                alt={node.frontmatter.heroimage_alt}
              />
              </Link>
            </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default Gallery
