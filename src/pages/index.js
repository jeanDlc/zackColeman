import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Container from "../components/Container"
import InvitationSection from "../components/InvitationSection"
import Explore from "../components/Explore"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <div className='mt-10 lg:flex' >
        <section className='w-full lg:w-3/5 mb-10' >
          <h2 className='text-5xl  md:text-7xl font-bold mb-10' >Every writer I know has trouble writing...</h2>
          <p className='text-gray-800 text-sm mb-8 leading-6 md:w-2/3' >I think all aspiring and professional writers out there will agree when I say that ‘We are never fully satisfied with our work. We always feel that we can do better and that our best piece is yet to be written’. I also believe that there is at least one quote that gets you and is fitting to how you feel at any moment in life</p>
          <Link to='/about' className='bg-red-400 py-2 px-5 rounded-tl-lg rounded-bl-lg rounded-br-lg text-white text-lg font-sans hover:bg-red-500 transition' >More</Link>
        </section>
        <div className='max-w-lg lg:w-full lg:ml-3 lg:w-2/5'>
          <Image />  
        </div>
      </div>
    </Container>
    <InvitationSection/>
    <Explore/>
  </Layout>
)

export default IndexPage
