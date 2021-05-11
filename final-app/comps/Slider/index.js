import React from 'react';
import styled from 'styled-components';
import IsoSliderComp from '../IsolatedSlider';
import Button from '../Button';
import {useState} from 'react';


const MainContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:90vw;
height:100%;
padding-top:1em;
border-radius:10px;
justify-content:space-around;
background-color:${props=> props.colorBg};
box-sizing:border-box;
margin:1em 0 1em 0;
`

const TextContainer = styled.div`
display:flex;
width:70%;
margin-bottom:1em;
font-family: 'Montserrat', sans-serif;
justify-content:${props => props.alignment};
color:black;
`
const OptionsContainer = styled.div`
display:flex;
justify-content:space-around;
width:342px;
color:Black;
font-weight: 600;
font-family: 'Montserrat', sans-serif;

`


const SliderContainer = styled.div`

align-items:center;
justify-content:space-between;
background-color:#F5F1ED;
border-radius:10px;
width:80%;
height:57px;
margin:.5em;


`


const Slider = ({
Labeltext="How strong is your knowledge of composting & organic waste?",
justify="center",
onChangeTwo = ()=> {},
bgColor="#CBE3E2",
bgColorTrack = "#5EBA92",
opt1 = "Never",
opt2 = "Sometimes",
opt3 = "Always"
})=>
{   
    

    return <MainContainer colorBg= {bgColor}>


                    
                    <TextContainer alignment={justify}>  
                        {Labeltext}
                    </TextContainer>
                    
                    <SliderContainer 
                   >
                    
                    <IsoSliderComp 
                    onChange = {onChangeTwo} 
                    bgColor = {bgColorTrack} />
                    
                        
                    
                    </SliderContainer>
                    
                    <OptionsContainer>
                        <p> {opt1} </p>    
                        <p> {opt2} </p>    
                        <p> {opt3}</p>    
                    </OptionsContainer>         

             </MainContainer>
}           
export default Slider
