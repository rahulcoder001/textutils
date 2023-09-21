import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const name = "rahul singh";

function App() {
  const [dark, setdark] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (dark === 'light') {
      setdark('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
      showalert("Dark mode has been enabled", "success");
    } else {
      setdark('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showalert("Dark mode has been disabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={dark} toggleMode={toggleMode} />
        <Alert Alert= {alert} />
        <div className='container'>
          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<Textform heading="Enter your text here" showalert={showalert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
