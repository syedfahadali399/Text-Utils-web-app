import { Routes, Route } from "react-router-dom";
import AlertMessage from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/Textform";
import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";

export default function App() {

  const [alert, setAlert] = useState(null)
  const [mode, setMode] = useState({
    color: "black",
    background: "white",
    text: "Light Mode"
  })

  const showAlert = (message) => {
    setAlert(message)
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
  
    if(mode.background === "black") {
      setMode({
        color: "black",
        background: "white",
        text: "Light Mode"
      })
      showAlert("Light Mode has been enabled")
    } else {
      setMode({
        color: "white",
        background: "black",
        text: "Dark Mode"
      })
      showAlert("Dark Mode has been enabled")
    }
    
  }

  return (
    <div style={{background:mode.background, color:mode.color}} className="h-full">
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      
    </div>
  )
}