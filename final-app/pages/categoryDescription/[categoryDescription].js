import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import Button from '../../comps/Button'
import Menu from '../../comps/Menu'
import {useRouter} from 'next/router'
import HeroContainer from '../../comps/HeroImage'
import {OrganicHelp} from '../../data/text'


const CategoryContainer = styled.div`    

    .CatContainer 
    {
        display:flex;
        juatify-content:center;
        flex-direction:column;
        align-items: center;
        height:100%;
        width:100vw;
        background-color:#F5F1ED;
        background-image:url("./teamIntro.svg");
        background-repeat:no-repeat;
        background-position:50% 10%;
        background-size: 40% 30%;


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


`;





export default function Category ({
    routeToChain2 = "/home",
    hintChain4 = "",
    newLabel="Next",
    heading="Organic",
    catDescription="The organic sectcion will teach you about composting, we will share insight on different materials that can help create balanced compost Click “enter” to begin",
    bgcolor1="#5EBA92",
})


{
    const router = useRouter();
    const {categoryDescription} = router.query

    if (categoryDescription == "organic"){

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

 

    return   <CategoryContainer>
                <div className="CatContainer">
                    
                    
                <div className="CatHeader">
                    <Menu
                    routeToChain = {routeToChain2}
                    hintChain3 = {hintChain4} />
                </div>  
                

               <div className="animCont">
               <HeroContainer
                source="../organic-2.gif"
                borderRadius="0px"
                />
                </div>
 
                <TextCont>
                    <h1>{heading}</h1>
                   
                    <p>{catDescription}</p>
                </TextCont>
              

                <div className = "buttonCont">                    
                <Button text="Enter"  bgcolor={bgcolor1}/>
                <Button text="Back to Categories"  bgcolor="#368B8B"/>
                </div>
       

                </div>
             
             
             
             </CategoryContainer>
}