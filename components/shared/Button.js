import styled from 'styled-components';

export const Button = ({ text }) => {
   return <ButtonWrap>{text}</ButtonWrap>;
};

const ButtonWrap = styled.button`
   background: ${(props) => props.theme.primaryPink};
   background: ${(props) => props.theme.white};
   text-transform: uppercase;
   font-size: 1.1rem;
   padding: 1rem;
   outline: none;
   border: none;
   border-radius: 10px;
   cursor: pointer;
`;
