import React from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
width:10em;
height:5em;
border:2px solid black;
// display:flex
`
const MainSlider = styled.input.attrs(props => ({type:"range"})) `

&::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    appearance: none;
    height: 25px;
    width: 25px;
    background: yellow;
    border-radius: 100%;
    border: 0;
}
&::-webkit-slider-runnable-track {
    width: 100%;
    height: 20px;
    background: green};
  }
`

const Slider = ({

})=>
{
    return <SliderContainer>



            <MainSlider>
                </MainSlider>
   
        </SliderContainer>
}

export default Slider