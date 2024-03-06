import { styled } from "styled-components";

export const Container = styled.div`
    width:100%;
    height:fit-content;
    background-color:rgba(243, 244, 244, 1);
    padding:150px 50px;
    display:flex;
    flex-direction:column;
    align-items:center;
    .heading{
        margin:0;
        text-align: center;
        font-family: David Libre;
        font-size: 60px;
        font-style: normal;
        font-weight: 700;
        line-height: 65px; /* 108.333% */
        color:var(--text-primary-cl);

    }
    .sec_text{
        color: var(--text-secondary-cl);
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px; /* 181.25% */
        text-align:center;
    }
    .menu_types{
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        justify-content:center;
    }
    .type_item{
        width:200px;
        border:2px solid grey;
        height:40px;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor: pointer;
        z-index:2;
    }
    .menu{
        margin-top:150px;
        display:flex;
        width:100%;
        max-width:1000px;
        height:fit-content;
        flex-wrap:wrap;
        gap:30px;
        justify-content:center;
        row-gap:70px;
    }
    .card{
        text-decoration:none;
        width: 260px;
        /* height: 359px; */
        height:fit-content;
        border:2px solid #fff;
        /* border-top-left-radius:45px;
        border-bottom-right-radius:45px;
        border-top-right-radius:15px;
        border-bottom-left-radius:15px; */
        border-radius:45px;
        background:transparent;
        position:relative;
        /* padding-top:120px; */
        display:flex;
        flex-direction:column;
        align-items:center;
        cursor:pointer;
    }
    .image_div{
        position:relative;
        width:100%;
        height:fit-content;
        /* top:-100px;
        left:30px; */
        text-decoration:none;
    }
    .dish_img{
        width: 100%;
        height: 200px;
        /* border-radius:45px; */
        border-top-left-radius:45px;
        border-top-right-radius:45px;

        object-fit:cover;
        /* border:2px solid var(--text-secondary-cl); */
    }
    .price{
        position:absolute;
        width: 60px;
        height: 60px;
        background-color:var(--text-primary-cl);
        color:#fff;
        text-align: center;
        font-family: Inter;
        font-size: 13px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px; /* 162.5% */
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-wrap:wrap;
        top:40px;
        right:-20px;
    }
    .dish_name{
        
        color:var(--text-primary-cl);
        text-align: center;
        font-family: David Libre;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 26px; /* 130% */
    }
    .desc{
        color:var(--text-secondary-cl);
        text-align: center;
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px; /* 173.333% */
        max-width:225px;
        
    }
    .back1{
        position:absolute;
        top:100px;
        left:350px;
    }
    .back2{
        position:absolute;
        top:100px;
        right:350px;
        opacity:0.2;
    }
    .back3{
        position:absolute;
        top:550px;
        left:200px;
    }
    .back4{
        position:absolute;
        top:450px;
        right:380px;
    }
    .back5{
        position:absolute;
        top:450px;
        right:260px;
        /* opacity:0.2; */
    }
    .back6{
        position:absolute;
        bottom:-150px;
        right:50%;
        opacity:0.2;
    }
    .like{
        font-size:30px;
        position:absolute;
        bottom:10px;
        right:10px;
        cursor:pointer;
    }
`