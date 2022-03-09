import * as React from "react"
import { graphql } from 'gatsby'
import {FooterBoxes} from "../datas/resources/content";
import Layout from "../components/layout";

import PostLink from "../components/post-link"

const LearnPage = ({
       data: {
           allMarkdownRemark: { edges },
       },
   }) => {
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
    return <Layout footerBoxes={FooterBoxes}>
        <div className={'learn-page'}>
            <main>
                <div className={'container'}>
                    <h1 className={'main'}>Learn Modular</h1>
                    {Posts}
                </div>
            </main>
        </div>
    </Layout>
}
export default LearnPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
