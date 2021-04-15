import React from 'react'
import styled from 'styled-components'

const Banner = styled.div `
height:${props => props.dynamicHeight};
width:100%;
background-color:${props => props.background};
// margin-top:2em;
text-align:center;
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
        justifyText = "center",
        bannerHeight= "38px",
        bgColor = "#5EBA92"
    })=>
{
    return <Banner 
            alignment={justifyText}
            dynamicHeight={bannerHeight}
            background = {bgColor}
            colorOfText = {textColor}  > {text} </Banner>
}

export default MyBanner
