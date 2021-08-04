import styled from 'styled-components';
import { Link } from 'gatsby';

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#da0037' : '#212196')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 25px' : '10px 20px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '16px')};
    outline: none;
    border: none;
    min-width: 90px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({ round }) => (round ? '50px' : 'none')};
    font-family: 'Kaushan Script', cursive;

    &:hover {
        background: ${({primary}) => (primary ? '#212196' : '#da0037')};
        transform: scale(1.05);
    }
`