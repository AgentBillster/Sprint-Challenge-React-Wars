import React from "react";
import styled from "styled-components"

const DivvyDiv = styled.div`
color:black;
width:50vh;
border: 1px solid black;
border-radius: 10px;
display:flex;
flex-direction:column;
margin:auto
`;



function Card (props){
return (
<DivvyDiv>
    <div>
<h1>{props.name}</h1>
<p>height: {props.height},</p>
<p>Mass: {props.mass},</p>
<p>birth: {props.birth}</p>
</div>
</DivvyDiv>
)}

export default Card