import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
const useBlogs = () => {
    const data=useStaticQuery(graphql`
        {
            allMarkdownRemark {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            slug
                            description
                            date(formatString: "MMMM DD, YYYY")
                        }
                    }
                }
            }
        }
    `);
    
    return data.allMarkdownRemark.edges;
}
 
export default useBlogs;