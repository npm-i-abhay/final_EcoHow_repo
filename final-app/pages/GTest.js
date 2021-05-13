import React, {useState} from 'react'
import styled from 'styled-components'

const DropCont = styled.img`
position:relative;
object-fit:cover;
top:70%;
height:100%;
width:100%;
border:2px solid black;
// background-color:blue;
margin-left:-5em;
transition:all .5s;

`;
const DropCont2 = styled.img`
position:relative;
// left:50%;
top:50%;
border:2px solid black;
height:100%;
width:100%;
// background-color:green;

`;
const DropCont3 = styled.img`
position:relative;
// left:50%;
top:50%;
border:2px solid black;
height:100%;
width:100%;
// background-color:green;

`;


const DragBox = styled.img`
cursor:pointer;
border:1px solid black;
margin:1em;

`;

var boxInd = null
var change = 1;
var timer = null
export default function DnD({
    
    sourceN = "/alien 2/alienrwalk19.gif"
    
})
{

    const [box, setBox] = useState([true, true])
    const [changeSrc, setSource] = useState("/blackbins/black1.png")
    const [changeSrc2, setSource2] = useState("/bluebins/blue1.png")
    const [changeSrc3, setSource3] = useState("/greenbins/green1.png")
    // const [box2, setBox2] = useState(true)

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
        if (boxInd === 0)

        {

            box[boxInd] = false;
            setBox([...box]);
        
        }

    }

    const onDrop2 = (e) =>
    {   
        e.preventDefault()
        console.log("I dropped")
        if(boxInd === 1)

        {
            box[boxInd] = false;
            setBox([...box]);
            
        }
    }
    const onDrop3 = (e) =>
    {   
        e.preventDefault()
        console.log("I dropped")
        if(boxInd === 1)

        {
            box[boxInd] = false;
            setBox([...box]);
            
        }
    }


    const onDragEnter = (e)=>
    {
        e.preventDefault()
        e.target.style.backgroundColor = "red"
        

    timer =  setInterval(function()
        {

            change++
            if (change>90)
            {
                change = 0
            }
            setSource ("/blackbins/black" + change + ".png")
            console.log(change, sourceN)
        
        },50)
       
    }


    const onDragEnter2 = (e)=>
    {
        e.preventDefault()
        e.target.style.backgroundColor = "red"
        

    timer =  setInterval(function()
        {

            change++
            if (change>90)
            {
                change = 0
            }
            setSource2 ("/bluebins/blue" + change + ".png")
            console.log(change, sourceN)
        
        },50)
       
    }
    const onDragEnter3 = (e)=>
    {
        e.preventDefault()
        e.target.style.backgroundColor = "red"
        

    timer =  setInterval(function()
        {

            change++
            if (change>90)
            {
                change = 0
            }
            setSource3 ("/greenbins/green" + change + ".png")
            console.log(change, sourceN)
        
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
        clearInterval(timer)
        timer =null
        setSource2 ("/bluebins/blue1.png")
        e.target.style.backgroundColor = ""
    }
    const onDragLeave3 = (e)=>
    {
        e.preventDefault()
        clearInterval(timer)
        timer =null
        setSource3 ("/greenbins/green1.png")
        e.target.style.backgroundColor = ""
    }
    return<div>
    <div>
        {box[0] && 
            <DragBox 
                draggable = {true}
                onDragStart = {()=>onDragStart(0)}
                onDrag = {onDrag}
                onDragEnd = {onDragEnd}
                src = "/broccoli.png"
             /> 
        }
            
             
    </div>           
        {box[1] && 
            <DragBox 
                draggable = {true}
                onDragStart = {()=>onDragStart(1)}
                onDrag = {onDrag}
                onDragEnd = {onDragEnd}
                src = "/broccoli.png"/> 
            

        }
        <DropCont
        onDragOver = {onDragOver}
        onDrop = {onDrop}
        onDragEnter = {onDragEnter}
        onDragLeave = {onDragLeave}
        src = {changeSrc}
        id = "cont-one"/>
        
        
        <DropCont2
        onDragOver = {onDragOver}
        onDrop = {onDrop2}
        onDragEnter = {onDragEnter2}
        onDragLeave = {onDragLeave2}
        src = {changeSrc2}
        /> 
         
        <DropCont3
        onDragOver = {onDragOver}
        onDrop = {onDrop3}
        onDragEnter = {onDragEnter3}
        onDragLeave = {onDragLeave3}
        src = {changeSrc3}
        /> 
         
        </div>
}