import './App.css';
import Navbar from './components/Navbar'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import {Route, Redirect} from 'react-router-dom'
import MyOrders from './pages/MyOrders';
import MyCart from './pages/MyCart';
import AllProducts from './pages/AllProducts';

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
      <Route path="/allproducts" exact
        render={() => {
          return <AllProducts />
        }}
      /> 
      <Route path="/myorders" exact
        render={() => {
          return <MyOrders />
        }}
      /> 
      <Route path="/mycart" exact
        render={() => {
          return <MyCart />
        }}
      />       
    </div>
  );
}

export default App;
