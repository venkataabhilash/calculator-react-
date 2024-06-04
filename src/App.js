import './App.css';
import About from './components/About';
import Display from './components/Display';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './components/Nav';
import './components/calc.css'
import Animation from './components/Animation';

function App() {
  return (
    <>
      <BrowserRouter>
       <Nav></Nav>
        <Routes>
          <Route path='/' element={<About></About>}></Route>
          <Route path='/calculator' element={<Display></Display>}></Route>
          <Route path='/animation' element={<Animation></Animation>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
