import styled from "styled-components";

export const StyledModalAdd = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #212529;
  height: 342px;
  width: 369px;
  border-radius: 4px;
  align-self: center;
  gap: 22px;
  position: relative;
  top: 700px;
  left: 500px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    height: 342px;
    width: 369px;
  }
  .nameClose {
    display: flex;
    justify-content: space-around;
    width: 369px;
    height: 33px;
    background-color: #343b41;
    gap: 100px;
    padding-top: 15px;
    h3 {
      font-family: "Inter";
      font-size: 14px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: #f8f9fa;
    }
    span {
      font-family: "Nunito";
      font-size: 16px;
      font-weight: 600;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: left;
      color: #868e96;
    }
  }
  .InputandLabel {
    display: flex;
    flex-direction: column;
  }

  .labelAndSelect {
    display: flex;
    flex-direction: column;
  }
  select {
    height: 48px;
    width: 344px;
    border-radius: 4px;
    padding: 0px 16px 0px 16px;
    align-self: center;
    background: linear-gradient(0deg, #343b41, #343b41);
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    color: #f8f9fa;
    border: 1.22px solid #f8f9fa;
    }
    
  label {
    font-family: "Inter";
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    color: #f8f9fa;
  }
  input {
    height: 48px;
    width: 310px;
    border-radius: 4px;
    padding: 0px 16px 0px 16px;
    border: 1.22px solid #f8f9fa;
    align-self: center;
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    background: linear-gradient(0deg, #343b41, #343b41);
    color: #f8f9fa;
  }
  button {
    height: 48px;
    width: 340px;
    border-radius: 4px;
    padding: 0px 22px 0px 22px;
    border: 1.22px solid #ff577f;
    font-family: "Inter";
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    background: #ff577f;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 500px) {
    position: relative;
    top: 520px;
    left: 50px;
  }
`;
