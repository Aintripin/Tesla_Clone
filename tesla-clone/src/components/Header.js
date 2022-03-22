import React from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from "@mui/icons-material/Close"

export default function Header() {
    return (
        <Container>
            <a>
                <img src = "./images/logo.svg"></img>
            </a>
            <Menu>
                <a href = "#">Model S</a>
                <a href = "#">Model Y</a>
                <a href = "#">Model 3</a>
                <a href = "#">Model X</a>
            </Menu>
            <RightMenu>
                <a href = "#">SHOP</a>
                <a href = "#">TESLA ACCOUNT</a>
                <CustomMenu />
            </RightMenu>
            <BurgerNav>
                <CustomClose />
                <li><a href = "#">Existing Inventory</a></li>
                <li><a href = "#">Used Inventory</a></li>
                <li><a href = "#">Trade-in</a></li>
                <li><a href = "#">Cybertruck</a></li>
                <li><a href = "#">Roadster</a></li>
                <li><a href = "#">Semi</a></li>
                <li><a href = "#">Charging</a></li>
                <li><a href = "#">Power</a></li>
            </BurgerNav>
        </Container>
    )
}

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;                 // make it 1 so the sidebar will overlap the main content 
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;            /* top & bottom: 0; left & right: 10px */
        flex-wrap: nowrap;
    }

    @media(max-width: 768px) {
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        // flex-wrap: nowrap;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    top:0;
    right: 0;
    bottom: 0;
    background: white;                  // might change the color later on
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    li {                                // adding some lines between the elements of the list
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;
        }

    }
`

const CustomClose = styled.div`
    
`