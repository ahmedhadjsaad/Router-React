import React from 'react'


const Description = (props) => {
    return ( <div>
{props.Movies.filter(el=>el.title===props.match.params.title).map(el=>
    <div>
        <p>{el.title}</p>
        <p>{el.description}</p>
        <iframe width="560" height="315" src={el.bande_annonce} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>)}
   
    </div> );
}
 
export default Description;