import './App.css';
import React, { useEffect, useState } from 'react';
import Loader from "./components/loader/index";
import Side from './components/Sidebar/index';
import Main from "./pages/landing-page/index";
import Foot from "./components/Footer/index";
import Navbar from "./components/Sidebar/navbar";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 900 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 990px)");
    mediaQuery.addListener(setMQuery);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeListener(setMQuery);
  }, []);

  return (
    <div className="App">
      {/* <Loader /> */}
      {mQuery && !mQuery.matches ? (<Navbar setSidebar={setSidebar} sidebar={sidebar}/>) : <Side setSidebar={setSidebar} sidebar={sidebar}/> } 
      {mQuery && !mQuery.matches ? (sidebar && <Side setSidebar={setSidebar} sidebar={sidebar}/>) : ("")}
      <Main />
      <Foot />
    </div>
  );
}

export default App;

