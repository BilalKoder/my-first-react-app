import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About';

function App() {

  const title = "Sign Up Form"

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const menu = {
    menuOne: "Home",
    menuTwo: "About Us"
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" menu={menu} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Form showAlert={showAlert} title={title} />} />
            <Route exact path="/about-us" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
