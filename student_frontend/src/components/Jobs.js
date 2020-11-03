import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import {ButtonContainer, JobsWrapper, JobsCenter, JobButton, JobInfo, JobDate, JobsDesc, CenterButton} from "../elements"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  //console.log(jobs)
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]
  //console.log(company, position, date, desc)

  return (
    <JobsWrapper>
      <Title title="erfarenhet" />
      <JobsCenter>
        <ButtonContainer>
          {jobs.map((item, index) => {
            return (
              <JobButton
                key={item.strapiId}
                onClick={() => setValue(index)}
                isActive={index === value && "true"}
              >
                {item.company}
              </JobButton>
            )
          })}
        </ButtonContainer>
        <JobInfo>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <JobDate>{date}</JobDate>
          {desc.map(item => {
            return (
              <JobsDesc key={item.id}>
                <FaAngleDoubleRight classname="job-icon"/>
                <p>{item.name}</p>
              </JobsDesc>
            )
          })}
        </JobInfo>
      </JobsCenter>
      <CenterButton href="/about">
        Mitt CV
      </CenterButton>
    </JobsWrapper>
  )
}

export default Jobs
