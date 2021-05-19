import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
width:90vw;
height:70vh;
background-color:${props => props.backgroundColor};
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50px;
box-shadow: ${props => props.boxShadow};
margin:1em;

transition:0.5s;

.textCont{
    font-size:2em;
    font-family: 'Spartan', sans-serif;
    font-weight:bold;
    
}

`

const GifContainer = styled.div`
background-color:white;
border-radius:50%;
height:300px;
width:300px;
margin:2em;
// `;

const GifImage = styled.img`
object-fit:cover;
height:100%;
width:100%;
position:relative;
border-radius:50%;
`;

const CategoryCard = ({

    bgcolor="#85817D",
    text="Organic",
    gifSource="./Organic.gif",
    boxShadowDefault="0px 2px 2px rgba(0, 0, 0, 0.25)",
    onClick = ()=> {}
})=>
{
    return  <CardContainer backgroundColor={bgcolor} boxShadow={boxShadowDefault} onClick={onClick}>
            
                <GifContainer>
                    
                    <GifImage src={gifSource}></GifImage>
                
                </GifContainer>
                
                <div className="textCont">{text}</div>

            </CardContainer>
}

export default CategoryCard