import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const SingleProduct = (props) => {
    const [product, setProduct] = useState ({})
    const { userState, fetchUser } = useContext(UserContext)
    const [user, setUser] = userState
    const [shouldRedirect, setShouldRedirect] = useState(null)
    const [shouldReload, setShouldReload] = useState(true)

    const fetchSingleProduct = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${props.id}`,{
            headers: {
              Authorization: user.id
            }
          })
        .then((response) => {
        console.log(response.data)
         setProduct(response.data.product) 
         setShouldReload(false)
        })
       }
      
    useEffect(fetchSingleProduct, [])
    useEffect(fetchSingleProduct, [shouldReload])

    const addToCart = (e) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/cart`, {
            productId: product.id
        },
            {headers: { 
                    Authorization: localStorage.getItem('userId')
                }
          })
        .then((response) => {
            console.log(response)
            console.log('added to cart')
        })
       }

    return (
        <div>
          { shouldRedirect && <Redirect to={shouldRedirect} /> }

            <div className="singleProductContainer">
            <h2>{product.name}</h2>
            <img src={product.image}/>
            <p>{product.description}</p>
            <span>{product.price}</span>
            <button onClick={addToCart}>Add To Cart</button>
            <Link to={'/products'}><button>Back to All Products</button></Link >
            </div>
        </div>
    )
}

export default SingleProduct