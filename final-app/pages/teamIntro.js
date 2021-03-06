import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import Button from '../comps/Button'
import Menu from '../comps/Menu'
import HeroContainer from '../comps/HeroImage'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {MenuReferences} from '../data/text'
import {MenuReferences2} from '../data/text'
import people from '../data/text'
import styles from '../styles/main.module.css'
const CategoryContainer = styled.div`    

    .CatContainer 
    {
        display:flex;
        flex-direction:column;
        align-items: center;
        height:100vh;
        width:100%;
        transition:all 1s;
        background-color:${props => props.mainBg};
        background-image:url("./teamIntro.svg");
        background-repeat:no-repeat;
        background-position:50% 10%;
        background-size: 80% 70%;

        .spacer
        {
            display:flex;
            justify-content:space-evenly;
            height:80vh;
            flex-direction:column;
            align-items: center;
        }
            .CatHeader
            {
                
                display:flex;
                width:100%;
                justify-content:space-between;
                margin-bottom:2em;
            }
            .CatBanner
            {
                width: 100%;
                height:200px;
                display:flex;
                flex-direction:column;
                justify-content:space-around;
    
            } 
            .buttonCont
            {
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:flex-end;
                height:10%;
                font-family: 'Montserrat', sans-serif;
            }

            .animCont{
                display:flex;
                height:60vh;
                width:70%;
            }
    }
`

const TextCont= styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:70%;
justify-content:flex-start;
text-align:center;
font-family: 'Montserrat', sans-serif;
font-size:1.2em;
color:${props => props.descripTextCol};
`;

export default function Category ({
    routeToChain2 = "/home",
    hintChain4 = "Welcome to our app, this is our team of innovative individuals who share the same passion of making the world a better place.",
    newLabel="Next",
    onClick = () =>{}
})


{


   const router = useRouter();
   onClick = ()=>router.push("ecoHowIntro")
    var references = MenuReferences
    const[moveHam, setMoveHam] = useState (true)
    if (moveHam === false)
    {
        references = MenuReferences2
    }

    const [background, setBackground] = useState ("black")
    const [bodyText, setBody] = useState ("#F5F1ED")
    const [theme, setTheme] = useState (false)

    useEffect(()=>
          {
            if(theme)
            {
                setBackground("Black")
                setBody ("white")
            }
            if(theme == false)
            {
                setBackground("#F5F1ED")
                setBody ("black")
            }
            }, [theme]);


    return   <CategoryContainer className = {styles.scroller}
                                mainBg = {background} >
                <div className="CatContainer">
                    
                            
                        <div className="CatHeader">
                        {references.map((value, index)=>{
                           return <Menu 
                           key = {index}
                           routeToChain =   {routeToChain2}
                           hintChain3 =     {hintChain4}
                           rightPosition =  {value.rightPositionChain}
                           contVisble =     {value.contVisbleChain}
                           revealMenu =     {value.revealMenuChain}
                           menuHeight =     {value.menuHeightChain}
                           hideIcons =      {value.hideIconsChain}
                           toggle =         {value.toggleChain}
                           menuBg =         {value.menuBgChain}
                           transLine1={value.transLine1Chain}
                           transLineOp2={value.transLineOp2Chain}
                           transLine3={value.transLine3Chain}
                           darkDisplayToggleChain = "0"
                           onClick = {()=> setMoveHam (!moveHam)}/>
                        })} 
                        </div>  

            {moveHam&&            
                    <div className = "spacer">
                        <div className="animCont">
                            <HeroContainer
                                source="./team4names.gif"
                                borderRadius="0px"
                                />
                        </div>
                    
                        <TextCont>
                            <p>Our team wants to inspire you to be considerate of your waste habits while we pass on knowledge. </p>
                        
                            <p>We are taking steps to create real change</p>
                            
                        </TextCont>
                    
                        <br></br>
                        <br></br>

                        <div className = "buttonCont">                    
                        <Button text={newLabel} onClick= {onClick} bgcolor="#368B8B"/>
                        </div>
                    </div>
                }
                </div>
             
             
             
             </CategoryContainer>
}