import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'

import { UserContext } from '../context/UserContext'

const OrdersList = (props) => {
  const [allOrders, setAllOrders] = useState([])
  const { userState, fetchUser } = useContext(UserContext)
  const [user, setUser] = userState
  
  
  const fetchAllOrders = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}${props.route}`, {
        headers: {
          Authorization: localStorage.getItem('userId')
        }
      })
    .then((response) => {
        console.log(response.data)
      setAllOrders(response.data.order)
    })
  }
  useEffect(fetchAllOrders, [])


  return (
    <div className="ordersList">
      {
        allOrders.length ? 
        allOrders.map((order) => {
          return <div className="singleOrder">
            <span key={order.id}>
              <div><Link to={`/myorders/${order.id}`}>{order.createdAt}</Link></div>
            </span>
          </div>

        })
        :
        <p>You don't have any orders yet..</p>
      }
    </div>
  )
}

export default OrdersList