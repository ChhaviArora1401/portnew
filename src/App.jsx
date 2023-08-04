import './App.css';
import Loader from "./components/loader/index";
import Side from './components/Sidebar/index';
import Main from "./pages/landing-page/index";
import Foot from "./components/Footer/index";

function App() {
  return (
    <div className="App">
      {/* <Loader /> */}
      <Side />
      <Main />
      <Foot />
    </div>
  );
}

export default App;

