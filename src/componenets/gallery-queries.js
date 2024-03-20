//Use this to show images with no frontmatter on Gallery:
{/*

const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {sourceInstanceName: {eq: "noodle"}, name: {ne: "index"}}
        sort: {name: DESC}
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
          id
          name
        }
      }
    }
  `)

*/}

//Use this if you want to include frontmatter info and for page building:
{/*

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

*/}

//Use for image info AND front matter data!
{/*
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {sourceInstanceName: {eq: "noodle"}, name: {ne: "index"}}
        sort: {name: DESC}
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
          id
          name
          childMdx {
            frontmatter {
              date
              slug
              title
            }
          }
        }
      }
    }
  `)
*/}