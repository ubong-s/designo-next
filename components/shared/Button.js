import styled from 'styled-components';
import { typography } from '../../styles';

export const Button = ({ text }) => {
   return <ButtonWrap>{text}</ButtonWrap>;
};

const ButtonWrap = styled.button`
   background: ${(props) => props.theme.primaryPink};
   background: ${(props) => props.theme.white};
   font-weight: ${typography.weight.medium};
   text-transform: uppercase;
   font-size: 1.1rem;
   padding: 1rem 1.25rem;
   outline: none;
   border: none;
   border-radius: 10px;
   cursor: pointer;
`;
