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

        .searchBar{
            display:flex;
            // border:2px solid red;
            width:90%;
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
            height:50%;
            width:50%;
        }

        .dynamicCont
        {   
            height:60%;
            border:2px solid blue;
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


`;





export default function SearchResults ({
    routeToChain2 = "/home",
    hintChain4 = "",
    newLabel="Next",
    onClick = () =>{},
    dummyText = "sssdd"
})


{
   const router = useRouter();
   const [resultText, setResultText] = useState("test");
   const [bigText, setBigText] = useState("bigText");
   const [smallText, setSmallText] = useState("smallText");
   onClick = ()=>router.push("ecoHowIntro")
 
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
                if (searchBar.value == JSON.stringify(peeps[i].head))
                {
                    setResultText(JSON.stringify(peeps[i].sub))
                    setBigText(JSON.stringify(peeps[i].source))
                    setSmallText(JSON.stringify(peeps[i].body))
                }
            }
    }


 

    return   <CategoryContainer>
        <div className="CatContainer">
                    
                    
            <div className="CatHeader">
                    <Menu
                    routeToChain = {routeToChain2}
                    hintChain3 = {hintChain4} />
            </div>  
                
            <div className= "searchBar">

                    <input 
                    type = "text"
                    placeholder = "search for henry's missing soul"
                    id = "inputField"/>
                    
                    <div 
                    className = "searchButton"
                    onClick = {handleStorage}>
                    
                    <BiSearchAlt/>
                    
                    </div>
            </div>
        <div className = "dynamicCont">

                <div className = "headings">
                    <h1 className="bigHead"> {bigText} </h1>
                    <h3 className="smallHead"> {smallText} </h3>
                </div>

                <div className="searchImage">
                    <HeroContainer
                        source="/bluearrow.png"
                        borderRadius="0px"/>
                </div>
                

                <TextCont id= "searchText">
                    {resultText}
                </TextCont>
              
        </div>
                <div className = "buttonCont">                    
                <Button text={newLabel} onClick= {onClick} bgcolor="#368B8B"/>
                </div>
       

                </div>
             
             
             
             </CategoryContainer>
}