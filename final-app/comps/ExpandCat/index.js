import styled from 'styled-components';
import HeroContainer from '../HeroImage'
import {BsFillCaretDownFill} from 'react-icons/bs';
import React from 'react';
import {useState} from 'react';


const ExpansionCont = styled.div`
`
const AnimTextCont = styled.div`

width:90vw;
position:relative;
height:${props => props.expansion};
border:${props => props.borderExpand};
border-radius:8px;
display:flex;
margin-top:1.5em;
flex-direction:column;
justify-content:space-between;
align-items:center;
box-shadow:${props => props.shadowBox};
transition:all 1s;


    .labelContainer
    {
        display:flex;
        justify-content:center;
        width:100%;
        height:100%;
        margin-top:2em;
        position:relative;
        // border:1px solid black;
        align-items:center;
        
        
            
            .labelText, .labelIcon
            {
                display:flex;
                margin-top:2.2em;
                align-items:center;
                justify-content:center;
                font-size:2em;
                color:black;
                font-weight:900;
                z-index:1;
                
            }
    }

    .textLots
    {
        opacity:${props => props.reveal};
        transition:all 1s;
        margin:1em;
        display:${props => props.displayLots};
        
    }
`
const CategoryAnim = styled.img `
object-fit:cover;
height:${props => props.heightImage};
width:100%;
// overflow:hidden;
border-radius:${props => props.radius};
position:absolute;
filter: ${props => props.blury};
opacity:.5;
z-index:0;
border-radius:10px;
transition:all 1s;


`        
        
 const LabelText = styled.div `
 
 display:${props => props.displayLabel};
 align-items:center;
 justify-content:center;
 font-size:2em;
 color:black;
    // border:2px solid red;
 white-space:no-wrap;
 font-weight:900;
 z-index:1;
 
 
 `           





 const Expander = ({
     text ="Vegetables",
     textLong="blarg blarg some more blarg",
     expandHeight = "15vh",
     showDisplay= 0,
     imageHeight = "100%",
     imageblur = "blur(0px)",
     source = "/team4.gif",
     expandBorder = "1px solid blue",
     shadowShad = "2px 2px 10px 1px  lightgrey",
     labelDisplay = "flex",
     lotsDisplay = "none"

 }) =>
{   
    const [expand, setExpand] = useState(false)

    if (expand)
    {
        expandHeight = "70vh"
        showDisplay= 1
        imageHeight = "70%"
        imageblur = "blur(0px)"
        expandBorder = "1px solid green"
        shadowShad = "4px 4px 10px 3px  lightgrey"
    }


    return <ExpansionCont> 


                <AnimTextCont 
                    expansion = {expandHeight}
                    borderExpand = {expandBorder}
                    shadowBox = {shadowShad}
                    reveal = {showDisplay}
                    onClick = {()=>setExpand(!expand)}>
                         
                     
                        <div className = "labelContainer" > 
                         
                        
                            
                            <LabelText displayLabel = {labelDisplay}>
                                {text}
                                </LabelText>

                         
                        </div>

                        <CategoryAnim 
                        src={source}
                        heightImage = {imageHeight}
                        blury={imageblur}/>
                       
                       
                        <div className="textLots"> 
                        {textLong}</div>
                       

            
                </AnimTextCont>

            </ExpansionCont>
};
export default Expander;