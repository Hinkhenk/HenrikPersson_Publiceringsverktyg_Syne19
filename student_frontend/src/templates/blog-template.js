import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import { BlogTemplateWrapper, BlogTemplateCenter,Button } from "../elements"

const ComponentName = ({ data }) => {
  const { content, title, desc } = data.blog

  return (
    <Layout>
      <SEO title={title} description={desc} />
      <BlogTemplateWrapper>
        <BlogTemplateCenter>
          <article>
          <ReactMarkdown source={content} />
          </article>
          <Button href="/blog">Alla artiklar</Button>
        </BlogTemplateCenter>
      </BlogTemplateWrapper>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
    }
  }
`

export default ComponentName
