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

const CategoryContainer = styled.div`
    

    .CatContainer 
    {
        display:;
        flex-direction:column;
        align-items: center;
        height:100%;
        width:100vw;
        background-color:#376293;


            .CatHeader
            {
                
                display:flex;
                width:100%;
                justify-content:space-between;
            }
            .CatBanner
            {
                width: 100%;
                height:200px;
                display:flex;
                flex-direction:column;
                justify-content:space-around;
            } 
            .CatGraphic
            {
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:space-between;
                height:400px;
                // border:2px solid black;
            }
    }
`


export default function Category ({
    routeToChain2 = "/home",
    hintChain4 = "",
})


{
    var toggle = null
    
    // var arbitSourceNew = "/empower.gif"
    const router = useRouter();
    const [newSource, setSource] = useState("/organic.gif")
    const [newHeader, setHeader] = useState("Organic")
    const [newRoute, setRoute] = useState("/home")
    const [newLabel, setLabel] = useState("Organic Content")


    const handleCarouselRight = ()=>
    {

        setSource ("/inorganic.gif")
        setHeader ("Inorganic")
        console.log(newHeader)
        setLabel("Inorganic Content")
        // toggle = true
        // newRoute = "/evaluation"
    }
  
    const handleCarouselLeft = ()=>
    {

        setSource ("/organic.gif")
        setHeader ("Organic")
        setLabel("Organic Content")
        // newRoute = "/tips"
        // toggle = false
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

    console.log(newSource)

    return   <CategoryContainer>
                <div className="CatContainer">
                    
                    
                <div className="CatHeader">
                    <Menu
                    routeToChain = {routeToChain2}
                    hintChain3 = {hintChain4} />
                </div>  
                       
                <div className="CatBanner">
                    <MyBanner 
                    bgColor="#E5E5E5" bannerHeight="70px"
                    text={newHeader}/>
                </div>

                <div className = "CatGraphic"> 
                {/* <HeroContainer
                 borderRadius="200px"
                 source= "/empower.gif"/> */}
                <Carousel 
                CarouselSource = {newSource}
                onClick = {handleCarouselRight}
                onClickLeft = {handleCarouselLeft}
                     />

                <Button text={newLabel} onClick= {handleButton}/>
                </div>

                </div>
             
             
             
             </CategoryContainer>
}