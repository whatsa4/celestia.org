import * as React from "react"
import { graphql,StaticQuery } from 'gatsby'

import LearnBox from "../../components/learn-box"

export default function FeaturedLearn(props) {
    return (
        <StaticQuery
            query={graphql`
        query {
    allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    limit: 3
    filter: {fileAbsolutePath: {regex: "/learn/"}}
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            icon
            title
            description
          }
        }
      }
    }
  }
      `}

            render={data => (
                <div className={'learning-modules'}>
                    <div className={'row pb-5 learn-modules learn-modules-footer smaller'}>
                        {data.allMarkdownRemark.edges.filter(function (edge) {
                            return edge.node.frontmatter.slug !== props.current;
                        }) // You can filter your posts based on some criteria
                            .map(edge => <div className={'col col-12 col-md-6 pt-5'}><LearnBox key={edge.node.id} post={edge.node} /></div>)
                        }
                    </div>
                </div>
            )}
        />
    )
}
