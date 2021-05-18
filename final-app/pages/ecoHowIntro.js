import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import MakeIcon from '../comps/CircleIcons'
import MyBanner from '../comps/Banner'
import Button from '../comps/Button'
import Menu from '../comps/Menu'
import Carousel from '../comps/Carousel'
import {useState} from 'react'
import {useRouter} from 'next/router'
import HeroContainer from '../comps/HeroImage'
import {OrganicHelp} from '../data/text'
import {MenuReferences} from '../data/text'
import {MenuReferences2} from '../data/text'
import styles from '../styles/main.module.css'


const CategoryContainer = styled.div`    

    .CatContainer 
    {
        display:flex;
        juatify-content:center;
        flex-direction:column;
        align-items: center;
        height:100vh;
        width:100vw;
        background-color:#F5F1ED;
        background-image:url("./ecoHowIntro.svg");
        background-repeat:no-repeat;
        // background-position:50% 10%;
        background-size: 100%;
        

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
                justify-content:space-between;
                height:10%;
                // border:2px solid black;
    
            }


            .animCont{
                display:flex;
                align-items:center;
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
.boldFont{
    font-weight:bold
}


`;





export default function Category ({
    routeToChain2 = "/teamIntro",
    hintChain4 = "Here at EcoHow we place the utmost priority on cleaning up our earth and adjusting our harmful habits. In this app you will learsn valuable knowledge in a fun and interactive way.",
    newLabel="Next",
    onClick = () =>{}
})


{
  
    const router = useRouter();
    onClick = ()=>router.push("category")
   
    var references = MenuReferences
    const[moveHam, setMoveHam] = useState (true)
    if (moveHam === false)
    {
        references = MenuReferences2
    }
    const handleButton = () =>
    {   
        if (newHeader === "Inorganic")
        {
            setRoute(()=>router.push("./subcat/inorganic"))
            
        }
        if (newHeader === "Organic")
        {
            setRoute(()=>router.push("./subcat/organic"))
            hintChain4 = OrganicHelp.CategorySelection.content
        }
    }

 

    return   <CategoryContainer className = {styles.scroller} >
                <div className="CatContainer">
                    
                    
                <div className="CatHeader">
                {references.map((value, index)=>{
                           return <Menu 
                           key = {index}
                           routeToChain = {routeToChain2}
                           hintChain3 =    {hintChain4}
                           rightPosition = {value.rightPositionChain}
                           contVisble = {value.contVisbleChain}
                           revealMenu = {value.revealMenuChain}
                           menuHeight = {value.menuHeightChain}
                           hideIcons ={value.hideIconsChain}
                           toggle = {value.toggleChain}
                           menuBg = {value.menuBgChain}
                           transLine1={value.transLine1Chain}
                           transLineOp2={value.transLineOp2Chain}
                           transLine3={value.transLine3Chain}
                           onClick = {()=> setMoveHam (!moveHam)}/>
                        })} 
                </div>  
                
            {moveHam &&                        
                <div className = "spacer">
                <TextCont>
                    <p>While you are enjoying EcoHow, you will gain knowledge, tips and have fun while doing so.</p>
                </TextCont>
               
            
               <div className="animCont">
               <HeroContainer
                source="./light-bulb.gif"
                borderRadius="0px"
                />
                </div>
 
                <TextCont>
                    <p>Always check the help button if you are feeling lost. Now, enjoy learning! </p>
                </TextCont>
              

                <div className = "buttonCont">                    
                <Button text={newLabel} onClick= {onClick} bgcolor="#368B8B" text="Let's Begin"/>
                </div>
       
            </div>
            }
                </div>
             
             
             
             </CategoryContainer>
}