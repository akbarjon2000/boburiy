import React, { useContext, useEffect, useState } from 'react'
import { MenuContext } from '../../context/menuContext'
import { Container } from './menu_style';
import { Link, useNavigate } from 'react-router-dom';
import { DishContext } from '../../context/dish_context';
import { useTranslation } from 'react-i18next';
import Item from './Item';


type Type = 1 | 2 | 3 | 4;
const Menu = () => {
    const {item, setItem} = useContext(DishContext)
    const {menu, setMenu, GetMenu} = useContext(MenuContext);
    console.log(menu)
    const [type, setType] = useState<number>(1);
    const { t, i18n } = useTranslation();

    const navigate  = useNavigate()

    const handleType = (type:number) => {
        setType(type)
    }
    const handleItemClick = (e:React.MouseEvent, item_:any) =>{
        // e.stopPropagation();
        navigate("/dish");
        console.log(item_)
        setItem(item_);
    }
    useEffect(() => {
        GetMenu()
    }, [])
  return (
    <Container>
        {/* <img className='back1' src='./back1.png' /> */}
        <img className='back2' src='./back2.png' />
        <img className='back3' src='./back3.png' />
        <img className='back4' src='./back4.png' />
        <img className='back5' src='./back5.png' />
        <img className='back6' src='./back6.png' />
        <p className='heading'>{t("menu_header")}</p>
        <p className='sec_text'>{t("menu_text")}<br/>{t("menu_text_sec")}</p>
        <div className='menu_types'>
            <div onClick={() => handleType(1)} style={{backgroundColor:`${type === 1? "lightgreen" : "white" }`}} className='type_item'>{t("main_dishes")}</div>
            <div onClick={() => handleType(2)} style={{backgroundColor:`${type === 2? "lightgreen" : "white" }`}} className='type_item'>{t("Drinks")}</div>
            <div onClick={() => handleType(3)} style={{backgroundColor:`${type === 3? "lightgreen" : "white" }`}} className='type_item'>{t("Salads")}</div>
            {/* <div onClick={() => handleType(4)} className='type_item'>{t("Desserts")}</div> */}
        </div>
        <div className='menu'>
            {
                menu?.map((item:any) => {
                    if(item.menu_id === type) return (
                        <Item key ={item._id} item={item} onClick = {(e:React.MouseEvent) => handleItemClick(e,item)} />
                    )
})
            }
        </div>
        
    </Container>
  )
}

export default Menu