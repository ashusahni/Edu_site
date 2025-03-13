import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PostComponents from "./components/postComponents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <PostComponents />
        all the money 
        
      </div>
    </>
  );
}

export default App;
