import { Link } from 'gatsby';
import React from 'react';
import useBlogs from '../hooks/useBlogs';

const BlogList = () => {
    const blogs=useBlogs();
    console.log(blogs);
    return ( 
        <ul className='md:grid grid-cols-2 my-10 pt-10 pb-16 px-3 gap-x-3 gap-y-5' >
            {blogs.map(blog=>(
                <li key={blog.node.id} 
                    className='py-3 mb-10 lg:mb-4 px-5 rounded-lg shadow-xl hover:bg-gray-100 transition'
                >
                    <Link to={blog.node.frontmatter.slug} >
                        <h3 
                            className='text-4xl text-gray-800 hover:text-red-500 transition font-bold' 
                        >{blog.node.frontmatter.title}</h3>   
                        <p className='text-sm' >{blog.node.frontmatter.date} </p> 
                        <p>{blog.node.frontmatter.description} </p>
                    </Link>   
                    
                </li>
            ))}
            
        </ul>
     );
}
 
export default BlogList;