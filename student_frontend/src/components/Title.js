import React from "react"
import { TitleWrapper } from "../elements"

const Title = ({ title }) => {
  return (
    <TitleWrapper>
      <h2>{title || "default title"}</h2>
    </TitleWrapper>
  )
}

export default Title
