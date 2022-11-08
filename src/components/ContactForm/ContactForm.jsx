import { useState, useEffect } from "react";
import { Success, ContactBox, Left, Right, Error } from "../Styled/Styled";
import { Form } from "../Form/Form";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState(true);
  const [validInput, setValidInput] = useState({
    email: true,
    phone: true,
  });
  const [nonExistingEmail, setNonExistingEmail] = useState(false);
  const [requiredFieldsAreFilled, setRequiredFieldsAreFilled] = useState(false);
  const [sendFormSuccessfully, setSendFormSuccessfully] = useState(false);

  useEffect(() => {
    if (formData.email !== "" || formData.phone !== "") {
      setRequiredFieldsAreFilled(true);
      if (validInput.email && validInput.phone) {
        setIsFormValid(true);
      } else setIsFormValid(false);
    } else {
      setRequiredFieldsAreFilled(false);
      setIsFormValid(false);
    }
  });

  const handleChangeInput = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    const valueNotEmpty = value !== "";
    const phoneId = id === "phone";
    const emailId = id === "email";

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const phoneRegex = /^\+\d{12}|\d{9}$/;

    if (typeof value !== undefined) {
      if (emailId) {
        const isEmailValid = value.match(emailRegex) || !valueNotEmpty;
        setValidInput((p) => ({ ...p, email: isEmailValid }));
      } else if (phoneId) {
        const isPhoneValid = value.match(phoneRegex) || !valueNotEmpty;
        setValidInput((p) => ({ ...p, phone: isPhoneValid }));
      }
    }

    setFormData((p) => ({ ...p, [id]: value }));
  };

  const handleSubmit = async (event) => {
    if (formData.email === "neexistujici@email.cz") {
      setSendFormSuccessfully(false);
      setNonExistingEmail(true);
      event.preventDefault();
    } else setNonExistingEmail(false);

    if (formData.email !== "neexistujici@email.cz") {
      event.preventDefault();
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setSendFormSuccessfully(true);
        document.getElementById("contact-form").reset();
      }, 3000);
    } else setNonExistingEmail(true);
  };

  const formIsNotEmpty = Object.values(formData).some(
    (inputValue) => inputValue !== ""
  );

  return (
    <ContactBox>
      <Left></Left>
      <Right>
        {isFormValid || !formIsNotEmpty ? (
          ""
        ) : (
          <Error>Invalid input format.</Error>
        )}
        {nonExistingEmail ? <Error>Neexistující emailová adresa</Error> : ""}
        {sendFormSuccessfully ? <Success>Successfully sent.</Success> : ""}

        <Form
          onSubmit={handleSubmit}
          onChange={handleChangeInput}
          required={!requiredFieldsAreFilled}
          validEmail={validInput.email}
          validPhone={validInput.phone}
          disabled={!isFormValid && formIsNotEmpty}
        />
      </Right>
    </ContactBox>
  );
};
