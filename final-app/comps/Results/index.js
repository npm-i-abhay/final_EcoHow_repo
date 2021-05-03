import React from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

.heading{
    font-size:2em;
    width:70%;
    text-align:center;
}

`;





const ResultsCont = styled.div`
height:100%;
width:80%;
background-color:#5EBA92;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:11px;
padding:1em;
opacity:0.8;

.textCont{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    // width:80%;
    // height:60%;
}


`;


const GifContainer = styled.div`
background-color:white;
height:70%;
width:80%;
margin:2em;
border-radius:10px;
display:flex;
flex-direction:column;
justify-content:center;
 `;

const GifImage = styled.img`
object-fit:cover;
height:100%;
width:100%;
position:relative;
border-radius:10px;
`;



const Results = ({
    text="Based on your score, you are doing a great job at keeping your personal waste generation at a minimum. You are keeping our environment healthy" ,
    gifSource = "../blackbin.gif",
    heading="You are doing a great job!"
}) => {

    return (<Wrapper>
    
            <p className="heading">{heading}</p>
            
            <ResultsCont>          
                <GifContainer>
                    
                    <GifImage src={gifSource}></GifImage>
                
                </GifContainer>
                <div className="textCont">
                {text}
                </div>
            </ResultsCont>
        </Wrapper>
    )
}

export default Results;