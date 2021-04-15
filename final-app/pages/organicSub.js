import Head from 'next/head'
import React from 'react'
import MakeIcon from '../comps/CircleIcons'
import styled from 'styled-components'
import MyVeggie from '../comps/VeggieFruitIcon'
import MyBanner from '../comps/Banner'
import MyInfo from '../comps/RecycleInfo'


const TipsCont = styled.div `

.mainContainer
{
    display:flex;
    flex-direction:column;
    height:812px;
    width:375px;
    background-color:#376293;
    align-items:center;

        .iconHeader
        {
            width:100%;
            display:flex;
            justify-content:space-between;
        } 
        
        .banner
        {
            width: 90%;
            align-self:flex-end;
            height:125px;
            display:flex;
            flex-direction:column;
            justify-content:center;
        }

        .answersCont{
            display:flex;
            flex-direction:column
            height:50%;
            width:100%;
            background-color:#376293;
            justify-content:center;
            margin-bottom:50px;
        }

        .buttonCont{
            display:flex;
            flex-direction:column
            height:30%;
            width:100%;
            background-color:#376293; 
            justify-content:space-between;
            margin-bottom:10px;
        }

        .toggleCont{
            display:flex;
            flex-direction:column
            height:30%;
            width:100%;
            background-color#376293; 
            justify-content:center;
        }

        .textCont{
            display:flex;
            flex-direction:column
            justify-content:center;
            margin:50px;
        }
        }

}


`

export default function Tips ({
    screenHeight= 620
})
{
    return <TipsCont >
       
       <Head>
        <title> tips page </title>    
        </Head>
        
        
        <div className="mainContainer"> 
               
                <div className="iconHeader">
                    <MakeIcon/>
                    <MakeIcon/>
                    </div>  
                <div className="banner">
                    <MyVeggie/>
                    <MyBanner text="Vegetables"/>  
                </div>

                <div class="textCont">
                    <MyInfo text="Vegetables, plus roots and tubers have the highest wastage rates of any food.

It is important to know that vegetables contain a nitrogen, an ideal chemical compound for  compost. 

Just remember to bury it deep in the pile to avoid rodents."/>
                </div>
               

        </div>
        </TipsCont>
}


