import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import Button from '../../comps/Button'
import Menu from '../../comps/Menu'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import HeroContainer from '../../comps/HeroImage'
import {OrganicHelp} from '../../data/text'
import {MenuReferences} from '../../data/text'
import {MenuReferences2} from '../../data/text'
import styles from '../../styles/main.module.css'

const CategoryContainer = styled.div`    

    .CatContainer 
    {
        display:flex;
        juatify-content:center;
        flex-direction:column;
        align-items: center;
        height:100%;
        width:100vw;
        transition:all 1s;
        background-color:${props=> props.themeDark};

        .spacer
        {
            display:flex;
            justify-content:space-evenly;
            flex-direction:column;
            align-items: center;
            
            
            .flexContainer
            {
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
            }
        }


            .CatHeader
            {
                
                display:flex;
                width:100%;
                justify-content:space-between;
                margin-bottom:2em;
        
            }
            .buttonCont
            {
                display:flex;
                align-items:center;
                justify-content:space-evenly;
                height:10%;
                width:100%;
                margin:1em;
                
    
            }


            .animCont{
                display:flex;
                justify-content:center;
                align-items:flex-start;
                height:50vh;
                width:100%;
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
transition:all 1s;
color:${props => props.textToggleCol};
font-family: 'Spartan', sans-serif;


    .heading
    {
       
    }
    .par{
        font-family: 'Montserrat', sans-serif;
        text-align:left;
    }

`;

const DiscImg = styled.img`
object-fit:contain;
height:100%;
margin-top:-1.5em;

`



export default function Category ({
    routeToChain2 = "/category",
    hintChain4 = "Organics include things like produce and meat. Inorganics include things like plastic cardboard and electronics.",
    newLabel="Next",
    heading="Organic",
    catDescription="The organic sectcion will teach you about composting, we will share insight on different materials that can help create balanced compost Click “enter” to begin",
    bgcolor1="#5EBA92",
    gifSource="",
    toggleTextCol = "black",
    onClickChain = ()=> {},
})


{
    const router = useRouter();
    const {categoryDescription} = router.query
    var references = MenuReferences
    const[moveHam, setMoveHam] = useState (true)
    if (moveHam === false)
    {
        references = MenuReferences2
    }

    if (categoryDescription == "organic"){
        heading="Organic",
        catDescription="The organic sectcion will teach you about composting, we will share insight on different materials that can help create balanced compost Click “enter” to begin",
        bgcolor1="#5EBA92",
        gifSource="../organic-2.gif"
        onClickChain = ()=>router.push("/subcat/organic")

    }

    if (categoryDescription == "inorganic"){
        heading="Inorganic",
        catDescription="The inorganic sectcion will talk about non-green waste, we will teach you about the proper ways to dispose of waste and recycle. Click “enter” to begin",
        bgcolor1="#71C4CA",
        gifSource="../inorganic-2.gif"
        onClickChain = ()=>router.push("/subcat/inorganic")

    }

    const [background, setBackground] = useState ("#F5F1ED")
    const [bodyText, setBody] = useState ("black")
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

    return   <CategoryContainer
             className = {styles.scroller} 
              themeDark = {background}>
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
                           transLine1   =  {value.transLine1Chain}
                           transLineOp2={value.transLineOp2Chain}
                           transLine3={value.transLine3Chain}
                           onClick =        {()=> setMoveHam (!moveHam)}/>
                        })} 
                        </div>  
                {moveHam &&            
                    <div className ="spacer">
                        <div className ="flexContainer">    
                            <div className="animCont">
                                <DiscImg src = {gifSource}/>
                            </div>
        
                            <TextCont textToggleCol= {bodyText} >
                                <h1 className = "heading" >{heading}</h1>
                                <p className="par">{catDescription}</p>
                            </TextCont>
                        </div>
                            

                            <div className = "buttonCont">                    
                            <Button onClick = { ()=>router.push("/category")}text="Categories" bgcolor="#368B8B"/>
                            <Button text="Enter"  bgcolor={bgcolor1} onClick={onClickChain}/>
                            <Button text="darkMode"  bgcolor={bgcolor1} 
                            onClick={()=> setTheme(!theme)}/>
                            </div>
                    
                     </div>
                }
                </div>
             
             
             
             </CategoryContainer>
}