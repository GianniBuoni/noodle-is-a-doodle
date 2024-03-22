import React from "react";
import Layout from "../../componenets/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "../../componenets/seo";

const PostPage = ({data, children}) => {
  
  const heroImage = getImage(data.mdx.frontmatter.heroimage)

  return (
    <Layout>
    <div className="post-grid">

    <div className="post-hero-image">
        <GatsbyImage
          image = {heroImage}
          alt = {data.mdx.frontmatter.heroimage_alt}
        />
      </div>

      <div className="post-headlines">
        <h1 style={{paddingBottom: 5}}>{data.mdx.frontmatter.title}</h1>
        <p>{data.mdx.frontmatter.date}</p>
      </div>

      {children}
    </div>
    </Layout>
  )

}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}, internal: {}) {
      frontmatter {
        date (formatString: "D MMM YYYY")
        heroimage {
          childImageSharp {
            gatsbyImageData
          }
        }
        heroimage_alt
        slug
        title
      }
    }
  }
`
export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title}/>
export default PostPage