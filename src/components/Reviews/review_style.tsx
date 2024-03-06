import {styled} from "styled-components"

export const Container = styled.div`
    width:100%;
    height:100vh;
    overflow:auto;
    padding: 0 15px;
    padding-top:180px;
    .title{
        margin:0 auto;
        width:fit-content;
        font-family:var(--main-font)
    }
    .secondary-text{
        margin:0 auto;
        width:fit-content;
        text-align:center;
        font-family:var(--sec-font);
        margin-top:10px;
    }
    .feeback-con{
        width:50%;
        min-width:350px;
        max-width:600px;
        margin:0 auto;
        margin-top:30px;
        padding:30px;
        border-radius:10px;
        gap:20px;
        box-shadow:0 0 10px 10px rgba(0, 0, 0,  0.2);
    }
    select{
        /* display:none; */
    }
    .select-label{
        display:flex;
        align-items:center;
        position:relative;
    }
    .arrow{
        position:absolute;
        right:20px;
        top:5px;
        font-size:30px;
    }
    .input{
        width:100%;
        height:40px;
        padding:0 20px;
        border-radius:8px;
        outline:none;
        border: 1px solid;
        cursor: pointer;
    }
    .review-text{
        padding:20px;
        height:100px;
    }
    .file{
        display:none;
    }
    .file-label{
        border: 1px solid;
        border-radius:6px;
        width:fit-content;
        padding: 10px;
        cursor: pointer;
    }
    .rating{
        font-family:var(--sec-font);
        gap:20px;
    }
    .stars{
        gap:10px;
        font-size:25px;
        cursor: pointer;
    }
    .react-rater-star{
        font-size:30px;
    }
    .react-rater-star.is-active {
    color: #ffea00; }
    .submit{
        width:200px;
        height:40px;
        font-family:var(--sec-font);
        font-size:var(--fs-sm);
        background-color:var(--background-primary-cl);
        border:none;
        color:#fff;
        font-weight:500;
        border-radius:8px;
        margin:0 auto;
    }
    .review-list{
        margin:0 auto;
        width:100%;
        max-width:900px;
        
        height:fit-content;
        gap:20px;
        margin:0 auto;
        margin-top:30px;
        flex-wrap:wrap;
        justify-content:center;
        align-items:flex-start;

    }
    .review-card{
        width:45%;
        max-width:450px;
        min-width:350px;
        height:fit-content;
        /* border:1px solid; */
        border-radius:10px;
        padding:20px;
        background-color:#fefae0;
    }
    .user_icon{
        font-size:30px;
        color:var(--background-primary-cl);
    }
    .user_name{
        margin:0;
    }
    .review_image{
        width:100px;
        height:100px;
        margin:10px;
        margin-left:0;
        border-radius:5px;
        object-fit:cover;
    }
    .text_img_row{
        align-items:flex-start;
        justify-content:left;
    }

    .order{
        width:100px;
        height:30px;
        background-color:var(--background-primary-cl);
        color:#fff;
        font-weight:500;
        border-radius:8px;
        cursor:pointer;
    }
`