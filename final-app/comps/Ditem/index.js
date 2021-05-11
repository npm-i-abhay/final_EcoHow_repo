
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import Dboard from '../Dboard'



const Item = (props)=>
{
    const dragStart = e =>
{
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id)

    setTimeout(()=>{
        target.style.display = "none"
    },1 )
    

}

const dragOver = e =>
{
    e.stopPropagation()
}

    return (
        
        <div
        id = {props.id}
        onDragOver = {dragOver}
        draggable = {props.draggable}
        className = {props.className}
        onDragStart = {dragStart}>
        
            {props.children}
        </div>

    )
}

export default Item;