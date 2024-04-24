import React from 'react'

const BlogContext = React.createContext()

export const BlogWrapper = ({children}) => { // it will be the app itself as its wrapped in blogwrapper from app.js
    return <BlogContext.Provider value = {5}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext
