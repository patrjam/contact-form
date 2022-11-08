import styled from "styled-components";

const StyledTextArea = styled.textarea`
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: 0.3s;
`;

export const CustomTextArea = ({ label, ...otherProps }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <StyledTextArea {...otherProps} />
    </div>
  );
};
