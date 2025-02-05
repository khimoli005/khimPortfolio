import  {useState} from 'react'


export default function TextForm(props) {
    const handUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handloClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handclearClick = ()=>{
        let newText ='';
        setText(newText)
    }
    //CopyButton
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    //space Button
     const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnClick = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }


    const [text, setText] = useState('');
  return (
    <> 
    <div className='container'> 
         <div className='container my-3'>
        <TextForm heading="Enter the text analyze below"/> 
        </div>

        <h1>{props}</h1> 
        <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnClick} id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handloClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handclearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-2"> 
        <h2>Your Text summary</h2>
        <p>{text.split(" ").length} words,{text.length} character</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
