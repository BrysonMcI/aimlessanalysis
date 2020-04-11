import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <ul className="posts">
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <div className="postsHeader">
                <Link to={post.fields.slug}>
                  <h2>{post.frontmatter.title}</h2>
                </Link>
                <p>{post.frontmatter.date}</p>
              </div>
              <div className="postsExcerpt">
                <p>{post.excerpt}</p>
              </div>
              <div className="postsTags">
                {post.frontmatter.tags.map(tag => (<button disabled>{tag}</button>))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          excerpt(pruneLength: 400)
          frontmatter {
            title
            date(formatString: "dddd MMMM Do, YYYY")
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogIndex