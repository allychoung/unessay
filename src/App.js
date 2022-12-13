import Poem1 from './components/Poem1';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './vendors/bootstrap-4.0.0-dist/css/bootstrap.min.css';
import './App.css';
import HomeScreen from './components/HomeScreen';
import Poem2 from './components/Poem2';
import Poem3 from './components/Poem3';
import Poem4 from './components/Poem4';
import Poem5 from './components/Poem5';
import Poem6 from './components/Poem6';
import Works from './components/Works';
import About from './components/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen/>}>
          </Route>
          <Route path="/poem1" element={<Poem1/>}></Route>
          <Route path="/poem2" element={<Poem2/>}></Route>
          <Route path="/poem3" element={<Poem3/>}></Route>
          <Route path="/poem4" element={<Poem4/>}></Route>
          <Route path="/poem5" element={<Poem5/>}></Route>
          <Route path="/poem6" element={<Poem6/>}></Route>

          <Route path="/workscited" element={<Works/>}></Route>
          <Route path="/premise" element={<About/>}></Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
