import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

import Layout from "./layout"
import Seo from "./seo"

const shortcodes = { Link }

export default function PageTemplate({ data: { mdx }, children }) {
  return (
    <Layout>
        <Seo title={mdx.frontmatter.title} />
        <div className="post">
        <h1>{mdx.frontmatter.title}</h1>
        <p>{mdx.frontmatter.author} - {mdx.frontmatter.date}</p>
        <MDXProvider components={shortcodes}>
            {children}
        </MDXProvider>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostTemplate($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        author
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`