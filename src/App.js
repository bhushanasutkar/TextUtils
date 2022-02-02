// rfce react functional based component
import './App.css';
import React, { useState } from 'react'

import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);

  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#052b0c';
      showalert('DarkMode Enabled!', 'Success');
      document.title = 'TextUtils-Darkmode';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert('LightMode Enabled!', 'Success');
      document.title = 'TextUtils-Lightmode';

    }
  }
  return (
    <>
       <Router>
      <Navbar mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="my-3">
      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
         
          <Route exact path="/">
          <Textform mode={mode} showalert={showalert} />
          </Route>
        </Switch>
      
      
      </div>
      </Router>
    </>
  );
}

export default App;
