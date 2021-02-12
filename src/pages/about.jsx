import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {graphql, Link} from 'gatsby';
import Img from 'gatsby-image';
import Container from '../components/Container';
const About = ({data}) => {
    
    //console.log(data.image.childImageSharp.fluid);
    return ( 
        <Layout>
            <SEO title="About" />
            <Container>
                <div className='max-w-4xl mx-auto pb-3' >
                    <div className='md:flex ' >
                        <section className='md:w-1/2 p-3 md:pt-5' >
                            <h2 className='text-center font-bold text-6xl mb-5'>Zack Coleman</h2>
                            <p> <span className='font-bold' >Hi buddy!</span>    {' '} My name is <span className='font-bold text-red-500' >Zack Coleman</span> and I'm a writer since 2002.
                            </p>
                            <p>This is my personal blog, here i'm gonna talk about my experience and my new projects. If you like literature, here is the place for you. You could learn about writer's life, and how the inspiration is the most important thing in a novel, history, etc.</p>
                            <p>Join me in this new adventure, and i promise that we gonna create incredible stories for your family, friends, country or maybe for the world, why not</p>
                            <p>All my job is about ideas around my head, or experiences in my daylife, so if you are looking for inspiration, don't hesitate to write to me</p>
                            <Link to='/contact' 
                                className='bg-red-400 py-2 px-5 rounded-tl-lg rounded-bl-lg rounded-br-lg text-white text-lg font-sans inline-block mt-4 hover:bg-red-500 transition' 
                            >
                            Talk to me</Link>
                        </section>
                        <div className='md:w-1/2' >
                            {data?.image?.childImageSharp?.fluid?(
                                <Img fluid={data.image.childImageSharp.fluid} alt='Zack Coleman' /> 
                            ) : null}
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
     );
}
export const data=graphql`
    query {
        image: file(relativePath: { eq: "coleman.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
 
export default About;