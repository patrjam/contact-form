import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  border: ${(props) => (props.valid ? "2px solid rgba(0, 0, 0, 0)" : "2px solid red")};
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: 0.3s;
`;

export const CustomFormInput = ({ label, ...otherProps }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <StyledInput {...otherProps} />
    </div>
  );
};
