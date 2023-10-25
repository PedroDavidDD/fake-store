import styled from "styled-components";
import { theme } from "../theme";

// export const StyledBtnInfo = styled(Link)`
export const StyledNavbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 87px;
    background-color: ${theme.colors.common.black};
    color: #fff;
    padding: 2px;
    :hover{
    }
`

export const StyledNavbarMenu = styled.div`
    display: block;
    width: 7em;
    height: auto;
    background-color: ${theme.colors.common.black};
    text-align: center;
    cursor: pointer;
    :hover{
        color: ${theme.colors.primary.main};
    }
`

export const StyledNavbarCollapse = styled.div`
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 20%
    
`