import styled from "styled-components";

export const StyledDashboard = styled.section`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  .userInfo {
    display: flex;
    flex-wrap: wrap;
    padding-left: 70px;
    padding-top: 70px;
    height: 118px;
    gap: 40px;
    justify-content: space-around;
    padding-left: 30px;
    padding-top: 30px;
    padding-right: 30px;
  }
  hr {
    width: 100vw;
  }
  .userName {
    font-family: "Inter";
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #f8f9fa;
  }
  .userModule {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868e96;
  }
  .messages {
    display: flex;
    flex-direction: column;
    padding-left: 125px;
    gap: 10px;
  }
  .EmptyMessage {
    font-family: "Inter";
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #f8f9fa;
  }
  .techsList {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
   
    .buttonTech {
      display: flex;
      justify-content: space-around;
      gap: 230px;
      padding-bottom: 25px;
    }
    .buttonAdd {
      height: 32px;
      width: 32px;
      border-radius: 4px;
      background: #212529;
      color: white;
    }
    .techTitle {
      font-family: "Inter";
      font-size: 16px;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: left;
      color: #f8f9fa;
    }
    .allTechs {
      width: 850px;
      border-radius: 4px;
      background: #212529;
      display: flex;
      flex-direction: column;
      align-self: center;
      padding-top: 25px;
      gap: 10px;
      justify-content: center;
      align-items: center;
    }
    .tech {
      height: 49px;
      width: 732px;
      display: flex;
      border-radius: 4px;
      justify-content: space-between;
      gap: 200px;
      background: #121214;
      padding-right: 20px;
      padding-top: 20px;
      padding-left: 20px;
    }
    .singleTechTitle {
      font-family: "Inter";
      font-size: 14px;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
      color: #ffffff;
    }
    .techStatus {
      font-family: "Inter";
      font-size: 12px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: right;
      color: gray;
    }
  }
  @media (max-width: 500px) {
    hr {
      width: 100%;
    }
    .userInfo {
      display: flex;
      flex-direction: column;
      height: 131px;
      width: 320px;
      left: 0px;
      top: 73px;
      border-radius: 0px;
      padding: 12px;
      gap: 10px;
    }
    .techsList {
      .buttonTech {
        display: flex;
        gap: 50px;
      }
      .allTechs {
        height: fit-content;
        width: fit-content;
        left: 12px;
        top: 276px;
        border-radius: 4px;
        padding: 22px 19px 22px 19px;
        .tech {
          height: 48px;
          width: 279px;
          border-radius: 4px;
          padding: 12px;
          gap: 20px;
        }
      }
    }
  }
`;
