import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{fontFamily:"Arial", textAlign:"center", padding:"40px"}}>
      
      <header>
        <h1 style={{color:"#4CAF50"}}>My First React App</h1>
        <p>Welcome to my React project 🚀</p>
      </header>

      <section style={{marginTop:"40px"}}>
        <h2>Counter Example</h2>
        <p>You clicked {count} times</p>

        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding:"10px 20px",
            fontSize:"16px",
            background:"#4CAF50",
            color:"white",
            border:"none",
            borderRadius:"6px",
            cursor:"pointer"
          }}
        >
          Click Me
        </button>
      </section>

      <section style={{marginTop:"50px"}}>
        <h2>Features</h2>
        <ul style={{listStyle:"none"}}>
          <li>⚡ Fast with Vite</li>
          <li>⚛️ Built using React</li>
          <li>🎨 Easy to customize</li>
        </ul>
      </section>

      <footer style={{marginTop:"60px", color:"gray"}}>
        <p>© 2026 Krishna React Project</p>
      </footer>

    </div>
  );
}

export default App;