import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <h3>
      <Link to="/">
        {siteTitle}
      </Link>
    </h3>
    <h4>
    <Link to="/about">
        about
      </Link>
    </h4>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
