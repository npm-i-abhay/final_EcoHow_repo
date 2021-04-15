import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div `
width:304px;
height:216px;
margin-top:20px;
`

const LogoImage = styled.img `
object-fit:cover;
height:100%;
width:100%;
position:relative;
`

const MyLogo = ({}) =>
{
    return <LogoContainer>

                <LogoImage src="/logo.png" />

                
            </LogoContainer>
}

export default MyLogo 