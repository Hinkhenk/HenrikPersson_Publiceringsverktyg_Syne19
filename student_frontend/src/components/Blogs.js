import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { BlogsWrapper, BlogsCenter, CenterButton } from "../elements"

export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <BlogsWrapper>
      <Title title={title} />
      <BlogsCenter>
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </BlogsCenter>
      {showLink && (
        <CenterButton href="/blog">
          Alla artiklar
        </CenterButton>
      )}
    </BlogsWrapper>
  )
}
export default Blogs