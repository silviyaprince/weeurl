import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Routes,Route} from 'react-router-dom';
import { Home } from './components/Home';
import {Login} from './components/Login';
import {Urlshortener} from './components/Urlshortener';
import {Urldata} from './components/Urldata';
import {Pagenotfound} from './components/Pagenotfound';

function App() {
  return (
   <div>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/urlshortener" element={<Urlshortener/>}/>
      <Route path="/urldata" element={<Urldata/>}/>
      <Route path="*" element={<Pagenotfound/>}/>
    </Routes>
   
   </div>
  );
}

export default App;
