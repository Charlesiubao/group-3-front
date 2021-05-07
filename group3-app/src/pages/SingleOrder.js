import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const SingleOrder= (props) => {
    const [orders, setOrders] = useState ({})
    const { userState, fetchUser } = useContext(UserContext)
    const [user, setUser] = userState
    const [shouldRedirect, setShouldRedirect] = useState(null)
    const [shouldReload, setShouldReload] = useState(true)
    const [cartTotal, setCartTotal] = useState(0);

    const fetchSingleOrder = async () => {
      console.log(props.location.state.orderId)

       let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/orders/${props.location.state.orderId}`,{
            headers: {
              Authorization: localStorage.getItem('userId')
            }
          })
        //.then((response) => {
          console.log('RESPONSE')
        console.log(response)
         setOrders(response.data) 
         setShouldReload(false)
   
        //})
       }
      
    useEffect(() => {
      fetchSingleOrder();
 
    }, [])
    //useEffect(fetchSingleOrder, [shouldReload])

  
    const total = () => {
        let totalVal = 0;
        console.log('PRODUCTS')
        console.log(orders.products)
        if(orders.products){
          for (let i = 0; i < orders.products.length; i++) {
            totalVal += parseInt(orders.products[i].price.replace('$', ''))

          }
        }

        setCartTotal(totalVal);
      };

      useEffect(() => {
        total();
      }, [orders]);

    return (
        <div>
          { shouldRedirect && <Redirect to={shouldRedirect} /> }
          <h2>Your Order Detail</h2>
          {
        orders.products ? 
        orders.products.map((product) => {
          return <div className="singleOrder">
            <span key={product.id}>
            <h3>{product.name}</h3>
            <span>{product.price}</span>
            </span>
          </div>

        })
        :
        <p>You don't have any orders yet..</p>
      }
        <div>
                {
                    orders.products && orders.order && 
                    <>
                    <p>Total price:${cartTotal}</p> 
                    <p>Address:{orders.order.address}</p> 
                    <p>Credit Cart Number:{orders.order.creditCard}</p> 
                    </>
                }
            </div>
        </div>
    )
}

export default SingleOrder