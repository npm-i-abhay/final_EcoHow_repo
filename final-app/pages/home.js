import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import HeroContainer from '../comps/HeroImage'
import MyLogo from '../comps/Logo'
import {Router, useRouter} from 'next/router'
import Button from '../comps/Button'

const HomeContainer = styled.div`
height:100%;
width:100%;
.wrapper
{
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-between;
    height:100vh;
    width:100vw;
    background: linear-gradient(180deg, rgba(136, 247, 234, 0.3) -22.28%, rgba(33, 170, 181, 0.3) 78.05%),
linear-gradient(0deg, #EDEDED, #EDEDED);


        .button
        {
            // height:200px;
            width:100%;
            display:flex;
            flex-direction:column;
            justify-content:flex-end;
            align-items:center;
            margin:2em;
        }

}
.graphic
{
    width:80%;
    height:80%;
}

`

const Clean = styled.button`
height:2em;
width:100%;
padding-right:1.5em;
padding-left:1.5em;
`

export default function HomePage (
    {
        
    })

{


   const router = useRouter()
    return  <HomeContainer>
                    <div className="wrapper"> 
                    <div className="logo">
                            <MyLogo/>  
                        </div>

                        <div className="graphic">
                            <HeroContainer 
                            source="./homePage.svg"
                            />

                        </div>

                        <div className = "button">

                            <Button text="Start"  bgcolor="#368B8B"onClick ={ ()=> router.push("/teamIntro") } />

                        </div>    

                    </div>

            </HomeContainer>
}