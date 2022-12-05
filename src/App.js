import Poem1 from './components/Poem1';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './vendors/bootstrap-4.0.0-dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Poem1/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
