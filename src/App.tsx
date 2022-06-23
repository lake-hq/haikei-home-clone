import {useState} from "react";

//inspiration: https://haikei.app/

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App col w-screen justify-center items-center">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
