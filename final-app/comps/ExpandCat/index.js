import styled from 'styled-components';
import HeroContainer from '../HeroImage'
import {BsFillCaretDownFill} from 'react-icons/bs';
import React from 'react';
import {useState} from 'react';
import styles from '../../styles/main.module.css'


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
background-color:${props => props.bgCont};
justify-content:space-between;
align-items:center;
box-shadow:${props => props.shadowBox};
cursor:pointer;
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

    .textAndStatFlex
    {
        // border:2px solid red;
        display:flex;
        height:100%;
        flex-direction:column;
        align-items:center;

        .textLots
        {
            opacity:${props => props.reveal};
            transition:all 1s;
            transition-delay:.5s;
            margin:1em;
            font-size:.9em;
            color:${props=> props.lotsTextCol};
            display:${props => props.displayLots};
            
        }
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
// opacity:.5;
z-index:0;
border-radius:10px;
transition:all 1s;


`        
        
 const LabelText = styled.div `
 
 opacity:${props => props.displayLabel};
 align-items:center;
 justify-content:center;
 font-size:1.3em;
 color:${props=> props.labelTextCol};
 text-shadow:0px 8px 8px rgba(0, 0, 0, 0.25);
 
    // border:2px solid red;
 white-space:no-wrap;
 font-weight:900;
 z-index:1;
 transition: .5s;
 
 
 `           


const StatGraphic = styled.img 
`
object-fit:contain;
height:${props => props.heightStat};
width:${props => props.widthStat};
position:relative;
transition: all 1s;
transition-delay:.5s;
`


 const Expander = ({
     text ="Vegetables",
     textLong="blarg blarg some more blarg",
     textLotsCol = "black",
     expandHeight = "15vh",
     showDisplay= 0,
     imageHeight = "100%",
     imageblur = "blur(2px)",
     source = "/team4.gif",
     expandBorder = "1px solid black",
     shadowShad = "2px 2px 10px 1px  grey",
     labelDisplay = "1",
     lotsDisplay = "none",
     statHeight = "0",
     statWidth = "0", 
     contBg = "#21AAB540",
     textLabelCol = "black"

 }) =>
{   
    const [expand, setExpand] = useState(false)

    if (expand)
    {
        expandHeight = "90vh"
        showDisplay= 1
        imageHeight = "50%"
        imageblur = "blur(0px)"
        expandBorder = "1px solid green"
        shadowShad = "4px 4px 10px 3px  grey"
        labelDisplay = "0"
        statHeight = "50%"
        statWidth = "50%"
        lotsDisplay = "flex"

    }


    return <ExpansionCont className = {styles.content} > 


                <AnimTextCont 
                    expansion = {expandHeight}
                    borderExpand = {expandBorder}
                    shadowBox = {shadowShad}
                    reveal = {showDisplay}
                    bgCont = {contBg}
                    onClick = {()=>setExpand(!expand)}
                    displayLots = {lotsDisplay}
                    lotsTextCol = {textLotsCol}>
                         
                     
                        <div className = "labelContainer" > 
                            <LabelText 
                            displayLabel = {labelDisplay}
                            labelTextCol = {textLabelCol}>
                                {text}
                            </LabelText>
                        </div>


                         

                        <CategoryAnim 
                        src={source}
                        heightImage = {imageHeight}
                        blury={imageblur}/>
                       
                       <div className="textAndStatFlex">
                            <div className={"textLots"}> 
                            {textLong}</div>
                        </div>

                       

            
                </AnimTextCont>

            </ExpansionCont>
};
export default Expander;