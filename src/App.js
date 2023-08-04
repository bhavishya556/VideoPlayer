import "./App.css";
import data from "./data";
import Video from "./comp/Video"
import { useState } from "react";

function App() {
  const[Info, setInfo] = useState(data);
  return (

    <Video Info={Info}></Video>
   
   
  );
}

export default App;
