import React from 'react';
import styled from 'styled-components';


const DotCont = styled.div`
display:flex;
`;

const Dot1 = styled.div`
width: ${props=>props.width};
height: ${props=>props.height};
background-color: ${props=>props.colour};
border: 2px solid #F5F1ED;
border-radius:50%;
margin:0.2em;
`;


const ProgressDotComp = ({
width = "15px",
height = "15px",
dotColour = "#5EBA92"
}) =>{

	return <DotCont>
		<Dot1 width={width} height={height} colour={dotColour}/>
	
   
   
	</DotCont>
}

export default ProgressDotComp;