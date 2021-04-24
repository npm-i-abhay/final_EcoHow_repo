import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'
import {useRouter} from 'next/router'
import MakeIcon from '../../comps/CircleIcons'
import MyBanner from '../../comps/Banner'
import Slider from '../../comps/Slider'
import Menu from '../../comps/Menu'
import Button from '../../comps/Button'
import {OrganicHelp} from '../../data/text'
import {InorganicHelp} from '../../data/text'


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

export default function Evalution ({
    labelTextChain1= "How strong is your knowledge of composting & organic waste?",
    labelTextChain2= "Do you have a compost at home or in your building?",
    labelTextChain3= "How often do use your compost a week?",
    routeToChain2 = "/subcat/organic",
    onClickChain = ()=> {},
    hintChain4 = OrganicHelp.Evaluation.content



})

{
    const router = useRouter();
    const {evaluation} = router.query;

    if (evaluation === "inorganic")

    {
        labelTextChain1= "Do you understand how to sort recyclable items?",
        labelTextChain2= "Do you remember to recycle items properly at home?",
        labelTextChain3= "Do you purchase second-hand items?",
        routeToChain2="/subcat/inorganic"
        hintChain4 = InorganicHelp.Evaluation.content
    }

    const [valOne, setVal] = useState (0)
    const [valTwo, setValTwo] = useState (0)
    const [valThree, setValThree] = useState (0)
    const [newEvRoute, setEvRoute] = useState("/home")

const handleResult = ()=>
     {
         if (valOne - (-valTwo)- (-valThree) < 150 && evaluation === "inorganic")
         {
            setEvRoute(()=>router.push("/tips/inorganicbad"))
         }

         if (valOne - (-valTwo)- (-valThree) >= 150 && evaluation === "inorganic" )
         {
            setEvRoute(()=>router.push("/tips/inorganicgood"))
         }

         if (valOne - (-valTwo)- (-valThree) < 150 && evaluation === "organic")
         {
            setEvRoute(()=>router.push("/tips/organicbad"))
         }

         if (valOne - (-valTwo)- (-valThree) >= 150 && evaluation === "organic" )
         {
            setEvRoute(()=>router.push("/tips/organicgood"))
         }
        //  =============================================================================
         if (valOne - (-valTwo)- (-valThree) < 150 && evaluation === "organic")
         {
            setEvRoute(()=>router.push("/tips/organicbad"))
         }

         if (valOne - (-valTwo)- (-valThree) >= 150 && evaluation === "organic" )
         {
            setEvRoute(()=>router.push("/tips/organicgood"))
         }
     }
       console.log(valOne - (-valTwo)- (-valThree))
    return  <EvaluationCont> 

                <div className="EvHeader">
                    
                    <div className="hamburger">
                        <Menu 
                            routeToChain = {routeToChain2}
                            hintChain3 =    {hintChain4} />
                    </div>

                </div>  

                <div className="EvBanner">
                    <MyBanner 
                    bgColor="#E5E5E5" 
                    text="EVALUATION"/>
                </div>

                <div className = "SliderQuestion" > 
                    <Slider 
                    Labeltext={labelTextChain1}
                    onChangeTwo = {(e)=>setVal(e.target.value)}
                    />                    
                    <Slider
                    Labeltext = {labelTextChain2} 
                    onChangeTwo = {(e)=>setValTwo(e.target.value)} />
                    <Slider
                    Labeltext = {labelTextChain3}
                    onChangeTwo = {(e)=>setValThree(e.target.value)}/>

                </div>
        
                <Button 
                text="Lets See How"
                onClick = {handleResult} />
            </EvaluationCont>
}