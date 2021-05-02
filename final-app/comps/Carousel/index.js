import React from 'react';
import styled from 'styled-components';
import HeroContainer from '../HeroImage'
import {useState} from 'react'
import {AiFillCaretRight, AiFillCaretLeft} from 'react-icons/ai'

const Wrapper = styled.div `
display:flex;
align-items:center;
position:relative;`

const ImageContainer = styled.div `
`
const ImageContainerTwo = styled.div `
// display:none;

`

const LeftArrow = styled.div`
font-size:4em;

` 

const RightArrow = styled.div`
font-size:4em;
` 


const Carousel = (
    {   
        CarouselSource = "team4.gif",
        onClick = ()=> {},
        onClickLeft = ()=> {}
    }
)=>
{

    // const [newSource, setSource] = useState(false)

    // const handleCarousel = ()=>
    // {
    //     setSource(!newSource)
    //     arbitSource = "/team4.gif"
    //     console.log (arbitSource, newSource)
    // }

    return  <Wrapper>

                <LeftArrow onClick = {onClickLeft} >
                    <AiFillCaretLeft/>
                </LeftArrow>
                
                <ImageContainer>
                    <HeroContainer 
                    borderRadius="10em"
                    source = {CarouselSource}/>
                </ImageContainer>


                <RightArrow onClick = {onClick} >
                     <AiFillCaretRight/>
                </RightArrow>
            </Wrapper>
}

export default Carousel