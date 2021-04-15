import React from 'react'
import styled from 'styled-components'

const Banner = styled.div `
height:2.375em;
width:20em;
background-color:#5EBA92;
// margin-top:2em;
text-align:center;
font-size:1.5em;
display:flex;
justify-content:${props => props.alignment};
align-items:center;
color:white;

`

const MyBanner = (
    {
        text ="your tips",
        justifyText = "center"
    })=>
{
    return <Banner alignment={justifyText} > {text} </Banner>
}

export default MyBanner