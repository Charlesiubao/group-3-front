import { useState, createContext, useEffect } from 'react'
import axios from 'axios'

 const UserContext = createContext()

 const UserProvider = ({ children }) => {
     const [user, setUser] = useState({})

     const fetchUser = () => {
         console.log('hello from fetch user')
         const userId = localStorage.getItem('userId')
         if (userId) {
             axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/verify`, {
                 headers: {
                     authorization: userId
                 }
             }).then((response) => {
                 console.log(response)
                 setUser(response.data.user)
            })
         }
     }

     useEffect(fetchUser, [])

     const state = {
         userState: [user, setUser],
         fetchUser: fetchUser
     }

     return(
         <UserContext.Provider value = {state}>
             {children}
         </UserContext.Provider>
     )
 }

 export{UserProvider, UserContext}