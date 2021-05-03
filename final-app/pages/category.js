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
import CategoryCards from '../comps/CategoryCards'

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
        


            .animCont{
                display:flex;
                height:40vh;
                width:50%;
            }
}

            .textCont{
                display:flex;
                flex-direction:column;
                align-items:center;
                width:70%;
                justify-content:flex-start;
                text-align:center;
            }
    }
`



export default function Category ({
    routeToChain2 = "/home",
    hintChain4 = "",
   
})


{

const [bgcolorChain, setbgcolor] = useState("#85817D");
const [textChain, setText] = useState("Organic");
const [sourceChain, setSource] = useState("./Organic.gif");
const [shadowChain, setShadow] = useState("0px 1px 1px rgba(0, 0, 0, 0.25)");
const [bgcolorChain2, setbgcolor2] = useState("#85817D");
const [textChain2, setText2] = useState("Inorganic");
const [sourceChain2, setSource2] = useState("./inorganic.gif");

    var toggle = null
    
    // var arbitSourceNew = "/empower.gif"
    const router = useRouter();

    const HandleClickOrganic = () => 
    {
        if (textChain==="Organic")
        {
            setbgcolor("#5EBA92")
            setShadow("0px 4px 4px rgba(0, 0, 0, 0.25)")
            setbgcolor2("#85817D")
        }
    }
    const HandleClickInorganic = () =>
    {
        if (textChain2==="Inorganic")
        {
            setbgcolor2("#21AAB5")
            setShadow("0px 4px 4px rgba(0, 0, 0, 0.25)")
            setbgcolor("#85817D")
        }
    
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
                
                <div className="textCont">
                <h1>Pick a Category</h1>
                <p>To learn about a category, tap the respective category, then hit the select button to move on to that section.</p>
                </div>
                <CategoryCards
                bgcolor={bgcolorChain}
                text={textChain}
                gifSource={sourceChain}
                boxShadowDefault={shadowChain}
                onClick={HandleClickOrganic}
                />   
                <CategoryCards
                bgcolor={bgcolorChain2}
                text={textChain2}
                gifSource={sourceChain2}
                boxShadowDefault={shadowChain}
                onClick={HandleClickInorganic}
                />             
                <Button text="Select" onClick= {handleButton} bgcolor="#368B8B"/>
              
       

                </div>
             
             
             
             </CategoryContainer>
        }