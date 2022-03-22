import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from 'react-redux';                   // this is a hook

export default function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    // console.log(cars);

    return (
        <Container>
            <a>
                <img src = "./images/logo.svg"></img>
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a key = {index} href = "#">{car}</a>    
                ))}
                {/* <a href = "#">Model S</a>
                <a href = "#">Model Y</a>
                <a href = "#">Model 3</a>
                <a href = "#">Model X</a> */}
            </Menu>
            <RightMenu>
                <a href = "#">SHOP</a>
                <a href = "#">TESLA ACCOUNT</a>
                <CustomMenu onClick = { () => setBurgerStatus(true)}/>   
                                                                        {/* if we click on this the menu'll open */}
            </RightMenu>
            <BurgerNav show = { burgerStatus }>
                <CloseWrapper onClick = { () => setBurgerStatus(false)}>

                                                                        {/* if we click on this the menu'll close */}
                    <CustomClose />
                </CloseWrapper>
                {cars && cars.map((car, index) => (
                    <li key = {index}><a href = "#">{car}</a></li>
                ))}
                {/* <li><a href = "#">Existing Inventory</a></li>
                <li><a href = "#">Used Inventory</a></li>
                <li><a href = "#">Trade-in</a></li>
                <li><a href = "#">Cybertruck</a></li>
                <li><a href = "#">Roadster</a></li>
                <li><a href = "#">Semi</a></li>
                <li><a href = "#">Charging</a></li>
                <li><a href = "#">Power</a></li> */}
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
    transition: transform .2s;
    transform: ${props => props.show ? 'translateX(0%)': 'translateX(100%)' };
    li {                                // adding some lines between the elements of the list
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;
        }

    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`            // shiting the close button to the right
    display: flex;
    justify-content: flex-end;
`