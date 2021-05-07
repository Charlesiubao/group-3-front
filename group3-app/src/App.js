import './App.css';
import Navbar from './components/Navbar'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import {Route, Redirect} from 'react-router-dom'
import MyOrders from './pages/MyOrders';
import MyCart from './pages/MyCart';
import AllProducts from './pages/AllProducts';
import {useContext} from 'react'
import {UserContext} from './context/UserContext'
import SingleProduct from './pages/Singleproduct';
import {Switch} from 'react-router-dom'
import Checkout from './pages/Checkout';
import SingleOrder from './pages/SingleOrder';

function App() {
  const { userState, fetchUser } = useContext(UserContext)
  const [user, setUser] = userState

  return (
    <div className="App">
      <Navbar/>
      <Switch>
              <Route path="/" exact
        render={() => {
          return <Home />
        }}
      />
      <Route path="/signup" exact
        render={() => {
          if (user.id) {
            return <Redirect to="/" exact />
          } else {
            return <Signup />
          }
        }}
      />  
      <Route path="/login" exact
        render={() => {
          if (user.id) {
            return <Redirect to="/" exact />
          } else {
            return <Login />
          }
        }}
      /> 
      <Route path="/products" exact
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
        render={(routingInfo) => {
          return <MyCart id={routingInfo.match.params.id}/>
        }}
      />  
      <Route
        path="/products/:id"
        exact
        render={(routingInfo) => {
          return <SingleProduct id={routingInfo.match.params.id} />
        }}
      />  
        <Route
        path="/mycart/checkout"
        exact
        render={() => {
          return <Checkout />
        }}
      />  
        {/* <Route
        path="/myorders/:id"
        exact
        render={() => {
          return <SingleOrder />
        }}
      />   */}
      <Route path="/myorders/:id" exact component={SingleOrder}/>
      </Switch>
   
    </div>
  );
}

export default App;
