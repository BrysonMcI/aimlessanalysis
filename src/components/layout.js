import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="site">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <p>
            © {new Date().getFullYear()} Bryson McIver,
            Built with <OutboundLink href="https://www.gatsbyjs.org">Gatsby</OutboundLink>,
            Hosted on <OutboundLink href="https://github.com/BrysonMcI/aimlessanalysis">GitHub</OutboundLink>,
            Reach out to me on <OutboundLink href="https://twitter.com/EpiChlo">Twitter</OutboundLink> or <OutboundLink href="https://www.linkedin.com/in/bryson-mciver/">LinkedIn</OutboundLink>
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
