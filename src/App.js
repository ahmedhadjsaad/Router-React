import React, { useState } from 'react';
import './App.css';
import Movielist from './Components/Movielist';
import Nav from './Components/Navbar';
import Searchbar from './Components/Searchbar';
import Title from './Components/Title';
import ReactPlayer from 'react-player'
import {BrowserRouter as Router , Switch , Route  ,Link} from 'react-router-dom'
import Description from './Components/Description';

const App = (props) => {
  const [Movies,setMovies] = useState(
    [{title:"The Godfather", description:"The Gadfather Movie", rating:3 , source:"https://methodshop.com/wp-content/uploads/godfather.jpg" , bande_annonce : "https://www.youtube.com/embed/sY1S34973zA?start=5" },
    {title:"The Platform", description:"The Platform Movie", rating:3 , source:"https://i.pinimg.com/736x/9a/64/e6/9a64e60c344deb5c20255d615eafbd0d.jpg" , bande_annonce : "https://www.youtube.com/embed/RlfooqeZcdY?start=5"  },
    {title:"Star Wars", description:"Star wars Movie", rating:4 , source:"https://media.lesechos.com/api/v1/images/view/5df9b9a5d286c254fc20d894/1280x720/0602422245162-web-tete.jpg" , bande_annonce : "https://www.youtube.com/embed/8Qn_spdM5Zg?start=5"}])
    const [keyword,setkeyword]=useState("")

    const Addmovie = (x) => {
      setMovies([...Movies,{title:x.title,description:x.description,source:x.source}])
    }

    const Search = (x) => {
      setkeyword(x)
    }

  
  return ( <div>
    <Router>
    <Route path="/" component={()=><Nav/>}/>
    <Title/>
    <Route exact path="/" component={()=><Searchbar Search={Search}/>}/>
    <Route exact path="/" component={()=><Movielist  Movies={Movies} Addmovie={Addmovie} keyword={keyword}/>}/>
    <Route path="/description/:title" component={(props)=><Description {...props} Movies={Movies} />}/>
    </Router>
  </div> );
}
 
export default App;