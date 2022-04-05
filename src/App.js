import React, { useState, useEffect } from "react";
import "./App.css";
import ResidentsList from "./Components/ResidentsList";
import Search from "./Components/Search";
import Error from "./Components/Error";

function App() {
  const [errMessage, setErrmessage] = useState();
  const [studentsAdded, setStudentsAdded] = useState([]);
  const [outed, setOuted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
       console.log("settimeout girdi");
      setOuted(true);
       console.log("outed:", outed);
     }, 5000);
   }, [outed]);
 

  return (
    <div className="App">
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search
          outed={outed}
          setOuted={setOuted}
          errMessage={errMessage}
          setErrmessage={setErrmessage}
          setStudentsAdded={setStudentsAdded}
          studentsAdded={studentsAdded}
        />
        <Error setOuted={setOuted} outed={outed} errMessage={errMessage} />
        <ResidentsList studentsAdded={studentsAdded} />
      </div>
    </div>
  );
}

export default App;
