import React from 'react';
import styled from 'styled-components';

const TextCont = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:255px;
    height:235px;
    border-radius: 12px;
    background-color:#F5F1ED;
`;
const TextContent = styled.div`
padding:20px;
font-size:14px;
`;

const RecycleInfo= ({
    text="test"
}) => {

    return <div>
        <TextCont>
        <TextContent> {text}</TextContent>   
        </TextCont>
    </div>
}

export default RecycleInfo;