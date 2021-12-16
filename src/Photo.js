import React from 'react';
import styled from 'styled-components';

const StyledPhoto = styled.img`
    width: 90vw;
`
const StyledTitle = styled.h3`
    color: #444444;
    display:flex;
    flex-direction: column;
    align-items: center;
`

const StyledP = styled.p`
    color: #444444;
    display: flex;
    justify-content: right;
`

const Photo = (props) => {
    const { data } = props
    return (
        <div className="Photo">
            <StyledTitle> {props.data.title} </StyledTitle>
            <StyledPhoto src={props.data.url} alt='Astronomy Photo of the Day (for nerds only)'/>
            <StyledP>{props.data.copyright} {props.data.date}</StyledP>
            <h2>Mission Statement</h2>
            <ul>Advancing Technology and Science Through Flight</ul>
<ul>Perform flight research and technology integration to revolutionize aviation and pioneer aerospace technology</ul>
<ul>Validate space exploration concepts</ul>
<ul>Conduct airborne remote sensing and science observations</ul>
        </div>
    )
}
export default Photo;