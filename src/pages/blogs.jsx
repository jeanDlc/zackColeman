import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {graphql} from 'gatsby';
import BackgroundImage  from 'gatsby-background-image';
import BlogList from '../components/BlogsList';
const Blogs = ({data}) => {
    
    return ( 
        <Layout>
            <SEO title='Blogs' />
            <BackgroundImage 
                Tag="div" 
                fluid={data.image.childImageSharp.fluid} 
                style={{
                    width:'100%',
                    backgroundPosition: 'bottom center',
                    backgroundRepeat: 'repeat-y',
                    backgroundSize: 'cover',
                    height:'60vh'
                }}
                fadeIn='soft'
            >
                <section 
                    style={{
                        backgroundImage:'linear-gradient(180deg, rgba(105,105,105,0.42619054457720584) 26%, rgba(0,0,0,0.406582701439951) 70%)',
                        height:'100%',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        flexDirection:'column'
                    }}>
                    <h1 
                        className='text-4xl sm:text-6xl lg:text-8xl text-white' 
                    >Welcome to my Blog</h1>
                    <p className='text-base sm:text-lg text-gray-50 font-bold' >A little space for us</p>
                </section>
            </BackgroundImage>
            <div className='max-w-4xl mx-auto' >
                <BlogList/>
            </div>
        </Layout>
     );
}
export const data=graphql`
    query {
        image: file(relativePath: { eq: "blogHero.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
export default Blogs;