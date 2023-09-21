import styled from "styled-components";

 export const StyledFormRegister=styled.main`
display:flex;
flex-direction:column;
align-items: center;

 form{
display:flex;
flex-direction:column;
width: 370px;
height:650px;
border-radius: 4px;
padding:42px 22px 42px 22px;
box-shadow:0px 4px 40px -10px #212529;
background-color:#212529;
gap: 12px;

.createAccount {
color: #F8F9FA;
align-self:center;
display:flex;
justify-content: center;
font-family: "Inter";
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 28px;}

.info{
font-family: "Inter";
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 22px;
color: #868E96;
display:flex;
justify-content: center;
}

label{
font-family: "Inter";
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 0px;
color: #F8F9FA;
padding-left:20px;
}
.inputReg{
width: 329.93px;
height: 48px;
color: #868E96;
font-family: "Inter";
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 26px;
background-color:#343B41;
border: 1px solid #343B41;
border-radius: 4px;
display:flex;
align-self:center;
}
select{
width: 336.93px;
height: 48px;
align-self:center;
font-family: "Inter";
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 26px;
color: #868E96;
height: 48px;
width: 329px;
border-radius: 4px;
padding: 0px 16px 0px 16px;
background: #343B41;

}
.buttonRegister{
height: 48px;
width: 338px;
border-radius: 4px;
padding: 0px 22px 0px 22px;
background: #59323F;
border: 1px solid #343B41;
font-family: "Inter";
font-size: 16px;
font-weight: 500;
line-height: 26px;
letter-spacing: 0em;
color:#FFFFFF;
align-self:center;

  
}
}
`
