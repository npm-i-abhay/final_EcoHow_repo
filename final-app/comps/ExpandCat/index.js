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
border:3px solid green;
border-radius:12px;
display:flex;
margin-top:1.5em;
flex-direction:column;
justify-content:space-between;
align-items:center;
// box-shadow:1px 1px 10px 1px  lightgrey;
transition:all 1s;


    .labelContainer
    {
        display:flex;
        justify-content:space-around;
        width:50%;
        height:6vh;
        align-items:;
        
            
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
opacity:.8;
z-index:0;
border-radius:10px;
transition:all 1s;


`        
        
            





 const Expander = ({
     text ="Vegetables",
     expandHeight = "15vh",
     showDisplay= 0,
     imageHeight = "100%",
     imageblur = "blur(3px)"

 }) =>
{   
    const [expand, setExpand] = useState(false)

    if (expand)
    {
        expandHeight = "70vh"
        showDisplay= 1
        imageHeight = "70%"
        imageblur = "blur(0px)"
    }


    return <ExpansionCont> 


                <AnimTextCont 
                    expansion = {expandHeight}

                    reveal = {showDisplay}>
                         
                     
                        <div className = "labelContainer" > 
                         
                            <div className="labelText" >
                              {text}
                            </div>
                            
                            <div className="labelIcon" onClick = {()=>setExpand(!expand)}>
                              <BsFillCaretDownFill/>
                            </div>
                        
                        </div>

                        <CategoryAnim 
                        src="/team4.gif"
                        heightImage = {imageHeight}
                        blury={imageblur}/>
                       
                       
                        <div className="textLots"> As Elizabeth had no longer any interest of her own to pursue, she turned her attention almost entirely on her sister and Mr. Bingley; and the train of agreeable reflections which her observations gave birth to, made her perhaps almost as happy as Jane. She saw her in idea settled in that very house, in all the felicity which a marriage of true affection could bestow; and she felt capable, under such circumstances, of endeavouring   </div>
                       

            
                </AnimTextCont>

            </ExpansionCont>
};
export default Expander;