import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Register from './Components/Register';
import Login from './Components/Login';
import Profile from './Components/Profile';
import BlogList from './Components/BlogList';
import AlertErrors from './Components/AlertErrors';
import PrivateRoute from './Components/PrivateRoute';
function App() {
  return (
    <div className="App">
     <Navigation/>
     <AlertErrors/>
     <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={
      <PrivateRoute>
      <Profile/>
      </PrivateRoute>
      }/>
      <Route path='/Blogs' element={<BlogList/>}/>
     </Routes>
    </div>
  );
}

export default App;
