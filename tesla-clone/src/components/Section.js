import React from 'react'
import styled from "styled-components"
import Fade from "react-reveal/Fade"

function Section( {title, description, leftBtnText, rightBtnText, backgroundImg} ) {
    // console.log(props);
    return (
        <Wrap bgImage = { backgroundImg }>
            <Fade bottom>
                <ItemText>
                    {/* <h1>Model S</h1> */}
                    <h1>{ title }</h1>
                    {/* <p>Order Online for Touchless Delivery</p> */}
                    <p>{ description }</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            { leftBtnText }
                        </LeftButton>
                        { rightBtnText &&                   // if only the text of the button exists
                                                            // then show the actual button
                            <RightButton>                   
                                {/* Existing Inventory */}
                                { rightBtnText }
                            </RightButton>
                        }

                    </ButtonGroup>
                </Fade>
                <DownArrow src = "./images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;             // puttin 'em top to bottom
    justify-content: space-between;     // vertical
    align-items: center;                // horizontal
    background-image: ${props => `url("./images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    z-index: -1;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;              // centering
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`         // inherting all the CSS of the LeftButton
    background-color: white;
    opacity: .65;
    color: black;
`

const DownArrow = styled.img`
    // margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
    // font-size: 12px;
`