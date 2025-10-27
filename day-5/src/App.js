import { useState } from 'react';
import { Assignment1 } from "./components/Assignl1"; // ✅ make sure file name and export match
import { MouseTracker } from './components/Mousemove';
import { TimerComponent } from './components/SecondProblem/Timer';
import { ScrollTracker } from "./components/SecondProblem/Scroll"

const App = () => {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  function increment() {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    setSubmittedText(inputText); // only update when user clicks submit
  };

  return (
    <>
      <h1>Hello</h1>
      <h1>{count}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <br /><br />

      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>

      <h1>Check: {submittedText}</h1>

      <Assignment1 /> {/* ✅ Correct syntax */}
      <MouseTracker/>
      < TimerComponent/>
      <ScrollTracker/>
    </>
  );
};

export default App;
