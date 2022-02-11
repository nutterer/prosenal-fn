import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const delay = async (delay = 1000, callback = () => {}) => {
    const delayPromise = (ms) => new Promise((res) => setTimeout(res, ms))
    await delayPromise(delay)
  
    callback()
  }
  

function useAuth() {
    const [ user, setUser ] = useState({email:"", password:""})
    const [ error, setError ] = useState("")
  
    const Login = (detail) =>{
      console.log(detail);
    }
  
    const logout = () =>{
      console.log("Logout");
    }
    
    // const { user, setUser } = useState('')
    
    // const navigate = useNavigate()

    // const login = async( username, password ) =>{
    //     const request = { username, password }

    //     await delay(1500, ()=>{
    //         fetch('../mock/user.json', request)
    //         .then( res => {
    //             alert('login success')
    //             console.log(res);
                
    //         navigate('/')
    //         })
    //         .catch( err => {
    //             alert(`can't login`)
    //             console.log(err);
    //         })
    //     })
        
    // }

    return { Login }
}

export { useAuth };
