/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./Footer"

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
    //mb-20 para que el footer quede pegado en la parte inferior
  return (
    
    <div className='mb-20' >
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
