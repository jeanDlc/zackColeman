import React from 'react';
import { graphql } from "gatsby";
import Layout from '../components/layout';
import Container from '../components/Container';
import SEO from '../components/seo';

export default function BlogTemplate ({data}) {
    console.log(data);
    return (
        <Layout>
            <SEO title={data.markdownRemark.frontmatter.title} />
            <Container>
                <h1 
                    className='text-center text-4xl md:text-7xl text-red-400 mb-12' 
                >{data.markdownRemark.frontmatter.title} </h1>
                <p className='font-bold text-xl text-red-400' >{data.markdownRemark.frontmatter.date}</p>
                <div className='p-2 md:mb-48'>
                    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                </div>
                
            </Container>
        </Layout>
    );
}
export const pageQuery=graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
            }
        }
    }
`;
