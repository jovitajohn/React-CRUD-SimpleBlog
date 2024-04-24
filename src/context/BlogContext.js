import React,{useState} from 'react'

const BlogContext = React.createContext()

export const BlogWrapper = ({children}) => { // it will be the app itself as its wrapped in blogwrapper from app.js
    
    const [blogPost, setBlogPosts] = useState([])

    const addBlogPost= ()=>{
        setBlogPosts( [...blogPost,{title : `BlogPost #${blogPost.length + 1}`}])
    }
    return <BlogContext.Provider value = {{data: blogPost , addBlogPost}}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext
