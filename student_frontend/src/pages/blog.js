import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
import { BlogPageWrapper } from "../elements"

//The blog page
export const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <SEO title="Bloggen" description="Bloggsidan" />
      <BlogPageWrapper>
        <Blogs blogs={blogs} title="Alla artiklar" />
      </BlogPageWrapper>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        desc
        date(locale: "sv", formatString: "DD MMM YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
