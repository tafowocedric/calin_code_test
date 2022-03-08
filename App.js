import React from "react";
import './App.css';


const Counter = () => {
  const [count, setCount] = React.useState(0);
  const frozen = React.useRef(false);

  const increment = () => {
    if (frozen.current) {
      return;
    }
    setCount((prevCount) => prevCount + 1);
  };

  React.useEffect(() => {
    increment();
    frozen.current = true;
    increment();  
  }, []);

  return (
    <div>
      <p style={{ fontSize: 48 }}>{count}</p>
      <p>{`is frozen: ${frozen.current}`}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
