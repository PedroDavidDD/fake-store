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

export const Tarjetas = styled.div`
    display: block;
    width: 100%;
    height: auto;
    height: calc(100vh - 120px);
    background: #A0917E;

    .tarjeta{        
        display: flex;
        max-width: 1170px;
        min-width: 450px;
        width: auto;
        max-height: 800px;
        max-height: 500px;
        min-height: 300px;
        height: 800px;
        
        margin: 100px auto;
        border-radius: 20px;
        box-shadow: 0px 10px 20px 10px #111;
    }
    .tarjeta__item{
        width: 60%;
        height: 100%;
        background-color: #fff;
        padding: 3%;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;

        .tarjeta__image{
            width: 100%;
            height: 100%;
            object-fit: contain;
            filter: brightness(1.1);
            mix-blend-mode: multiply;
        }
    }
    .tarjeta__item--content{
        width: 40%;
        padding: 4rem;
        text-align: start;
        background-color: #192561;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        
        div{
            color: #fff;
            margin-bottom: 1rem;
            line-height: 25px; 
            text-transform: capitalize;
            font-size: clamp(1.3rem, 2.5vw, 2rem); 
        }
        .tarjeta__title{
            color: #ff0;
            text-align: center;
            text-shadow: 
                #000 2px 1px,
                #000 4px 3px,
                #000 6px 3px,
                #000 8px 3px; 
            line-height: 27px;
        }
        .tarjeta__category{
            font-size: 20px;
            font-size: clamp(1.3rem, 2.5vw, 1.5rem); 
        }
        .tarjeta__description{
            width: 100%;
            max-height: 16rem;
            height: 8rem;
            
            font-size: 17px;
            font-size: clamp(1rem, 2.5vw, 1rem); 

            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            line-clamp: 5;
            overflow: hidden;

        }
    }

`
