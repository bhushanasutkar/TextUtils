import React from 'react'

export default function About(props) {

    let mystyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#18411E' : 'white',
        border: props.mode === 'dark' ? '2px solid white' : '2px solid black'
    }

    //  let thestyle={
    //      color: props.mode==='light'?'dark':'light',
    //  }the way of defining an object;



    return (
        <div className="container">
            <h1 className="mx-auto mb-4 text-center" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}> ABOUT US</h1>
            <div>
                <div className="accordion" id="accordionExample"  >
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>FREE TO USE</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" style={mystyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters making it suitable for writing words and characters with given limits.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>ANALYSE THE TEXT</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                TextUtils gives you a way to Analyse your text quickly and efficiently. Be it word count,character count or total reading time
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>BROWSER COMPATIBLE</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" style={mystyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                This word counter software works in any browser such as Internet Explorer, Firefox, Chrome, Safari, Opera. It suits to count characrters in facebook, blog, books, excel document, Pdf-document, Essays and etc.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
