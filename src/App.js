import React, {useState,useEffect} from "react";
import "./App.css";
import axios from 'axios';

function App() {
 const [photo ,setPhoto] = useState();
 const [story ,setStory] = useState();
 const [date ,setdate] = useState();
 const [url ,setUrl] = useState();
 const [title ,setTitle] = useState();
    const photoData = axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-09-10')
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
    


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
