import styled from "styled-components";

export const StyledModalEditDelete = styled.div`
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
  left: 900px;
  form {
    display: flex;
    flex-direction: column;
    gap: 14px;
    height: 342px;
    width: 369px;
  }
  .closeAndName {
    display: flex;
    justify-content: space-around;
    width: 369px;
    height: 40px;
    background-color: #343b41;
    gap: 100px;
    padding-top: 10px;
    h3 {
      font-family: "Inter";
      font-size: 14px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: #f8f9fa;
      padding-left: 10px;
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
  option{
    background: linear-gradient(0deg, #343b41, #343b41);

  }}

  label {
    font-family: "Inter";
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    color: #f8f9fa;
    padding-left: 10px;
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
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    .saveAlt {
      height: 48px;
      width: 204px;
      border-radius: 4px;
      padding: 0px 22px 0px 22px;
      background: #59323f;
      border: 1.22px solid #59323f;
      font-family: "Inter";
      font-size: 16px;
      font-weight: 500;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: center;
      color: #ffffff;
    }
    .deleteButton {
      height: 48px;
      width: 98px;
      border-radius: 4px;
      padding: 0px 22px 0px 22px;
      background: #868e96;
      border: 1.22px solid #868e96;
      font-family: "Inter";
      font-size: 16px;
      font-weight: 500;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: center;
      color: #ffffff;
    }
  }
  @media (max-width: 500px) {
    border-radius: 3px;
    position: relative;
    top: 520px;
    left: 100px;
    height: 330px;
    width: 294px;
    border-radius: 3px;
    gap: 18px;

    form {
      display: flex;
      flex-direction: column;
      height: 330px;
      width: 294px;
      border-radius: 3px;
      gap: 11px;
    }
    .closeAndName {
      display: flex;
      justify-content: space-around;
      width: 296px;
      height: 40px;
      background-color: #343b41;
      gap: 100px;
      padding-top: 10px;
    }
    input {
      margin-left: 20px;
      height: 40px;
      width: 230px;
      border-radius: 3px;
      align-self: normal;
      color: #868e96;
    }
    select {
      height: 45px;
      width: 264px;
      border-radius: 3px;
      align-self: normal;
      margin-left: 20px;
      color: #868e96;
    }
    .buttons {
      .saveAlt {
        height: 50px;
        width: 163px;
      }
      .deleteButton {
        padding-left:20px;
        padding-right:20px;
        height: 38px;
        width: 78px;
      }
    }
  }
`;
