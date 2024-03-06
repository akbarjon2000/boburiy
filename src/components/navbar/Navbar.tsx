import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from './navbar_style'
import {BsFillCartCheckFill} from "react-icons/bs"
import {FcLike, FcGallery, FcAbout, FcBusinessContact} from "react-icons/fc";
import {LuUser} from "react-icons/lu"
import { BiMenu} from "react-icons/bi";
import {IoLogOutOutline, IoFastFoodSharp} from "react-icons/io5"
import {CgProfile} from "react-icons/cg";
import Modal from '../../generics/Modal';
import { LoginContext } from '../../context/loginContext';
import Languages from '../languages/Languages';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [message, setMessage] = useState<string>("Successfully Updated")
    const [display, setDisplay] = useState<string>("none");
    const [navdisplay, setNavDisplay] = useState(false);
    const [modal, setModal] = useState<string>("none");
    const [loc, setLoc] = useState<string>("/");
    const {setLogin} = useContext(LoginContext);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const handleProfileShow = () => {
        setDisplay("flex");

    }
    const handleLogOut = () => {
        localStorage.removeItem("auth");
        setLogin(false);
        navigate("/sign-in");
    }
    const handleNavToggle = () => {
        setNavDisplay(!navdisplay);
    }
    useEffect(() => {
        setLoc(window.location.href)
    }, [window.location])
    let location = window.location.pathname;
    console.log(location);
  return (
    <Container path = {location} display = {navdisplay}>
        <BiMenu onClick={handleNavToggle} className='nav_icon'/>
        <Languages navdisplay = {navdisplay}/>
        <Modal display={modal} height="250px" width='300px'>
            <p className='modal_header'>Are you sure to log out?</p>
            <div onClick={handleLogOut} className='center confirm'>Confirm</div>
            <div onClick={() => {setModal("none")}} className='center cancel'>Cancel</div>
        </Modal>
        <Link to="/" className='logo'>
            <img src='./logo.png'/>
            <h2 style={{ width:"fit-content", margin:0}}>Boburiy</h2>
        </Link>
        <div className='nav'>
            <Link onClick={() => {setNavDisplay(false);}} className='link' to="/menu">{navdisplay ? <IoFastFoodSharp className='link_icon'/>:null}{t("menu")}</Link>
            <Link onClick={() => {setNavDisplay(false);}} className='link' to="/reviews">{navdisplay ? <FcGallery className='link_icon'/>:null}{t("gallery")}</Link>
            <Link onClick={() => {setNavDisplay(false);}} className='link' to="/about">{navdisplay ? <FcAbout className='link_icon'/>:null}{t("about")}</Link>
            {/* <Link className='link' to="/contact">{navdisplay ? <FcBusinessContact className='link_icon'/>:null}{t("Contact")}</Link> */}
        </div>
        {/* <div onClick={() => navigate("/table")} className='book_bnt'>{t("book")}</div> */}
        {navdisplay?
        <div className='col info_div_col' style={{gap:"20px"}}>
            <Link onClick={() => {setNavDisplay(false);}} className='link' to="/profile">{navdisplay ? <LuUser className='link_icon'/>:null}{t("Profile")}</Link>
            {/* <Link onClick={() => {setNavDisplay(false);}} className='link' to="/cart">{navdisplay ? <BsFillCartCheckFill className='link_icon'/>:null}{t("Cart")}</Link> */}
            <Link onClick={() => {setNavDisplay(false);}} className='link' to="/wishlist">{navdisplay ? <FcLike className='link_icon'/>:null}{t("Wish list")}</Link>
            <Link className='link' to="/sign-in" onClick={handleLogOut}>{navdisplay ? <IoLogOutOutline className='link_icon'/>:null}{t("Log out")}</Link>
        </div>
        :
        <div className='info_div'>
            <div className='profile_modal' onMouseLeave={() => setDisplay("none")} style={{display:`${display}`}}>
                <div className='pointer'></div>
                <div onClick={() => {navigate("/profile"); setDisplay("none")}} className='row options'>
                    <LuUser className='modal_icon' />
                    <p>{t("Profile")}</p>
                </div>
                <div onClick={() => {navigate("/wishlist"); setDisplay("none")}} className='row options'>
                    <FcLike className='modal_icon' />
                    <p>{t("Wish list")}</p>
                </div>
                <div onClick={() => setModal("flex")} className='row options'>
                    <IoLogOutOutline className='modal_icon' />
                    <p style={{color:"#ff595e", fontWeight:"700"}}>{t("Log out")}</p>
                </div>
            </div>
            {/* <Link to="/cart"><BsFillCartCheckFill className='icon cart'/></Link> */}
            <Link  onMouseEnter={handleProfileShow} to="/profile"><CgProfile className = "icon profile" /></Link>
        </div>
        
    }

    </Container>
  )
}

export default Navbar