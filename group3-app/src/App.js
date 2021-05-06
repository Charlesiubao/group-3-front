import './App.css';
import Navbar from './components/Navbar'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import {Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route path="/" exact
        render={() => {
          return <Home />
        }}
      />
      <Route path="/signup" exact
        render={() => {
          return <Signup />
        }}
      />  
      <Route path="/login" exact
        render={() => {
          return <Login />
        }}
      /> 
    </div>
  );
}

export default App;
