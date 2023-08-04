import './App.css';
import React, { useState } from 'react';
import Loader from "./components/loader/index";
import Side from './components/Sidebar/index';
import Main from "./pages/landing-page/index";
import Foot from "./components/Footer/index";
import Navbar from "./components/Sidebar/navbar";

function App() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div className="App">
      {/* <Loader /> */}
      <Navbar setSidebar={setSidebar} sidebar={sidebar}/>
      {sidebar && <Side setSidebar={setSidebar} sidebar={sidebar}/> } 
      <Main />
      <Foot />
    </div>
  );
}

export default App;

