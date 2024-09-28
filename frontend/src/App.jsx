// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
         <Home />
    </div>
  );
}

export default App;
