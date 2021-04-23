import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import MakeIcon from '../comps/CircleIcons'
import MyBanner from '../comps/Banner'
import Button from '../comps/Button'
import Carousel from '../comps/Carousel'
import {useState} from 'react'
import {useRouter} from 'next/router'
import HeroContainer from '../comps/HeroImage'

const CategoryContainer = styled.div`
    

    .CatContainer 
    {
        display:;
        flex-direction:column;
        align-items: center;
        height:100vh;
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


export default function Category ({})


{
    var toggle = null
    
    // var arbitSourceNew = "/empower.gif"
    const router = useRouter();
    const [newSource, setSource] = useState("/team4.gif")
    const [newHeader, setHeader] = useState("Organic")
    const [newRoute, setRoute] = useState("/home")

    const handleCarouselRight = ()=>
    {

        setSource ("/empower.gif")
        setHeader ("Inorganic")
        console.log(newHeader)
        // toggle = true
        // newRoute = "/evaluation"
    }
  
    const handleCarouselLeft = ()=>
    {

        setSource ("/team4.gif")
        setHeader ("Organic")
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
        }
    }

    console.log(newSource)

    return   <CategoryContainer>
                <div className="CatContainer">
                    
                    
                <div className="CatHeader">
                    <MakeIcon routeTo="/home"/>
                    <MakeIcon text="?"/>
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

                <Button text="ENTER" onClick= {handleButton}/>
                </div>

                </div>
             
             
             
             </CategoryContainer>
}