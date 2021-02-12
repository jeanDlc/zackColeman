import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image';
import Nav from "./Nav";
const Header = ({ siteTitle }) => {
  const data=useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight:300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  
  return (
    
    <header className='bg-white pt-0 pb-1 md:pb-5 px-3'
    >
      <div
        className='container mx-auto flex justify-center md:justify-between items-center'
      >
        <h1>
          <Link to='/' >
          <div className='max-w-lg w-48 md:w-72 ' >
          {data?.image?.childImageSharp?.fluid? (
                <Img fluid={data.image.childImageSharp.fluid} alt='logo' />
              ) : 'Zack Coleman' }
          </div>
          </Link>
        </h1>
        <Nav/>
      </div>
    </header>
  
   
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
