import React from "react";
import FormLayout from "../components/common/FormLayout";
import InputField from "../components/common/InputField";
import Button from "../components/common/Button"; 

export default function Contact() {
  return (
    <FormLayout
      title="Contact Us"
      subtitle="We'd love to hear from you. Send us a message!"
    >
      <InputField label="Name" placeholder="Enter your name" icon="ri-user-3-line" />
      <InputField label="Email" type="email" placeholder="Enter your email" icon="ri-mail-line" />
      <InputField
        label="Message"
        placeholder="Write your message"
        icon="ri-chat-3-line"
        textarea
      />

      <Button variant="formFull">
        Send Message
      </Button>
    </FormLayout>
  );
}
