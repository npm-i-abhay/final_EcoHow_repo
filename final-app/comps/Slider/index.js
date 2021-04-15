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
// &::-webkit-slider-thumb {
//     -webkit-appearance: none;
//     appearance:none;
//     position: relative;
//     appearance: none;
//     height: 25px;
//     width: 25px;
//     background: yellow;
//     border-radius: 100%;
//     border: 0;
// }
// &::-webkit-slider-runnable-track {
//     width: 100%;
//     height: 10px;
//     background: yellow};
//   }
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

                   
             </MainContainer>
}           

export default Slider