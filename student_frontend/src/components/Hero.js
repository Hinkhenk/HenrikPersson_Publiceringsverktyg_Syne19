import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Button,
  HeroWrapper,
  HeroUnderline,
  HeroCenter,
  HeroInfo,
  HeroImage,
} from "../elements"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <HeroWrapper>
      <HeroCenter>
        <HeroInfo>
          <div>
            <h1>Henrik, det är jag</h1>
            <HeroUnderline>
              <h4>Studerar till Systemutvecklare inom .Net</h4>- Lär mig
              react/react native och c# främst
              <Button href="/contact">
                Kontakta mig
              </Button>
            </HeroUnderline>
          </div>
        </HeroInfo>
        <HeroImage fluid={fluid} />
      </HeroCenter>
    </HeroWrapper>
  )
}
export default Hero
