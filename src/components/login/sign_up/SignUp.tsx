import React, { useContext, useState } from 'react'
import { Container } from './sign_up_style'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { LoginContext } from '../../../context/loginContext';
import { LoadingContext } from '../../../context/loadingContext';
import Modal from '../../../generics/Modal';
type FormType = {
    first_name:string,
    last_name:string,
    number:number,
    email:string,
    password:string
}
const SignUp = () => {
    const [form, setForm] = useState({} as FormType);
    const [modal, setModal] = useState("none");

    const {setLogin} = useContext(LoginContext);
    const {setLoading} = useContext(LoadingContext);
    
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post("https://tashkent-server-3.onrender.com/sign-up", {form});
            console.log(res);
            setLogin(true);
            setLoading(false);

        } catch (error) {
            setLoading(false)
            setModal("none")
            console.log("SIGNUP ERROR", error);
        }
    }
    const handleChange = (e:any) => {
        console.log(e.target.name);
        setForm(prev => ({...prev, [e.target.name]:e.target.value}))
        console.log(form)
    }
  return (
    <Container>
        <Modal width="300px" height='200px' display={modal} style={{}}>
            <h1 style={{color:"red"}}>Error</h1>
            <p style={{color:"orange"}}>Some error occured in the server</p>
            <button onClick={() => setModal("none")} style={{width:"100px", height:"40px", background:"lightgreen", border:"none", borderRadius:"10px"}}>Confirm</button>
        </Modal>
        <div className='sec-container'>
            <img src="./signupmeal2.png" className='meal'  />
            <div className='sign-info'>
                <img src="sign_up2.png" className='logo_img' />
                <h1 className='welcome'>Welcome to Tashkent Restaurant!</h1>
                <p>Already signed up? <Link to="/sign-in">log in</Link></p>
                <form className='inputs' onSubmit={handleSubmit}>
                    <input value={form.first_name} onChange={handleChange} name='first_name' className='input' placeholder='First Name' required />
                    <input value={form.last_name} onChange={handleChange} name='last_name' className='input' placeholder='Last Name' required />
                    <input value={form.number} onChange={handleChange} name='number' className='input' type="tel" placeholder='Phone Number' required/>
                    <input value={form.email} onChange={handleChange} name='email' className='input' placeholder='Email' required />
                    <input value={form.password} onChange={handleChange} name='password' className='input' type="password" placeholder='Password' required />
                    <input type="submit" className='center sign_up_btn' value="Sign up" />
                </form>
            </div>
        </div>
    </Container>
  )
}

export default SignUp