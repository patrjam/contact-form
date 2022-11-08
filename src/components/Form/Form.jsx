import React from "react";
import { CustomFormInput } from "../Custom/FormInput/FormInput";
import { CustomTextArea } from "../Custom/TextArea/TextArea";
import {
    SubmitButton
  } from "../Styled/Styled";

export const Form = ({
  onSubmit,
  onChange,
  required,
  validEmail,
  validPhone,
  disabled,
}) => {
  return (
    <form id="contact-form" onSubmit={onSubmit}>
      <br />
      <h1>Contact Us</h1>
      <br />
      <CustomFormInput
        onChange={onChange}
        id={"name"}
        label="Name"
        placeholder="John Doe"
        valid="true"
      />
      <CustomFormInput
        onChange={onChange}
        id={"email"}
        label="Email"
        placeholder="you@domain.com"
        required={required}
        valid={validEmail}
      />
      <CustomFormInput
        onChange={onChange}
        id={"phone"}
        label="Phone"
        placeholder="+420123456789"
        required={required}
        valid={validPhone}
      />
      <CustomTextArea
        onChange={onChange}
        id={"message"}
        label="Message"
        placeholder="Enter your message here ..."
        required={true}
      />
      <SubmitButton disabled={disabled}>Send</SubmitButton>
    </form>
  );
};
