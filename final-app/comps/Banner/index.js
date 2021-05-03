import React from 'react'
import styled from 'styled-components'

const Banner = styled.div `
height:${props => props.dynamicHeight};
width:100%;
border:2px solid yellow;

// text-align:left;
font-size:1.5em;
display:flex;
justify-content:${props => props.alignment};
align-items:center;
color:${props => props.colorOfText};

`

const MyBanner = (
    {
        text ="your tips",
        textColor = "black",
        justifyText = "left",
        bannerHeight= "38px",
    })=>
{
    return <Banner 
            alignment={justifyText}
            dynamicHeight={bannerHeight}
            colorOfText = {textColor}> {text} </Banner>
}

export default MyBanner
