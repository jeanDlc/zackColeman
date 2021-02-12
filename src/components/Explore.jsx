import React from 'react';
import {graphql , Link, useStaticQuery} from 'gatsby';
import Container from './Container';

const Explore = () => {
    
    const data=useStaticQuery(graphql`
        {
            allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 3
            ) {
            edges {
                node {
                frontmatter {
                    slug
                    title
                    description
                }
                }
            }
            }
        }
    `);
    data.allMarkdownRemark.edges.forEach(post=>{
        console.log(post.node.frontmatter.title);
    })
    return ( 
        <section className='bg-red-200 py-12' >
            <Container>
                <h2 className='text-gray-50 text-4xl md:text-8xl text-center mb-16' >Explore</h2>
                <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 pb-10'>
                    {data.allMarkdownRemark.edges.map((post)=>(
                        <div key={post.node.frontmatter.slug}
                            className='py-4 px-8 bg-white rounded-lg mb-3' >
                            <Link 
                                className='text-xl md:text-2xl lg:text-4xl font-bold text-red-400 hover:text-red-500 transition inline-block mb-3' 
                                to={post.node.frontmatter.slug} 
                            > <h3>{post.node.frontmatter.title}</h3> </Link>
                            <p className='text-gray-500' >{post.node.frontmatter.description} </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
     );
}

export default Explore;