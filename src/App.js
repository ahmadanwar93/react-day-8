// import logo from './logo.svg';
// import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './containers/home'
import Details from './containers/details'

function App() {
  return (
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path='/details/:id' element={<Details />}/>
      <Route path='/' exact element={<Home />}/>      
    </Routes>
  );
}

export default App;
