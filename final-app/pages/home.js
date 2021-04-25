import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import HeroContainer from '../comps/HeroImage'
import MyLogo from '../comps/Logo'
import {Router, useRouter} from 'next/router'
import Button from '../comps/Button'


const HomeContainer = styled.div`

.wrapper
{
    display:flex;
    flex-direction:column;
    align-items: center;
    height:100%;
    width:100vw;
    background-color:#376293;

        .button
        {
            height:200px;
            width:100%;
            display:flex;
            flex-direction:column;
            justify-content:flex-end;
            align-items:center;
        }

}

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
                            <HeroContainer />

                        </div>

                        <div className = "button">

                            <Button text="ENTER" onClick ={ ()=> router.push("/category") }/>

                        </div>    

                    </div>

            </HomeContainer>
}