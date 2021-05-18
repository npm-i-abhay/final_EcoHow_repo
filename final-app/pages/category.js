import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import MakeIcon from '../comps/CircleIcons'
import MyBanner from '../comps/Banner'
import Button from '../comps/Button'
import Menu from '../comps/Menu'
import {useState} from 'react'
import {useRouter} from 'next/router'
import HeroContainer from '../comps/HeroImage'
import {OrganicHelp} from '../data/text'
import {MenuReferences} from '../data/text'
import {MenuReferences2} from '../data/text'
import CategoryCards from '../comps/CategoryCards'
import styles from '../styles/main.module.css'
const CategoryContainer = styled.div`    

    .CatContainer 
    {
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items: center;
        height:100%;
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
                font-family: 'Spartan', sans-serif;

                .par{
                    font-family: 'Montserrat', sans-serif;
                }
            }
    }
`



export default function Category ({
    routeToChain2 = "/ecoHowIntro",
    hintChain4 = "Organics include things like produce and meat. Inorganics include things like plastic cardboard and electronics.",
    onClickChain = ()=> {},
    
   
})


{
const [route, setRoute] = useState("");
const [bgcolorChain, setbgcolor] = useState("#85817D50");
const [textChain, setText] = useState("Organic");
const [sourceChain, setSource] = useState("./Organic.gif");
const [shadowChain, setShadow] = useState("0px 1px 1px rgba(0, 0, 0, 0.25)");
const [bgcolorChain2, setbgcolor2] = useState("#85817D50");
const [textChain2, setText2] = useState("Inorganic");
const [sourceChain2, setSource2] = useState("./inorganic.gif");
const [shadowChain2, setShadow2] = useState("0px 1px 1px rgba(0, 0, 0, 0.25)");

var references = MenuReferences
const[moveHam, setMoveHam] = useState (true)
if (moveHam === false)
{
    references = MenuReferences2
}
    const router = useRouter();

    const HandleClickOrganic = () => 
    {
        if (textChain==="Organic")
        {
            setbgcolor("#5EBA92")
            setShadow("0px 4px 4px rgba(0, 0, 0, 0.45)")
            setbgcolor2("#85817D50")
            setShadow2("0px 4px 4px rgba(0, 0, 0, 0.00)")
        }
    }
    const HandleClickInorganic = () =>
    {
        if (textChain2==="Inorganic")
        {
            setbgcolor2("#21AAB5")
            setShadow2("0px 4px 4px rgba(0, 0, 0, 0.45)")
            setbgcolor("#85817D50")
            setShadow("0px 4px 4px rgba(0, 0, 0, 0.00)")
        }
    
    }
    
    if (bgcolorChain=== "#5EBA92"){
        onClickChain = ()=>router.push("/categoryDescription/organic")
    }
    
    
    if (bgcolorChain2 === "#21AAB5"){
        onClickChain = ()=>router.push("/categoryDescription/inorganic")
    }



    return   <CategoryContainer className ={styles.scroller} >
            <div className="CatContainer">
                    
                    
                <div >
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
                           onClick =        {()=> setMoveHam (!moveHam)}/>
                        })}
                    
                </div>  
                
            {moveHam &&
                <div className="textCont">
                    <h1>Pick a Category</h1>
                    <p className="par">To learn about a category, tap the respective category, then hit the select button to move on to that section.</p>
                </div>
            
            }

            {moveHam &&
                <CategoryCards
                bgcolor={bgcolorChain}
                text={textChain}
                gifSource={sourceChain}
                boxShadowDefault={shadowChain}
                onClick={HandleClickOrganic}
                />   
            }
            
            {moveHam &&
                <CategoryCards
                bgcolor={bgcolorChain2}
                text={textChain2}
                gifSource={sourceChain2}
                boxShadowDefault={shadowChain2}
                onClick={HandleClickInorganic}
                />             
            }

            {moveHam &&
                <Button text="Select" onClick={onClickChain} bgcolor="#368B8B"/>
            }

            </div>
             
             
             
             </CategoryContainer>
        }