import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState('');
    const handleonclickupper = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert('Converted to Uppercase!', 'Success');
    }
    const handleonclicklower = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert('Converted to Lowercase!', 'Success');
    }
    const clear = () => {
        setText("");
        props.showalert('Text Cleared!', 'Success');
    }
    const handlextraspaces=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showalert('Extra Space Removed!', 'Success');

    }
    const handlecopy=()=>{
       navigator.clipboard.writeText(text);
       props.showalert('Copied to Clipboard!', 'Success');
    }
    const handleonchange = (event) => {
        setText(event.target.value);
        // for instant text changes 

    }
    // value={text} html
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 class="p" className="my-4">TRY TEXTUTILS-WORD COUNTER, CHARACTER COUNTER, REMOVE EXTRA SPACES</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(93 132 102)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
                    < button disabled={text.length===0} type="button" onClick={handleonclickupper} className="btn btn-danger my-2 mx-1">Convert to UpperCase</button>
                    < button disabled={text.length===0} type="button" onClick={handleonclicklower} className="btn btn-success my-2 mx-1">Convert to LowerCase</button>
                    <button disabled={text.length===0} type="button" onClick={clear} className="btn btn-primary my-2 mx-1 ">Clear Text</button>
                    <button disabled={text.length===0} type="button" onClick={handlextraspaces} className="btn btn-warning my-2 mx-1 ">Remove Extra Spaces</button>
                    <button disabled={text.length===0} type="button" onClick={handlecopy} className="btn btn-info my-2 mx-1 ">Copy Text</button>
                </div>
            </div>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' , border: props.mode==='dark'?'2px solid white':'2px solid black' }}>
                <h2 style={{fontfamily:'cursive'}} className='hii'> TEXT SUMMARY</h2>
                <p> {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} Words and {text.length} Characters</p>
                <p>{0.08 * text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} Minutes to Read</p>
                <h2  className='hii'>PREVIEW</h2>
                 <textarea  className="form-control border-0 " value={text.length > 0 ? text : 'Nothing to Preview'} style={{ backgroundColor: props.mode === 'dark' ? '#052b0c' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
        </>
        // border border-warning rounded
    )
}

