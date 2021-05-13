import React, {useState} from 'react'
import styled from 'styled-components'

const DropCont = styled.img`
position:absolute;
left:20%;
top:50%;
height:300px;
width:300px;
// background-color:blue;
margin-left:-5em;
transition:all .5s;

`;
const DropCont2 = styled.div`
position:absolute;
left:50%;
top:50%;
height:200px;
width:300px;
background-color:green;

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
    const [changeSrc, setSource] = useState("/bluebinframes/bin1.gif")
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
        setSource ("/bluebinframes/bin1.gif")
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


    const onDragEnter = (e)=>
    {
        e.target.style.backgroundColor = "red"
        

    timer =  setInterval(function()
        {

            change++
            if (change>150)
            {
                change = 0
            }
            setSource ("/bluebinframes/bin" + change + ".gif")
            console.log(change, sourceN)
        
        },50)
       
    }
    const onDragLeave = (e)=>
    {
        clearInterval(timer)
        timer =null
        setSource ("/bluebinframes/bin1.gif")
        e.target.style.backgroundColor = ""
    }
    return<div>

        {box[0] && 
            <DragBox 
                draggable = {true}
                onDragStart = {()=>onDragStart(0)}
                onDrag = {onDrag}
                onDragEnd = {onDragEnd}
                src = "/broccoli.png"
             /> 
            
               
            
        }
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
        > 
            Drop Container2 
        </DropCont2>
        </div>
}