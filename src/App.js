import React, {useState,useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Photocreator from "./components/Photo";
import Datecomponent from "./components/Date";
import Navigation from "./components/Nav";
import Footer from "./components/Footer";
import Titlecomponent from "./components/Title";
import Storycomponent from "./components/Story";

function App() {
 const [photo ,setPhoto] = useState("");
 const [story ,setStory] = useState("");
 const [date ,setdate] = useState("");
 const [url ,setUrl] = useState("");
 const [title ,setTitle] = useState("");
 
 useEffect(() => {
  const photoData = axios.get('https://lambda-github-api-server.herokuapp.com/')
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
 
  return (
    <div className="App">
      <Navigation/>
      <Titlecomponent title={title}/>
      <Photocreator photo={photo} />
      <Datecomponent date={date} url={url} />
      <Storycomponent story={story}/>
      <Footer/>
    </div>
  );
}

export default App;
