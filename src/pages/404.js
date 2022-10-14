import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import Layout from "../components/layout"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="notfound">
      <h1>Page not found :(</h1>
      <p>If you were expecting a page here, reach out on <OutboundLink href="https://github.com/BrysonMcI/aimlessanalysis">GitHub</OutboundLink> or <OutboundLink href="https://twitter.com/EpiChlo">Twitter</OutboundLink>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
