import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'
import {useRouter} from 'next/router'
import MakeIcon from '../comps/CircleIcons'
import MyBanner from '../comps/Banner'
import Slider from '../comps/Slider'
import Menu from '../comps/Menu'
import Button from '../comps/Button'

const EvaluationCont = styled.div `
        display:flex;
        flex-direction:column;
        align-items: center;
        height:100vh;
        width:100vw;
        background-color:#376293;

        .EvHeader
        {
            display:flex;
            width:100%;
            justify-content:space-between;

            .leftButtons
            {
                display:flex;
            }
        }

        .EvBanner
        {
            width:100%;
        }

        .SliderQuestion
        {
            height:600px;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around;
        }

`

export default function Evalution ({})

{
    const router = useRouter();
    const [valOne, setVal] = useState (0)
    const [valTwo, setValTwo] = useState (0)
    const [valThree, setValThree] = useState (0)
    const [newEvRoute, setEvRoute] = useState("/home")

const handleResult = ()=>
     {
         if (valOne - (-valTwo)- (-valThree) < 150)
         {
            setEvRoute(()=>router.push("/home"))
         }

         if (valOne - (-valTwo)- (-valThree) >= 150)
         {
            setEvRoute(()=>router.push("/tips"))
         }
     }
       console.log(valOne - (-valTwo)- (-valThree))
    return  <EvaluationCont> 

                <div className="EvHeader">
                    
                    <div className="hamburger">
                        <Menu/>
                    </div>

                </div>  

                <div className="EvBanner">
                    <MyBanner 
                    bgColor="#E5E5E5" 
                    text="EVALUATION"/>
                </div>

                <div className = "SliderQuestion" > 
                    <Slider 
                    Labeltext="blarg blarg that's how nick types"
                    onChangeTwo = {(e)=>setVal(e.target.value)}
                    />                    
                    <Slider onChangeTwo = {(e)=>setValTwo(e.target.value)} />
                    <Slider onChangeTwo = {(e)=>setValThree(e.target.value)}/>

                </div>
        
                <Button 
                text="Lets See How"
                onClick = {handleResult} />
            </EvaluationCont>
}