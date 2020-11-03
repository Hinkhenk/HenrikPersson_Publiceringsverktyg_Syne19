import React from "react"
import Layout from "../components/Layout"
import {
  ContactPageWrapper,
  ContactFormWrapper,
  ContactFormGroup,
  ContactInput,
  ContactInputText,
  SubmitButton,
} from "../elements"

const contact = () => {
  return (
    <Layout>
      <ContactPageWrapper>
        <ContactFormWrapper>
          <h3>Kontakta mig</h3>
          <form action="https://formspree.io/maylelok" method="POST">
            <ContactFormGroup>
              <ContactInput
                type="text"
                name="name"
                placeholder="name"
              />
              <ContactInput
                type="email"
                name="email"
                placeholder="email"
              />
              <ContactInputText
                name="message"
                rows="5"
                placeholder="Meddelande"
              ></ContactInputText>
            </ContactFormGroup>
            <SubmitButton type="submit">Skicka</SubmitButton>
          </form>
        </ContactFormWrapper>
      </ContactPageWrapper>
    </Layout>
  )
}

export default contact
