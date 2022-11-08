import { ContactForm } from "./components/ContactForm/ContactForm";
import styled from "styled-components";
import { ReactComponent as Logo } from "./assets/icon-github.svg";

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 100px;
`;

const StyledA = styled.a`
  right: 15px;
  position: absolute;
  cursor: pointer;
  z-index: 99;
`;

export const App = () => {
  return (
    <div>
      <StyledA
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/patrjam/contact-form"
      >
        {" "}
        <Logo width="30px" height="50px" />
      </StyledA>
      <StyledDiv>
        <ContactForm />
      </StyledDiv>
    </div>
  );
};
