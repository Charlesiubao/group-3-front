import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const MyCart = (props) => {
    const { userState, fetchUser } = useContext(UserContext)
    const [user, setUser] = userState
    const [cartItems, setCartItems] = useState([])
    const [shouldReload, setShouldReload] = useState(true)

    const fetchAllCartItems = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/cart`, {
            headers: {
              Authorization: localStorage.getItem('userId')
            }
          })
        .then((response) => {
            console.log(response.data.cart)
          setCartItems(response.data.cart)
          setShouldReload(false)
        })
      }
      useEffect(fetchAllCartItems, [])
      useEffect(fetchAllCartItems, [shouldReload])


    return (
        <div className="myCartList">
            <h2>My cart</h2>
        {
          cartItems.length > 0 ? 
          cartItems.map((product) => {
            return <div>
              <span key={product.id}>
              <div><Link to={`/products/${product.id}`}>{product.name}</Link></div>
              <span>{product.price}</span>
              <button onClick = {() =>(
                 axios.delete (`${process.env.REACT_APP_BACKEND_URL}/users/cart/${product.id}`, {
                  headers: {
                    Authorization: localStorage.getItem('userId')
                  }
                }).then((response) => {
                    console.log(response)
                    setShouldReload(!shouldReload)
                 })
                )} >Remove from cart</button>
              </span>

            </div>
  
          })
          :
          <p>You haven't added any items into your cart...</p>
        }
                <p>Total price: $_____</p>
                <button>Check out</button>
      </div>
    )
}


export default MyCart