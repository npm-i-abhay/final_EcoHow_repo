import React from 'react'
import styled from 'styled-components'
import styles from '../../styles/main.module.css'

const Banner = styled.div `
height:${props => props.dynamicHeight};
width:100%;
// border:2px solid yellow;
font-family: 'Spartan', sans-serif;
// text-align:left;
font-size:2.5em;
display:flex;
transition:all 1s;
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
            colorOfText = {textColor}
            className={styles.main}> {text} </Banner>
}

export default MyBanner
