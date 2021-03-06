import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import MyButton from '../comps/Button'
import {useRouter} from 'next/router'
import '../DragDropTouch'
import HeroContainer from '../comps/HeroImage'

const GoodJob = styled.img `
height:100%;
`

const GoodJobCont = styled.div`
// position:absolute;
// border:2px solid green;
display:flex;
height:40%;
left:40%;
width:95%;
justify-content:center;
`



const DropCont = styled.img`

object-fit:cover;
height:100%;
width:100%;
// border:2px solid black;
transition:all .5s;

`;
const DropCont2 = styled.img`

object-fit:cover;
// border:2px solid black;
height:100%;
width:100%;
`;
const DropCont3 = styled.img`

object-fit:cover;
// border:2px solid black;
height:100%;
width:100%;
`;


const DragBox = styled.img`
cursor:pointer;
object-fit:contain;
margin-left:.2em;
// border:1px solid black;
// margin-right:1em;
height:40%;
// width:50%;

`;
const Wrapper = styled.div`
height:100vh;
width:100%;
// position:relative;
display:flex;
flex-direction:column;
// border:5px solid blue;
justify-content:flex-end;
background-image: url(/sortingBg1.png);
background-size:cover;
background-repeat:no-repeat;
// background-attachment:fixed;
background-position-x:-20em;
//  background-position-y: 20em;



.buttonCont{
    display:flex;
    flex-direction:columm;
    align-items:center;
    justify-content:center;
    width:100%;
    height:50%;
    transform:${props=>props.scale};
    transform-origin:${props=>props.origin};
    transition-duration:${props=>props.duration};
}

// .heroCont{
//     display:flex;
//     justify-content:center;
//     // height:10%
//     border:2px solid red;
//     transform:${props=>props.scale};
//     transform-origin:${props=>props.origin};
//     transition-duration:${props=>props.duration};

// }

.sortingItems
{
    // border:2px solid magenta;
    // justify-content:space-around;
    height:10%;
    display:flex;
    margin-bottom:4em;
    
    
    .spacer
    {
        // border:2px solid green;
        width:17%;
        display:flex;
    }

    .sortingSubAlone
    {
        // border:2px solid green;
        width:6%;
        display:flex;
        align-items:flex-start;
        justify-content:space-around;
    }
    .sortingSub1
    {
        // border:2px solid green;
        width:17%;
        display:flex;
        align-items:flex-end;
        justify-content:space-around;
    }
    .sortingSub2
    {
        // border:2px solid green;
        width:35%;
        display:flex;
        align-items:center;
        justify-content:space-around;
    }
    .sortingSub3
    {
        // border:2px solid green;
        width:25%;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
}

.dropTragetsCont
{

    display:flex;
    // border:2px solid red;
    align-items:flex-end;
    
    justify-content:center;
    height:30vh;
    width:100%;

    .imgConts
    {
        // border:2px solid yellow;
        height:60%;
        width:60%;
    }
}


`
const HeroCont = styled.div`
display:flex;
justify-content:center;
// height:10%
// border:2px solid red;
transform:${props=>props.scale};
transform-origin:${props=>props.origin};
transition-duration:${props=>props.duration};
`;


var boxInd = null
var change = 1;
var timer = null
var timer2 = null
var timer3 = null
var counter = 1

