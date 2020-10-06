import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {withRouter} from "react-router-dom"
const Movielist = (props) => {
    const [show , setshow]=useState(false)
    const handleClose =()=>setshow(false)
    const handleShow =()=>setshow(true)
    const [title,settitle]=useState('')
    const [description,setdescription]=useState('')
    const [src,setsrc]=useState('')

    // const [rating,setRating]=useState(0)
    return ( <div>
      
        {props.Movies.filter(el=>el.title.toUpperCase().includes(props.keyword.toUpperCase())).map(el=>
            <div className="movielist-container">
                <img className="image-movie" src={el.source} alt=""/>
                <h1 style={{cursor:"pointer"}} onClick={()=>props.history.push("/description/"+el.title)}>{el.title}</h1>
                <h3>{el.description}</h3>
            </div>
            )}
       
        
            <div style={{textAlign:"center",paddingBottom:40}}>
      <Button variant="primary" onClick={handleShow}>
        Add Movies
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><input type="text" placeholder="title" onChange={(e)=>settitle(e.target.value)} /></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text"placeholder="description" size="40" onChange={(e)=>setdescription(e.target.value)} />
            <hr/>
            <input type="text"placeholder="image-source" size="50" onChange={(e)=>setsrc(e.target.value)} />
            <hr/>
            <input type="text" placeholder="rating" size="20"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>props.Addmovie({title:title,description:description,source:src})}>
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

    </div> );
}
 
export default withRouter(Movielist);