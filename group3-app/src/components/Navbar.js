import {Link, useHistory} from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import logo from '../assets/logo.png'
import cart from '../assets/shopping-cart.png'

const Navbar = () => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    let history = useHistory()

    const returnHome = () => {
        history.push("/")
    }

    return (
        <div className="headerSection">
            <div className="logo">
                <span className="homeTitle"><img src={logo} alt='grow' /></span>
            </div>
            
            <div>
            <nav className="navbar">
          
            <span className="navLinks">
            <Link to="/">Home</Link>{' | '}
            </span>
                {localStorage.getItem('userId') ? 
                <span>  
                <span className="navLinks">
                <Link to="/products">All Products</Link>{' | '}
                </span>               
                <span className="navLinks">
                <Link to="/myorders">My Orders</Link>{' | '}
                </span>
                
                <span className="navLinks">
                <Link to=" " onClick ={(e) => {
                    e.preventDefault()
                    localStorage.removeItem('userId')
                    setUser({})
                    returnHome()
                }}>Logout</Link>{' | '}
                </span>
                <span className="navLinks">
                <Link to="/mycart"><img className='cart' src={cart}/></Link>
                </span>
            </span> 
            :      
            <span>
                <span className="navLinks">
                <Link to="/signup">Sign Up</Link>{' | '}
                </span>
                <span className="navLinks">
                <Link to="/login">Login</Link>
                </span>
            </span>
            }
            </nav>
            </div>
        </div>
        
    ) 
 }
    
    export default Navbar