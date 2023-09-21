import styled from "styled-components";

 export const StyledFormLogin=styled.section`
display:flex;
flex-direction:column;
align-items: center;
gap:20px;
header{
align-items:center;
width:100vw;
display:flex;
justify-content: center;
padding-top:40px;
}
img{
height: 19px;
width: 144px;
}

form{
display:flex;
flex-direction:column;
height: 390px;
width: 369px;
border-radius: 4px;
padding: 42px 22px 42px 22px;
background: #212529;
box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
gap:15px;
h3{
font-family: Inter;
font-size: 18px;
font-weight: 700;
line-height: 28px;
letter-spacing: 0em;
text-align: center;;
color:#F8F9FA;
}
label{
font-family: "Inter";
font-size: 12px;
font-weight: 400;
letter-spacing: 0em;
text-align: left;
color: #F8F9FA;
}
input{
height: 48px;
width: 329px;
border-radius: 4px;
padding: 0px 16px 0px 16px;
border: 1px solid #F8F9FA;
font-family: "Inter";
font-size: 16px;
font-weight: 400;
line-height: 26px;
letter-spacing: 0em;
text-align: left;
background:linear-gradient(0deg, #343B41, #343B41);
color: #F8F9FA;
}
.buttonEnter{
align-self:center;
height: 48px;
width: 370px;
border-radius: 4px;
padding: 0px 22px 0px 22px;
margin-right:2px;
background: #FF577F;
border: 1px solid #FF577F;
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 26px;
letter-spacing: 0em;
text-align: center;
color: #FFFFFF;
}
.messageToCreateAccount{
font-family: "Inter";
font-size: 12px;
font-weight: 600;
line-height: 18px;
letter-spacing: 0em;
text-align:center;
display:flex;
justify-content: center;
color:#868E96;
}
a{
display:flex;
justify-content: center;
text-decoration: none;
}
.buttonRegisterLogin{
height: 48px;
width: 380px;
border-radius: 4px;
padding: 10px 22px 0px 140px;
background: #868E96;
border: 1.22px solid #868E96;
font-family: "Inter";
font-size: 16px;
font-weight: 500;
line-height: 26px;
letter-spacing: 0em;
color:#F8F9FA;
display:flex;
}
}
@media(max-width:500px){
form{
height: 402px;
width: 296px;
border-radius: 3px;
input{
height: 35px;
width: 264px;
}
.buttonEnter{
height: 38px;
width: 298px;
border-radius: 4px;
}
}
}`