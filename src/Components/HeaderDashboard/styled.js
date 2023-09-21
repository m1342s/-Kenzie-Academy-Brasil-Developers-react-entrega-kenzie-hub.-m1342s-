import styled from "styled-components";

export const StyledDashboardHeader= styled.header`
width:100%;
height:72px;
display:flex;
padding-top:30px;
justify-content: space-around;
gap:230px;
img{
height: 14px;
width: 105px;
}
button{
font-family: "Inter";
font-size: 12px;
font-weight: 600;
line-height: 28px;
letter-spacing: 0em;
text-align: center;
height: 32px;
width: 55px;
border-radius: 4px;
padding: 0px 16px 0px 16px;
background: #212529;
color: #F8F9FA;
}
@media (max-width:500px) {
        width:100%;
        gap:30px;
        align-items: center;
        padding: 0;
    }
`