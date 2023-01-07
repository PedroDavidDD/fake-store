import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../theme";


export const StyledBtnInfo = styled(Link)`
    display: block;
    width: 60%;
    height: auto;
    background-color: ${theme.colors.primary.main};
    margin: 0 auto;
    padding: 5px;
    border-radius: 20px 20px;
    cursor: pointer;
    text-align: center;
    :hover{
        background-color: #16232B;
        color: #fff;
    }
`
