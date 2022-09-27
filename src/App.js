import { Route, Routes } from "react-router-dom";
import Electronics from "./components/Electronics";
import Home from "./components/Home";
import Login from "./components/Login";
import Mobile from "./components/Mobile";
import Navbar from "./components/Navbar";
import NewRelease from "./components/NewRelease";
import Notfound from "./components/Notfound";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='mobile' element={<Mobile/>}/>
          <Route path='new-release' element={<NewRelease/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='electronics' element={<Electronics/>}/>
          <Route path='*' element={<Notfound/>}/>
      </Routes>
    </div>
  );
}

export default App;
