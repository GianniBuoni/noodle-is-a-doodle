import React from "react"
import Layout from "../componenets/layout"
import Content from "./about-copy.mdx"
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