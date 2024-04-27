import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  // const rootlevelProp = "I am app.js";
  // const rootlevelProp2 = "I am also app.js";
  
  
  
  const [rootlevelProp,setRootlevelProp] 
  = useState("I am app.js")

  const [rootlevelProp2,setRootlevelProp2] 
  = useState("I am also app.js")

  const [userData,setUserData] = useState({})
  console.log(userData,"App.js")
  return (
    <div className="App">
      Hello World
      <Header />
      <Body setUserData={setUserData} setRootlevelProp2={setRootlevelProp2} rootlevelProp2={rootlevelProp2} rootlevelProp={rootlevelProp} />
    </div>
  );
}

export default App;
