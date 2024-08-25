//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Products from './components/modals/Products';
import CreateProducts from './components/modals/CreateProducts';
//import Home from "./components/Home";


function App() {
  return (
    

    <BrowserRouter>
      <Routes>
        <Route path='/create' element={<CreateProducts />} />
      </Routes>
    </BrowserRouter>




  );
}

export default App;