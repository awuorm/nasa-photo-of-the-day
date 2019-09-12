import React, {useState,useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Navigation from "./components/Nav";
import Titlecomponent from "./components/Title";
import Footer from "./components/Footer";


function App() {
 const [photo ,setPhoto] = useState("");
 const [story ,setStory] = useState("");
 const [date ,setdate] = useState("");
 const [url ,setUrl] = useState("");
 const [title ,setTitle] = useState("");
 const datesArray = ["2012-03-14","2013-03-14","","2014-03-14","2015-03-14"]; //
 
 useEffect(() => {
    const photoData = axios.get("https://lambda-github-api-server.herokuapp.com")
    .then(
      response => {
        const res = response.data;
        setPhoto(res.hdurl);
        setStory(res.explanation);
        setdate(res.date);
        setUrl(res.url);
        setTitle(res.title);
      })
    .catch(error =>
      `Unable to display data due to network error`);
    
   },[])

  return (
    <div className="App">
      <Navigation/>
      <Titlecomponent title={title} photo={photo} date={date} url={url} story={story}/>
      <Footer/>
    </div>
  );
}

export default App;
