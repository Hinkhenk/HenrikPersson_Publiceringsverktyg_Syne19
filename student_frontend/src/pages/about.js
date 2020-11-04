import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import {
  AboutArticle,
  AboutCenter,
  AboutPageWrapper,
  AboutStack,
  Button,
} from "../elements"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { info, stack } = nodes[0]
  return (
    <Layout>
      <SEO title="CV" description="CV" />
      <AboutPageWrapper>
        <AboutCenter>
          <AboutArticle>
            <ReactMarkdown source={info} />
            <AboutStack>
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </AboutStack>
            <Button to="/contact">kontakta mig</Button>
          </AboutArticle>
        </AboutCenter>
      </AboutPageWrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
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

export default About
