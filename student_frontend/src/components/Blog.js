import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { BlogArticle, BlogCard, BlogFooter, BlogImage } from "../elements"

const Blog = ({ id, title, image, date, category, slug, desc }) => {
  return (
    <Link to={`/blogs/${slug}`} key={id}>
      <BlogArticle>
        {image && (
          <BlogImage fluid={image.childImageSharp.fluid} className="blog-img" />
        )}
        <BlogCard>
          <h4>{title || "Ariklar"}</h4>
          <p>{desc}</p>
          <BlogFooter>
            <p>{category}</p>
            <p>{date}</p>
          </BlogFooter>
        </BlogCard>
      </BlogArticle>
    </Link>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default Blog
