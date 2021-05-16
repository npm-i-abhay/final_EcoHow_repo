import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div `
width:100vw;
height:120%;
margin-top:20px;
margin-bottom:20px;
`

const LogoImage = styled.img `
object-fit:contain;
height:100%;
width:100%;
position:relative;
`

const MyLogo = ({}) =>
{
    return <LogoContainer>

                <LogoImage src="/logo.svg" />

                
            </LogoContainer>
}

export default MyLogo 