import { Forgotpasswordpage } from './components/Forgotpasswordpage';
import { Resetpassword } from './components/Resetpassword';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Routes,Route} from 'react-router-dom';
import { Home } from './components/Home';
import {Login} from './components/Login';
import {Urlshortener} from './components/Urlshortener';
import {Urldata} from './components/Urldata';
import {Pagenotfound} from './components/Pagenotfound';
import { Signupregistration } from './components/Signupregistration';
function App() {
  return (
   <div>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/urlshortener" element={<Urlshortener/>}/>
      <Route path="/urldata" element={<Urldata/>}/>
      <Route path="/signupregistration" element={<Signupregistration/>}/>
      <Route path="/user/resetpassword/:token" element={<Resetpassword/>}/>
      <Route path="/forgotpassword" element={<Forgotpasswordpage/>}/>

      <Route path="*" element={<Pagenotfound/>}/>
    </Routes>
   
   </div>
  );
}

export default App;
