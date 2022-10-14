import React from "react"
import { graphql } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

const About = ({ data }) => (
  <Layout>
    <Seo title="About" />
    <div className="about">
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        I've mainly started this blog just to dump ideas, theories, analysis or whatever 
        else I'd want to get off my mind and engage with others on. I wouldn't expect any of these posts
        to have amazing editing or even be grammatically correct since they will primarily just be brain dumps.
        Hopefully someone finds some of this interesting or thought provoking in some way and if you do I'd appreciate
        if you'd engage with me through <OutboundLink href="https://twitter.com/EpiChlo">Twitter</OutboundLink>, <OutboundLink href="https://www.linkedin.com/in/bryson-mciver/">LinkedIn</OutboundLink> or <OutboundLink href="https://github.com/BrysonMcI">GitHub</OutboundLink>.
      </p>
      <p>
        Primarily the content here will be about my current interests and hobbies.
        Currently that tends to revolve around esports, game development, and software engineering, but I doubt those are the only things
        you'll find here. Once I've got more content, the blog will grow as well with search and tags eventurally.
      </p>
      <h1>About Myself</h1>
      <p>
        I graduated from the Rochester Institute of Technology in 2019 with a double major in Computer Security and 
        Network and Systems Administraion. I love pushing myself to be the better than my previous self and solving
        whatever difficult problems I can find. I've been playing games my whole life, and have participated in esports since college.
        Many of the blog posts here are from trying to think through random problems or new ways to approach something.
        I'm always looking for new opportunities and places where I can solve problems and if you think you have something like
        that let's chat. You can find more about my professional experience on <OutboundLink href="https://www.linkedin.com/in/bryson-mciver/">LinkedIn</OutboundLink>.
      </p>
    </div>
  </Layout>
)
export default About;
