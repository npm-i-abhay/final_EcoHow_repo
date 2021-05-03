import React, { useState, Component } from 'react'
import styled from 'styled-components'
import Slider from '../Slider'

const sliderThumbStyles = (props) => (`

height: 25px;
width: 25px;
border:1px solid black;
background: #4D4945;
border-radius: 100%;
cursor:pointer;
border: 1px solid black;


`)

const SliderCont = styled.div`


 .mainSlider{

    -webkit-appearance: none;
    appearance:none;
    outline:none;
    width:80%;
    margin-left:1em;
    display:flex;
    posistion:relative;
    margin-top:1.5em;
    // flex-direction:column;
    // align-items:center;

&::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance:none;
    margin-top:-.5em;
    // position: relative;
    appearance: none;
    ${props => sliderThumbStyles(props)}
  
}

&::-webkit-slider-runnable-track 
{
    -webkit-appearance: none;
    appearance:none;
    // max-width:500px;
    outline:none;
    height: 10px;
    border-radius:10px;
    background: ${props => props.colorBg};

}

`

const IsoSliderComp = ({
  onChange = ()=>{},
  bgColor = "#5EBA92"  
}) => 
{

    return <SliderCont colorBg={bgColor}>

            <input 
            type= "range"
            min = {0}
            max = {100}
            // value={val}
            className = "mainSlider"
            onChange={onChange} />
            {/* <div> {val} </div> */}
        </SliderCont>




}

export default IsoSliderComp