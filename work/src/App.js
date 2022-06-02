
import './App.css';
import {useState} from 'react';
import reactStringReplace from 'react-string-replace';

function App() {
  const [txt, setTxt] = useState("");
  const [copy, setCopy] = useState("");
  const [curr, setCurr] = useState("");

  const handleOver =()=> {
      let tx = reactStringReplace(txt, /([aeiouAEIOU])/g, (match, i) => (
        <span style={{ color: 'red' }} key={match + i}>{match}</span>
      ));
      setTxt(tx);
    }
  const handleChange = (event)=> {
    let tx=event.target.value;
    setCurr(tx);
    tx=tx.split("").reverse().join("");
    setTxt(tx);
    setCopy(tx);
  }
  const handleLeave =()=> {
    setTxt(copy);
  }
  const handleReset =()=> {
    let newText = "";
    setTxt(newText);
    setCopy(newText);
    setCurr("");
  }

  return (
    <div className="container my-3 mx-3">
      <div className="container form-group">
        <label><h5>Input Text Below- </h5></label>
        <textarea value={curr} className="form-control my-2" id="area1" placeholder="Enter text here" rows="8"  onChange={handleChange}></textarea>
      </div>
      <div className="container">
        <p onMouseEnter={handleOver} onMouseLeave={handleLeave}><strong>Reversed text-</strong> {txt}</p>
        <p><strong>Hover on the above text to see colored vowels.</strong></p>
        <button type="button" className="btn btn-info" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
