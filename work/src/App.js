
import './App.css';
import {useState} from 'react';

function App() {
  const [txt, setTxt] = useState('');

const handleChange = (text)=> {
  let tx=document.getElementById("area1");
  setTxt(tx);
}

const handleHover = ()=> {
  let txt1=txt;
  for(let i=0;i<txt1.length();i++)
  {
    if(txt1[i]==='a' || txt1[i]==='e' || txt1[i]==='i' || txt1[i]==='o' || txt1[i]==='u' || 
    txt1[i]==='A' || txt1[i]==='E' || txt1[i]==='I' || txt1[i]==='O' || txt1[i]==='U')
    {
        txt1[i].color('blue');
    }
  }
  document.getElementById("area1").innerHTML(txt1);
}

  return (
    <>
      <div className="container form-group my-3"  onHover={handleHover}>
        <label forHTML="exampleFormControlTextarea1">Example textarea</label>
        <textarea className="form-control" id="area1" rows="3"  onChange={handleChange}></textarea>
      </div>
    </>
  );
}

export default App;
