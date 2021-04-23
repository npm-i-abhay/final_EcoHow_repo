import React from 'react';
import styled from 'styled-components';
import IsoSliderComp from '../IsolatedSlider';
import Button from '../Button';
import {useState} from 'react';


const MainContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
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
onChangeTwo = ()=> {}
})=>
{   
    

    return <MainContainer>


                    <TextContainer alignment={justify}>  
                        {Labeltext}
                    </TextContainer>
                    
                    <SliderContainer 
                   >
                    
                    <IsoSliderComp onChange = {onChangeTwo} />
                    
                        
                    
                    </SliderContainer>
                    
                    <OptionsContainer>
                        <p> Low </p>    
                        <p> Average </p>    
                        <p> Strong</p>    
                    </OptionsContainer>         

             </MainContainer>
}           
export default Slider