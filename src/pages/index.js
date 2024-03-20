import React from "react"
import Layout from "../componenets/layout"
import Seo from "../componenets/seo"
import Gallery from "./gallery"

const Index = () => {
  return (
    <Layout>
      <h1>This is the Noodle Gallery! Illustration work TK! 😅</h1>
      <Gallery />
    </Layout>
  )
}

export const Head = () => <Seo title={'Home'}/>
export default Index