import React from 'react'
import styled from 'styled-components'
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
                    <Slider Labeltext="blarg blarg that's how nick types"/>
                    <Slider/>
                    <Slider/>

                </div>

                <Button text="Lets See How " routeTo="/tips"/>
            </EvaluationCont>
}