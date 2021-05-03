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
import ProgressDots from '../comps/progressDots'

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
                height:40vh;
                width:50%;
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

.boldFont{
    font-weight:bold
}
`;





export default function Category ({
    routeToChain2 = "/home",
    hintChain4 = "",
    newLabel="Next",
    onClick = () =>{}
})


{
  
    const router = useRouter();
    onClick = ()=>router.push("category")


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

 

    return   <CategoryContainer>
                <div className="CatContainer">
                    
                    
                <div className="CatHeader">
                    <Menu
                    routeToChain = {routeToChain2}
                    hintChain3 = {hintChain4} />
                </div>  
                

                <TextCont>
                    <p>While you are enjoying EcoHow, you will gain knowledge, tips and have fun while doing so.</p>
                </TextCont>
               
            
               <div className="animCont">
               <HeroContainer
                source="./lightBulb.svg"
                borderRadius="0px"
                />
                </div>
 
                <TextCont>
                    <p>Always check the help button if you are feeling lost.Now, enjoy learning! </p>
                </TextCont>
              

                <div className = "buttonCont">                    
                <Button text={newLabel} onClick= {onClick} bgcolor="#368B8B"/>
                </div>
       

                </div>
             
             
             
             </CategoryContainer>
}