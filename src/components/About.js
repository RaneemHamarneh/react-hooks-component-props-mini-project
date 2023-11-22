import React from "react";


export default function About(props){
    const {image="https://via.placeholder.com/215" , about}= props
    
    return ( 
        <aside>
            <img alt="blog logo" src={image} placeholder= {image}  />
            <p>{about}</p>

        </aside>
    )
}