export default function DnD({
   
    
})
{
    // var audio =  ("/audio/correct.wav")
    // const correct = () => 
    // {
    //     new Audio(audio).play()
    // }

   

    // var audio2 =  ("/audio/incorrect.wav")
    // const incorrect = () => 
    // {
    //     new Audio(audio2).play()
    // }
    // var audio3 =  ("/audio/SoClean.mp3")
    // const soClean = () => 
    // {
    //     new Audio(audio3).play()
    // }


    const router = useRouter()
    const [box, setBox] = useState([true, true,true, true,true, true,true, true,true])
    const [changeSrc, setSource] = useState("/blackbins/black1.png")
    const [changeSrc2, setSource2] = useState("/bluebins/blue1.png")
    const [changeSrc3, setSource3] = useState("/greenbins/green1.png")
    const [showGoodJob, setGoodJob] = useState (false)
    const [showButton, setButton] = useState (false)
    const[heroScale, setScale] = useState("scale(0,0)")
    const[heroOrigin, setOrigin] = useState("50% 50%")
    const[heroDuration, setDuration] = useState("0s")
    // const [box2, setBox2] = useState(true)
 
    
        useEffect(()=>
        {
            if (counter == 10)
            {
                setGoodJob(true)
                setButton(true)
                // soClean()
                new Audio("/audio/SoClean.mp3").play()
                setScale("scale(1,1)")
                setDuration("1.5s")
            }

       }, [counter]);

    
    const onDragStart = (ind) =>
    {
        console.log("begining", ind)
        boxInd = ind
    }
    
        const onDrag = (e) =>
        {   
            e.preventDefault()
      
        }
    
    const onDragEnd = (e) =>
    {
        console.log("ending")
    }
        

    const onDragOver = (e) =>
    {
        e.preventDefault()
    }
      
    const onDrop = (e) =>
    {   
        e.preventDefault()
        console.log("I dropped")
        clearInterval(timer)
        e.target.style.backgroundColor = ""
        timer =null
        setSource ("/blackbins/black1.png")
        if (boxInd === 5 || boxInd === 6 || boxInd === 7)

        
        {
            new Audio("/audio/correct.wav").play()
            // correct()
            box[boxInd] = false;
            setBox([...box]);
            counter += 1
            console.log(counter)
        }
            
        
        else
        {
            new Audio("/audio/incorrect.wav").play()
        //    incorrect()
        }

    }

    const onDrop2 = (e) =>
    {   
        e.preventDefault()
        console.log("I dropped")
        clearInterval(timer2)
        e.target.style.backgroundColor = ""
        timer =null
        setSource2 ("/bluebins/blue1.png")
        if(boxInd === 0||boxInd === 1 || boxInd === 4 )

        {
            // correct()
            new Audio("/audio/correct.wav").play()
            box[boxInd] = false;
            setBox([...box]);
            counter += 1
        }

        else
        {
            // incorrect()
            new Audio("/audio/incorrect.wav").play()
        }
    }
    const onDrop3 = (e) =>
    {   
        e.preventDefault()
        console.log("I dropped")
        clearInterval(timer3)
        e.target.style.backgroundColor = ""
        setSource3 ("/greenbins/green1.png")
        timer =null
        if(boxInd === 2 || boxInd === 3 ||boxInd === 8)

        {
            // correct()
            new Audio("/audio/correct.wav").play()
            box[boxInd] = false;
            setBox([...box]);
            counter += 1
        }
        else
        {
            // incorrect()
            new Audio("/audio/incorrect.wav").play()
        }
    }


    const onDragEnter = (e)=>
    {
        e.preventDefault()
        // e.target.style.backgroundColor = "red"
        

    timer =  setInterval(function()
        {

            change++
            if (change>90)
            {
                change = 0
            }
            setSource ("/blackbins/black" + change + ".png")
            // console.log(change, sourceN)
        
        },50)
       
    }


    const onDragEnter2 = (e)=>
    {
        e.preventDefault()
        // e.target.style.backgroundColor = "red"
        

    timer2 =  setInterval(function()
        {

            change++
            if (change>90)
            {
                change = 0
            }
            setSource2 ("/bluebins/blue" + change + ".png")
            // console.log(change, sourceN)
        
        },50)
       
    }
    const onDragEnter3 = (e)=>
    {
        e.preventDefault()
        // e.target.style.backgroundColor = "red"
        

    timer3 =  setInterval(function()
        {

            change++
            if (change>90)
            {
                change = 0
            }
            setSource3 ("/greenbins/green" + change + ".png")
            // console.log(change, sourceN)
        
        },50)
       
    }


    const onDragLeave = (e)=>
    {
        e.preventDefault()
        clearInterval(timer)
        timer =null
        setSource ("/blackbins/black1.png")
        e.target.style.backgroundColor = ""
    }
    const onDragLeave2 = (e)=>
    {
        e.preventDefault()
        clearInterval(timer2)
        timer2 =null
        setSource2 ("/bluebins/blue1.png")
        e.target.style.backgroundColor = ""
    }
    const onDragLeave3 = (e)=>
    {
        e.preventDefault()
        clearInterval(timer3)
        timer3 =null
        setSource3 ("/greenbins/green1.png")
        e.target.style.backgroundColor = ""
    }

    return<Wrapper>
  
    {showGoodJob &&
        <GoodJobCont>
            <GoodJob src="/firework.gif" />
        </GoodJobCont>
    }

       
       <HeroCont scale={heroScale} origin={heroOrigin} duration={heroDuration}>
            <HeroContainer
            source="./logo.svg"
            borderRadius="0px"
            />
        </HeroCont>
        
        <div className="buttonCont">
            
            {showButton &&    
                    <MyButton 
                    scale={heroScale} 
                    origin={heroOrigin} 
                    duration={heroDuration}
                    text="Return Home"
                    bgcolor="#5eba92"
                    onClick = {()=> router.push ("/home")}/>
            }    
                
            



        </div>

        <div className = "dropTragetsCont">     


            <div className= "imgConts">  
                <DropCont
                onDragOver = {onDragOver}
                onDrop = {onDrop}
                onDragEnter = {onDragEnter}
                onDragLeave = {onDragLeave}
                src = {changeSrc}
                id = "cont-one"/>
            </div>    


            <div className= "imgConts">    
                <DropCont2
                onDragOver = {onDragOver}
                onDrop = {onDrop2}
                onDragEnter = {onDragEnter2}
                onDragLeave = {onDragLeave2}
                src = {changeSrc2}
                /> 
            </div>    


            <div className= "imgConts">
                <DropCont3
                onDragOver = {onDragOver}
                onDrop = {onDrop3}
                onDragEnter = {onDragEnter3}
                onDragLeave = {onDragLeave3}
                src = {changeSrc3}
                /> 
            </div> 
        </div>  



            <div className = "sortingItems">
               
                <div className = "sortingSubAlone spacer">              
                        {box[0] && 
                                <DragBox 
                                    draggable = {true}
                                    onDragStart = {()=>onDragStart(0)}
                                    onDrag = {onDrag}
                                    onDragEnd = {onDragEnd}
                                    src = "/sorting/can.png"
                                /> 
                        }
                </div>
                
                <div className = "sortingSub1  spacer" id = "one" >
                        {box[1] && 
                                <DragBox 
                                    draggable = {true}
                                    onDragStart = {()=>onDragStart(1)}
                                    onDrag = {onDrag}
                                    onDragEnd = {onDragEnd}
                                    src = "/sorting/cardboard.png"/> 
                        }
                        {box[2] && 
                                <DragBox 
                                    draggable = {true}
                                    onDragStart = {()=>onDragStart(2)}
                                    onDrag = {onDrag}
                                    onDragEnd = {onDragEnd}
                                    src = "/sorting/fruit.png"/> 
                        }
                </div>

                

                <div className = "sortingSub2 spacer"> 

                        {box[3] && 
                                <DragBox 
                                    draggable = {true}
                                    onDragStart = {()=>onDragStart(3)}
                                    onDrag = {onDrag}
                                    onDragEnd = {onDragEnd}
                                    src = "/sorting/gardenwaste.png"/> 
                        }
                        {box[4] && 
                                <DragBox 
                                    draggable = {true}
                                    onDragStart = {()=>onDragStart(4)}
                                    onDrag = {onDrag}
                                    onDragEnd = {onDragEnd}
                                    src = "/sorting/glass.png"/> 
                        }



                        {box[5] && 
                                <DragBox 
                                    draggable = {true}
                                    onDragStart = {()=>onDragStart(5)}
                                    onDrag = {onDrag}
                                    onDragEnd = {onDragEnd}
                                    src = "/sorting/plastic-bags.png"/> 
                        }

                </div>
                


                <div className = "sortingSub3 spacer">
                    {box[6] && 
                            <DragBox 
                                draggable = {true}
                                onDragStart = {()=>onDragStart(6)}
                                onDrag = {onDrag}
                                onDragEnd = {onDragEnd}
                                src = "/sorting/poop.png"/> 
                    }



                    {box[7] && 
                            <DragBox 
                                draggable = {true}
                                onDragStart = {()=>onDragStart(7)}
                                onDrag = {onDrag}
                                onDragEnd = {onDragEnd}
                                src = "/sorting/styrofoam.png"/> 
                    }

                </div>

                {box[8] && 
                        <DragBox 
                            draggable = {true}
                            onDragStart = {()=>onDragStart(8)}
                            onDrag = {onDrag}
                            onDragEnd = {onDragEnd}
                            src = "/sorting/wood.png"/> 
                }
                    
        </div>


                



            </Wrapper>
}