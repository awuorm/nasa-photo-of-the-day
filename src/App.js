import React, {useState,useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Photocreator from "./components/Photo";
import Datecomponent from "./components/Date";
import Navigation from "./components/Nav";
import Footer from "./components/Footer";
import Titlecomponent from "./components/Title";
import Storycomponent from "./components/Story";
import Formcomponent from "./components/Formdate";

function App() {
 const [photo ,setPhoto] = useState("");
 const [story ,setStory] = useState("");
 const [date ,setdate] = useState("");
 const [url ,setUrl] = useState("");
 const [title ,setTitle] = useState("");
 const datesArray = ["2012-03-14","2013-03-14","","2014-03-14","2012-03-14"]; //
 
 useEffect(() => {
    //datesArray.map((date) => {
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
      error);
    
   },[])
  //} )
  
 
  return (
    <div className="App">
      <Navigation/>
      <div>
      <Titlecomponent title={title}/>
      <Photocreator photo={photo} />
      <Datecomponent date={date} url={url} />
      <Formcomponent/>
      <Storycomponent story={story}/>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
