import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";


type ContactFormEmailProps = {
   message: string;
   senderEmail: string;
}

export function ContactFormEmail({message, senderEmail}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview> New message from your portfolio site. </Preview>

      <Tailwind>
        <Body className="bg-gray-100 !text-black">
          <Container>
            <Section className="bg-white border-black my-10 px-10 py-4" >
              <Heading className="leading-tight">You received the following messsage from the contact form.</Heading>

                <Text>{message}</Text>

                  <Hr />

                  <Text>The sender's Email is: {senderEmail}</Text>

            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactFormEmail;
