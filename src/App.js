//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Products from './components/modals/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
