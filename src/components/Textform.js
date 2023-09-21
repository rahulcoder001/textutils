import React, {useState} from 'react'
export default function Textform(props) {
    const handleupclick = ()=>{
              // console.log('rahul');
              let newtext = text.toUpperCase();
              setText(newtext);
              props.showalert("Converted to upper case", "Sucess")
    }
    const handleonchange = (event)=>{
        // console.log('rahul');
        setText(event.target.value);
}
const handleoncopy = ()=>{
  var text = document.getElementById("exampleFormControlTextarea1");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showalert("suceesfully copied", "Sucess")
}
const handleonextraspace = () => {
  let newtext = text.split(/ +/);
  setText(newtext.join(" "));
  props.showalert("suceesfully remove spaces", "Sucess")
}

    const [text, setText] = useState("");
    
  return (
    <div>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" placeholder='Enter your text here' rows="10"></textarea>
</div>
<button className='btn btn-primary' onClick={handleupclick}>Convert to uppercase</button>
<button className='btn btn-primary mx-3' onClick={handleoncopy}>Copy text</button>
<button className='btn btn-primary mx-3' onClick={handleonextraspace}>Remove extra space</button>
<div className='container my-3'>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} word and {text.length} characters</p>
    <p>{text.split(" ").length*0.008} time taken to read</p>
    <p>your text :------{text}</p>
</div>
    </div>
  )
}
