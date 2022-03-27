import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/HeaderAndFooter/Navbar'
import Men from './components/ProductComponent/Men'
import Women from './components/ProductComponent/Women'
import Kids from './components/ProductComponent/Kids'
import Shoes from './components/ProductComponent/Shoes'
import Brands from './components/ProductComponent/Brand'
import Header from './components/HeaderAndFooter/Header';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" excat element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/brands" element={<Brands /> } />
      </Routes>
    </Router>
  </>
  );
}

export default App;
