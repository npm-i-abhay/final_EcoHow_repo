import React, { useState, Component } from 'react'
import styled from 'styled-components'
import Slider from '../Slider'

const sliderThumbStyles = (props) => (`

height: 25px;
width: 25px;
border:1px solid black;
background: red;
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
    background: green;

}

`






// export default class IsolatedSlider extends React.Component
// {
//     state = 
//     {
//         value : 50
//     }

//     handleOnChange = (e)=> this.setState ({value: e.target.value})

//     render()
//     {
//         return (
//             <SliderCont>
//                    <input type="range" min={0} max={100} value={this.state.value} className = "mainSlider" onChange={this.handleOnChange}/>
//                    <div className = "valueDisplay"> {this.state.value + "%"} </div>
//             </SliderCont>
//         )
//     }

// }

const IsoSliderComp = ({
  onChange = ()=>{}  
}) => 
{



    return <SliderCont>

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