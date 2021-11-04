import React from 'react';
// import styled from 

const Photo = (props) => {
    const { data } = props
    return (
        <div className="Photo">
            <h3> {props.data.title} </h3>
            <img src={props.data.url} alt='Nasa photo of the day'/>
            <p>{props.data.copyright} {props.data.date}</p>
        </div>
    )
}
export default Photo;