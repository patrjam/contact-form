import styled from "styled-components";
import Background from "../../assets/background.jpg";

export const ContactBox = styled.div`
  max-width: 850px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
`;

export const Left = styled.div`
  background: url(${Background}) no-repeat center;
  background-size: cover;
  height: 100%;
`;

export const Right = styled.div`
  padding: 25px 40px;
`;

export const Error = styled.div`
position: absolute;
color: red;
border: 1px solid transparent;
border-radius: 0.3rem;
border-color:#f5c2c7 ;
background-color: #f8d7da;
transition: 0.3s;
width: 30%;
`

export const Success = styled.div`
position: absolute;
color: #0f5132;
border: 1px solid transparent;
border-radius: 0.3rem;
border-color:#badbcc ;
background-color: #d1e7dd;
transition: 0.3s;
width: 30%;
`

export const SubmitButton = styled.button`
width: 100%;
	padding: 0.5rem 1rem;
    background-color: ${(props) => (props.disabled ? "grey" : "#fa6559")};
    pointer-events:${(props) => (props.disabled ? "none" : null)}
	color: #fff;
	font-size: 1.1rem;
	border: none;
	outline: none;
	cursor: ${(props) => (props.disabled ? "" : "pointer")};
    transition: .3s;
    border-radius: 20px;
`;