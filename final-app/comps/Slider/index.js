import React from 'react';
import styled from 'styled-components';
import Button from '../Button';


const MainContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
`

const TextContainer = styled.div`
display:flex;
width:70%;
margin-bottom:1em;
color:#;
justify-content:${props => props.alignment};
color:#F5F1ED;
`
const OptionsContainer = styled.div`
display:flex;
justify-content:space-around;
width:342px;
color:#F5F1ED;
font-weight:900;

`


const SliderContainer = styled.div`

justify-content:center;
background-color:#F5F1ED;
border-radius:10px;
width:342px;
height:57px;
margin:.5em;


`
const MainSlider = styled.input.attrs(props => ({type:"range"})) `

    width:100%;
    -webkit-appearance: none;
    // appearance:none;

&::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance:none;
    position: relative;
    appearance: none;
    height: 25px;
    width: 25px;
    border:1px solid black;
    background: red;
    border-radius: 100%;
    border: 1px solid black;
}
&::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    appearance:none;
    max-width:500px;
    outline:none;
    height: 10px;
    border-radius:10px;
    background: green;
  }
`

const Slider = ({
Labeltext="How strong is your knowledge of composting & organic waste?",
justify="center"
})=>
{
    return <MainContainer>


                    <TextContainer alignment={justify}>  
                        {Labeltext}
                    </TextContainer>
                    
                    <SliderContainer>
                    
                        <MainSlider/>
                        
                    
                    </SliderContainer>
                    
                    <OptionsContainer>
                        <p> Low </p>    
                        <p> Average </p>    
                        <p> Strong</p>    
                    </OptionsContainer>         

                    <veggieContainer/>
                   
             </MainContainer>
}           

export default Slider