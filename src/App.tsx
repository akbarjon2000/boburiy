import './App.css';
import {BrowserRouter, Route, Routes, redirect, useNavigate} from "react-router-dom"
import Landing from './components/landing_page/Landing';
import Menu from './components/menu/Menu';
import MenuConextProvider from './context/menuContext';
import Navbar from './components/navbar/Navbar';
import Dish from './components/dish/Dish';
import DishContextProvider from './context/dish_context';
import LoadingContextProvider, { LoadingContext } from './context/loadingContext';
import { useContext, useEffect, useState } from 'react';
import Cart from './components/cart/Cart';
import SignUp from './components/login/sign_up/SignUp';
import LoginContextProvider, { LoginContext } from './context/loginContext';
import SignIn from './components/login/sign_in/SignIn';
import Profile from './components/profile/Profile';
import Table from './components/table/Table';
import Wishlist from './components/wishlist/Wishlist';
import Reviews from './components/Reviews/Reviews';
import About from './components/about/About';
import Admin from './components/Admin/Admin';

function App() {
  const [candidates,setCandidates] = useState<any>([]);

  const {loading} = useContext(LoadingContext);
  const {login} = useContext(LoginContext);
  // const navigate = useNavigate();
  // console.log(loading)
  console.log(login)
useEffect(() => {
  // if(login!) navigate("/sign-in")
}, [])

  return (
    <div className="App" style={{overflow:loading?"hidden":"auto", width:"100%", height:"100vh"}}>
      <div className='loading' style={{width:"100%", height:"100vh", backgroundColor:"rgba(0, 0, 0, 0.3)", position:"absolute", top:0, left:0, display:loading?"flex":"none", zIndex:"3", alignItems:"center", justifyContent:"center"}}>
        <img src='./loader.gif' className='gif' />
      </div>
        <DishContextProvider>
          <MenuConextProvider>
            <BrowserRouter>
            {login?
              <>
                  <Navbar/>
                  <Routes>

                    {/* <Route index path='/' element={<Landing/>}/> */}
                    <Route path='/menu' element={<Menu/>} />
                    {/* <Route path='/dish' element={<Dish/>} /> */}
                    {/* <Route path='/cart' element={<Cart/>}/> */}
                    <Route path='/profile' element={<Profile/>}/>
                    {/* <Route path='/table' element={<Table/>}/> */}
                    <Route path='/wishlist' element={<Wishlist/>}/>
                    <Route path='/reviews' element={<Reviews/>}/>
                    <Route path='/about' element={<About/>}/>
                    {/* <Route path='/secret-admin' element={<Admin/>}/> */}
                    <Route index path='*' element={<Menu/>} />

                    
                  </Routes>
              </>
              :<Routes>
                  <Route index={true} path='/sign-up' element={<SignUp/>}/>
                  <Route path='/*' element={<SignUp/>}/>
                  <Route path='/sign-in' element={<SignIn/>}/>
                </Routes>
            }
          
            </BrowserRouter>
          </MenuConextProvider>
        </DishContextProvider>
     
    </div>
  );
}

export default App;
