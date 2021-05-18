import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import Button from '../comps/Button'
import Menu from '../comps/Menu'
import people from '../data/text'
import HeroContainer from '../comps/HeroImage'
import {useRouter} from 'next/router'
import {useState} from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import {MenuReferences} from '../data/text'
import {MenuReferences2} from '../data/text'
import styles from '../styles/main.module.css'

const CategoryContainer = styled.div`    

    .CatContainer 
    {
        display:flex;
        // justify-content:space-;
        flex-direction:column;
        align-items: center;
        height:100vh;
        width:100vw;
        background-color:#F5F1ED;


        .flexContainer{
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
        }

        .searchBar{
            display:flex;
            // border:2px solid red;
            width:90%;
            margin-bottom:1em;
            .searchButton
            {
                // border:1px solid red;
                    font-size:2em;
                    margin-left:1em;
            }
            #inputField
            {
                width:85%;
                border:1px solid #21AAB5;
                border-radius:5px;
                background-color: none;
                
            }
        }

        .searchImage
        {
            // border:2px solid blue;
            height:90%;
            width:90%;
        }

        .dynamicCont
        {   
            height:60%;
            // border:2px solid blue;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around;


            .smallHead 
            {
                text-align:center;
            }
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
margin-bottom:2em;


`;





export default function SearchResults ({
    routeToChain2 = "/home",
    hintChain4 = "search for an item to see which bin to properly dispose of it.",
    newLabel="Next",
    onClick = () =>{},
    dummyText = "sssdd"
})


{
   const router = useRouter();
   const [resultText, setResultText] = useState("");
   const [imgSource, setImgSource] = useState("/bluearrow.png");
   const [bigText, setBigText] = useState("");
   const [smallText, setSmallText] = useState("");
   onClick = ()=>router.push("ecoHowIntro")
   var references = MenuReferences
   const[moveHam, setMoveHam] = useState (true)
   if (moveHam === false)
   {
       references = MenuReferences2
   }



   if (process.browser) 
    { 
        localStorage.setItem("people", people)
    }

   const handleStorage = ()=>
    {
        var searchBar = document.getElementById("inputField")

            var peeps = JSON.parse(localStorage.getItem("people"))
            let i = null

            for (i=0; i<peeps.length; i++)
            {
                
                var valueCheck = peeps[i].head.toLowerCase()
                var searchValueLower = searchBar.value.toLowerCase()
                if (valueCheck.includes(searchValueLower))
                {
                    setBigText(peeps[i].head)
                    setSmallText(peeps[i].sub)
                    setImgSource(peeps[i].source)
                    setResultText(peeps[i].body)
                }
            }
    }


 

    return   <CategoryContainer className = {styles.scroller}>
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
                           onClick =        {()=> setMoveHam (!moveHam)}/>
                        })} 
                        </div>      
                    
            <div className="flexContainer">
            {moveHam&&   
            <div className= "searchBar">

                    <input 
                    type = "text"
                    placeholder = "search to see where to properly recycle an item"
                    id = "inputField"/>
                    
                    <div 
                    className = "searchButton"
                    onClick = {handleStorage}>
                    
                    <BiSearchAlt/>
                    
                    </div>
            </div>
            }
            
            {moveHam&&        <div className = "dynamicCont">

                <div className = "headings">
                    <h1 className="bigHead"> {bigText} </h1>
                    <h3 className="smallHead"> {smallText} </h3>
                </div>

                <div className="searchImage">
                    <HeroContainer
                        source={imgSource}
                        borderRadius="0px"/>
                </div>
                

                <TextCont id= "searchText">
                    {resultText}
                </TextCont>
              
        </div>
        
            }
            </div>

                </div>
        
             
            
             </CategoryContainer>
}