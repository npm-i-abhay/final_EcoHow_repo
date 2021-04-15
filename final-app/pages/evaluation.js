import React from 'react'
import styled from 'styled-components'
import MakeIcon from '../comps/CircleIcons'
import MyBanner from '../comps/Banner'
import Slider from '../comps/Slider'
import Button from '../comps/Button'

const EvaluationCont = styled.div `
        display:flex;
        flex-direction:column;
        align-items: center;
        height:812px;
        width:375px;
        background-color:#376293;

        .EvHeader
        {
            display:flex;
            width:100%;
            justify-content:space-between;
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
    return  <EvaluationCont> 

                <div className="EvHeader">
                    <MakeIcon routeTo="/organicSub"/>
                    <MakeIcon text="?"/>
                </div>  

                <div className="EvBanner">
                    <MyBanner 
                    bgColor="#E5E5E5" 
                    text="EVALUATION"/>
                </div>

                <div className = "SliderQuestion" > 
                    <Slider/>
                    <Slider/>
                    <Slider/>

                </div>

                <Button text="Lets See How You Did" routeTo="/tips"/>
            </EvaluationCont>
}