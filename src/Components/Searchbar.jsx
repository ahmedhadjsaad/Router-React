import React from 'react'
// import ReactStars from "react-rating-stars-component";
const Searchbar = (props) => {
    // const ratingChanged = (newRating) => {
    // console.log(newRating);
    //   };
    return ( <div>
        <input type="text" placeholder="Search" className="searchbar" onChange={(e)=>{props.Search(e.target.value)}}/>
        {/* <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
         />, */}

    </div> );
}
 
export default Searchbar;