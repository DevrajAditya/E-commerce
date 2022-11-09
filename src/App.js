import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>  
        <Nav />
        <Routes>

          <Route element={<PrivateComponent />}>
          <Route path='/' element={<h1>Product Components</h1>}/>
          <Route path='/add' element={<h1>Add Product Listing Components</h1>}/>
          <Route path='/update' element={<h1>update Product Listing Components</h1>}/>
          <Route path='/logout' element={<h1>Logout Components</h1>}/>
          <Route path='/profile' element={<h1>Profile Components</h1>}/>
          </Route>
          
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/> }/>
        </Routes>
           
      </BrowserRouter>
      <Footer />
    </div>
    
  );
}

export default App;
