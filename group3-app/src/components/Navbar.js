import {Link, useHistory} from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Navbar = () => {
    // const { userState } = useContext(UserContext)
    // const [user, setUser] = userState
    let history = useHistory()

    const returnHome = () => {
        history.push("/")
    }

    return (
        <div className="headerSection">
            <div className="logo">
                <span className="homeTitle">Logo</span>
            </div>
            
            <div>
            <nav className="navbar">
           
            <span className="navLinks">
            <Link to="/">Home</Link>
            </span>
            <span className="navLinks">
                <Link to=" ">All Products</Link>
                </span>   
            <span>
                
                <span className="navLinks">
                <Link to=" ">My Orders</Link>
                </span>
                <span className="navLinks">
                <Link to=" ">My Cart</Link>
                </span>
                <span className="navLinks">
                <Link to=" " onClick ={(e) => {
                    // e.preventDefault()
                    // localStorage.removeItem('userId')
                    // setUser({})
                    // returnHome()
                }}>Logout</Link>
                </span>
            </span>       
            <span>
                <span className="navLinks">
                <Link to="/signup">Sign Up</Link>
                </span>
                <span className="navLinks">
                <Link to="/login">Login</Link>
                </span>
            </span>
            </nav>
            </div>
        </div>
        
    ) 
 }
    
    export default Navbar