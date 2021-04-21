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

background-color:#F5F1ED;
border-radius:10px;
width:342px;
height:57px;
margin:.5em;


`
const MainSlider = styled.input.attrs(props => ({type:"range"})) `
    margin-top:15px;
    margin-left:80px;
    appearance:none;
    &::-webkit-slider-thumb {
        background:white;
    }
    

    &::-webkit-slider-runnable-track {
    width: 100%;
    
    background: #376293;
    border-radius:20px;
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
                    
                        <MainSlider className="slider"/>
                    
                    </SliderContainer>
                    
                    <OptionsContainer>
                        <p> Low </p>    
                        <p> Average </p>    
                        <p> Strong</p>    
                    </OptionsContainer>         

                   
             </MainContainer>
}           

export default Slider