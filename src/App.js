import { useState, useEffect } from 'react';
import './App.css';


const App = () => {
  const name = "Daniel D";
  const isNameShowing = true;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(10)
  }, [])

  return (
    <div className="App container bg-dark">
      <h1 className='text-light'>
        HELLO REACT and Developer {isNameShowing ? name : "Anonymous!"}!
      </h1>
      <button 
        onClick={() => setCounter((nextCount) => nextCount + 1)}
      >+
      </button>
      <h2 className='text-light'>{counter}</h2>
      <button
        onClick={() => setCounter((prevCount) => prevCount - 1)}
      >-</button>
      <hr className='text-light'></hr>
      <h1 className='text-light'>A test text from a recent news...</h1>
      <br></br>
      <h3 className='text-light'>
        FTX has filed for bankruptcy protection in the US after the struggling cryptocurrency exchange failed in a last-ditch effort to secure a rescue package. 
      Earlier this year, leading voices from the cryptocurrency industry, including FTX's Sam Bankman-Fried and Binance CEO 'CZ', told the story of how the cryptocurrency industry ballooned into a market worth more than $2tn with little regulatory oversight. 
      How did regulators lose control and can they get a grip now?
      </h3>
    </div>
  );
}

export default App;