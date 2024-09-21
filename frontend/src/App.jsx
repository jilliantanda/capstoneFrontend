// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import "./App.css";
import DashNav from "./components/DashboardNav";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
// import { Homepage } from './pages/Homepage'
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
        {/* <DashNav /> */}
         <Home />
    </div>
  );
}

export default App;
