import React from "react"
import Layout from "../components/Layout"
import {ErrorPageWrapper, Button} from "../elements"

const Error = () => {
  return (
    <Layout>
      <ErrorPageWrapper>
        <div>
          <h1>Oj, Något gick fel!</h1>
          <Button href="/">Tillbaka Hem</Button>
        </div>
      </ErrorPageWrapper>
    </Layout>
  )
}

export default Error
