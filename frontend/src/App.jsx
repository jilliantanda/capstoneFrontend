import "./App.css";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
       <BrowserRouter>
      <Home />
    </BrowserRouter>
    </div>
  );
}

export default App;

