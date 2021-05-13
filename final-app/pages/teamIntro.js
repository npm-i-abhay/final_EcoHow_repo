import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import Button from '../comps/Button'
import Menu from '../comps/Menu'
import HeroContainer from '../comps/HeroImage'
import {useRouter} from 'next/router'
import people from '../data/text'
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
        background-image:url("./teamIntro.svg");
        background-repeat:no-repeat;
        background-position:50% 10%;
        background-size: 70% 60%;


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
`;





// localStorage.setItem("people", people)


export default function Category ({
    routeToChain2 = "/home",
    hintChain4 = "",
    newLabel="Next",
    onClick = () =>{}
})


{


   const router = useRouter();
   onClick = ()=>router.push("ecoHowIntro")


 

    return   <CategoryContainer>
                <div className="CatContainer">
                    
                    
                <div className="CatHeader">
                    <Menu
                    routeToChain = {routeToChain2}
                    hintChain3 = {hintChain4} />
                </div>  
                

               <div className="animCont">
               <HeroContainer
                source="./ourTeam.gif"
                borderRadius="0px"
                />
                </div>
 
                <TextCont>
                    <p>Our team wants to Inspire you to be considerate of your waste habits while we pass on knowledge. </p>
                   
                    <p>We are taking steps to create real change</p>
                </TextCont>
              

                <div className = "buttonCont">                    
                <Button text={newLabel} onClick= {onClick} bgcolor="#368B8B"/>
                </div>
       

                </div>
             
             
             
             </CategoryContainer>
}