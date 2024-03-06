import React, { useContext, useState } from 'react'
import {redirect, useNavigate} from "react-router-dom"
import { Container } from './sing_in_style'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../../context/loginContext'
import axios from 'axios'
import Modal from '../../../generics/Modal'
import { LoadingContext } from '../../../context/loadingContext'
type FormType = {
    email:string,
    password:string
}
function SignIn() {
    const navigate = useNavigate()
    const [form, setForm] = useState({} as FormType);
    const {setLogin} = useContext(LoginContext);
    const [modal, setModal] = useState("none");
    const {setLoading} = useContext(LoadingContext);
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            setLoading(true)
            console.log(form)
            const res = await axios.post("https://tashkent-server-3.onrender.com/sign-in", {...form});
            localStorage.setItem("auth", res.data);
            console.log(res);
            setLogin(true);
            navigate("/")
            setLoading(false)

        } catch (error) {
            setLoading(false);
            setModal("flex");
            console.log("SIGNUP ERROR", error);
        }
    }
    const handleChange = (e:any) => {
        console.log(e.target.name);
        setForm(prev => ({...prev, [e.target.name]:e.target.value}))
        console.log(form)
    }
  return (
    <Container >
        <Modal width="300px" height='200px' display={modal} style={{}}>
            <h1 style={{color:"red"}}>Error</h1>
            <p style={{color:"orange"}}>Some error occured in the server</p>
            <button onClick={() => setModal("none")} style={{width:"100px", height:"40px", background:"lightgreen", border:"none", borderRadius:"10px"}}>Confirm</button>
        </Modal>
        <img className='logo' src='./logo.png' />
        <p className='welcome'>Discover the Flavors of Tashkent with Us!</p>
        <form className='form' onSubmit={handleSubmit}>
            <p className='sign_up_link'>Don't you have an account? <Link to="/sign-up">Sign Up</Link></p>
            <input onChange={handleChange} type='email' placeholder='email' className='input' name='email'/>
            <input onChange={handleChange} style={{marginTop:"50px"}} type='password' className='input' placeholder='password' name='password' />
            <input type='submit' className='login_btn' value='Login' />
        </form>
    </Container>
  )
}

export default SignIn