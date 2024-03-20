import React from "react"
import Layout from "../componenets/layout"
import Content from "../componenets/about-copy.mdx"
import Seo from "../componenets/seo"

const About = () => {
    return (
        <Layout>
            <Content />
        </Layout>
    )
}

export default About
export const Head = () => <Seo title={'About'}/>