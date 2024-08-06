import { primaryColor } from "@/components/utils/color";
import styled from "styled-components";

export const Modal = styled.section`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 100000;
`;

export const ModalTable = styled.div`
  display: flex;
`;

export const Section = styled.section`
  /* margin-bottom: 40px; */
  /* background-color: white;
  width: 70%;
  margin: auto;
  padding: 20px;
  border-radius: 10px; */
  background-color: #eae8e8;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 30%;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  h3 {
    font-family: "Onest-Light";
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  p {
    font-weight: lighter;
    font-family: "Onest-Light";
    color: grey;
    text-align: left;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #008552;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h2`
  /* font-size: 1.5rem; */
  color: #333;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

export const List = styled.ul`
  list-style: disc inside;
  padding-left: 20px;
  color: #666;
`;

export const ListItem = styled.p`
  margin-bottom: 5px;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
`;

// export const A

export const ModalContainer = styled.div`
  background-color: white;
  width: 30%;
  margin-top: 5% !important;
  padding: 1.5rem;
  margin: auto;

  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 800px) {
    width: 90%;
    padding: 1rem;
  }
  @media (max-width: 500px) {
    padding: 0.2rem 0.5rem;
  }
`;

export const EntireFormBg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-image: url("/img/form-bg.jpg");
  background-size: cover;
  background-position: center;
  height: fit-content;
  overflow: scroll;
`;

export const BankFormContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  @media (max-width: 800px) {
    /* height: 70% */
  }
  .container {
    width: 70%;
    height: 70%;
    overflow: scroll;
    /* height: max-content; */
    margin: auto;
    padding: 25px;
    border-radius: 10px;
    background-color: white;
    @media (max-width: 800px) {
      width: 80%;
      /* height: 70%; */
      max-height: 80%;
      overflow-y: scroll;
    }
  }
  .slider {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

export const CategoryContainer = styled.div`
  border-radius: 8px;
  div {
    .titleHead {
      display: flex;
      flex-direction: column;
      gap: 3px;
      margin-top: 10px;
      margin-bottom: 10px;
      h3 {
        font-family: "Onest-Regular";
        font-size: 14px;
        margin: 0px;
        font-weight: 600;
        @media (max-width: 800px) {
          font-size: 12px;
        }
      }
      p {
        margin: 0px;
        color: grey;
        font-family: "Onest-Light";
        font-style: italic;
        font-size: 13px;
        @media (max-width: 800px) {
          font-size: 11px;
        }
      }
      span {
        color: red;
        font-size: 16px;
      }
    }
    .infoBox {
      display: flex;
      gap: 10px;
      @media (max-width: 800px) {
        flex-wrap: wrap;
      }
    }

    .container {
      position: relative;
      width: 300px;
      height: 200px;
      overflow: hidden;
    }

    .slider {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5em;
      background: #f0f0f0;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }

    .slide-in {
      animation: slideIn 0.3s forwards;
      display: flex;
      flex-direction: column;

      gap: 10px;
    }

    .conts {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0%);
      }
    }
  }
`;

export const PersonalInfoContainer = styled.div`
  border-radius: 8px;
  div {
    .titleHead {
      display: flex;
      flex-direction: column;
      gap: 3px;
      margin-top: 10px;
      margin-bottom: 10px;
      h3 {
        font-family: "Onest-Regular";
        font-size: 14px;
        margin: 0px;
        font-weight: 600;
        @media (max-width: 800px) {
          font-size: 12px;
        }
      }
      p {
        margin: 0px;
        color: grey;
        font-family: "Onest-Light";
        font-style: italic;
        font-size: 13px;
        @media (max-width: 800px) {
          font-size: 11px;
        }
      }
      span {
        color: red;
        font-size: 16px;
      }
    }
    .infoBox {
      display: flex;
      gap: 10px;
      @media (max-width: 800px) {
        flex-wrap: wrap;
      }
    }

    .container {
      position: relative;
      width: 300px;
      height: 200px;
      overflow: hidden;
    }

    .slider {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5em;
      background: #f0f0f0;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }

    .slide-in {
      animation: slideIn 0.3s forwards;
      display: flex;
      flex-direction: column;

      gap: 10px;
    }

    .conts {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0%);
      }
    }
  }
`;

export const ContactDetailsContainer = styled.div`
  div {
    .titleHead {
      display: flex;
      flex-direction: column;
      gap: 3px;
      margin-top: 10px;
      margin-bottom: 10px;
      h3 {
        font-family: "Onest-Regular";
        font-size: 14px;
        margin: 0px;
        font-weight: 600;
        @media (max-width: 800px) {
          font-size: 12px;
        }
      }
      p {
        margin: 0px;
        color: grey;
        font-family: "Onest-Light";
        font-style: italic;
        font-size: 13px;
        @media (max-width: 800px) {
          font-size: 11px;
        }
      }
      span {
        color: red;
        font-size: 16px;
      }
    }
    .infoBox {
      display: flex;
      gap: 10px;
      @media (max-width: 800px) {
        flex-wrap: wrap;
      }
    }

    .container {
      position: relative;
      width: 300px;
      height: 200px;
      overflow: hidden;
    }

    .slider {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5em;
      background: #f0f0f0;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }

    .slide-in {
      animation: slideIn 0.3s forwards;
      display: flex;
      flex-direction: column;

      gap: 10px;
    }

    .conts {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0%);
      }
    }
  }
`;

export const ValidDetailsContainer = styled.div`
  div {
    .titleHead {
      display: flex;
      flex-direction: column;
      gap: 3px;
      margin-top: 10px;
      margin-bottom: 10px;
      h3 {
        font-family: "Onest-Regular";
        font-size: 14px;
        margin: 0px;
        font-weight: 600;
        @media (max-width: 800px) {
          font-size: 12px;
        }
      }
      p {
        margin: 0px;
        color: grey;
        font-family: "Onest-Light";
        font-style: italic;
        font-size: 13px;
        @media (max-width: 800px) {
          font-size: 11px;
        }
      }
      span {
        color: red;
        font-size: 16px;
      }
    }
    .infoBox {
      display: flex;
      gap: 10px;
      @media (max-width: 800px) {
        flex-wrap: wrap;
      }
    }

    .container {
      position: relative;
      width: 300px;
      height: 200px;
      overflow: hidden;
    }

    .slider {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5em;
      background: #f0f0f0;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }

    .slide-in {
      animation: slideIn 0.3s forwards;
      display: flex;
      flex-direction: column;

      gap: 10px;
    }

    .conts {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0%);
      }
    }
  }
`;

export const AccountServiceContainer = styled.div`
  div {
    .titleHead {
      display: flex;
      flex-direction: column;
      gap: 3px;
      margin-top: 10px;
      margin-bottom: 10px;
      h3 {
        font-family: "Onest-Regular";
        font-size: 14px;
        margin: 0px;
        font-weight: 600;
        @media (max-width: 800px) {
          font-size: 12px;
        }
      }
      p {
        margin: 0px;
        color: grey;
        font-family: "Onest-Light";
        font-style: italic;
        font-size: 13px;
        @media (max-width: 800px) {
          font-size: 11px;
        }
      }
      span {
        color: red;
        font-size: 16px;
      }
    }
    .infoBox {
      display: flex;
      gap: 10px;
      @media (max-width: 800px) {
        flex-wrap: wrap;
      }
    }

    .container {
      position: relative;
      width: 300px;
      height: 200px;
      overflow: hidden;
    }

    .slider {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5em;
      background: #f0f0f0;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }

    .slide-in {
      animation: slideIn 0.3s forwards;
      display: flex;
      flex-direction: column;

      gap: 10px;
    }

    .conts {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0%);
      }
    }
  }
`;

export const EmploymentDetailsContainer = styled.div`
  div {
    .titleHead {
      display: flex;
      flex-direction: column;
      gap: 3px;
      margin-top: 10px;
      margin-bottom: 10px;
      h3 {
        font-family: "Onest-Regular";
        font-size: 14px;
        margin: 0px;
        font-weight: 600;
      }
      p {
        margin: 0px;
        color: grey;
        font-family: "Onest-Light";
        font-style: italic;
        font-size: 13px;
      }
      span {
        color: red;
        font-size: 16px;
      }
    }
    .infoBox {
      display: flex;
      gap: 10px;
    }

    .container {
      position: relative;
      width: 300px;
      height: 200px;
      overflow: hidden;
    }

    .slider {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5em;
      background: #f0f0f0;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }

    .slide-in {
      animation: slideIn 0.3s forwards;
      display: flex;
      flex-direction: column;

      gap: 10px;
    }

    .conts {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0%);
      }
    }
  }
`;

export const NextOfKinContainer = styled.div`
  div {
    .titleHead {
      display: flex;
      flex-direction: column;
      gap: 3px;
      margin-top: 10px;
      margin-bottom: 10px;
      h3 {
        font-family: "Onest-Regular";
        font-size: 14px;
        margin: 0px;
        font-weight: 600;
        @media (max-width: 800px) {
          font-size: 12px;
        }
      }
      p {
        margin: 0px;
        color: grey;
        font-family: "Onest-Light";
        font-style: italic;
        font-size: 13px;
        @media (max-width: 800px) {
          font-size: 11px;
        }
      }
      span {
        color: red;
        font-size: 16px;
      }
    }
    .infoBox {
      display: flex;
      gap: 10px;
      @media (max-width: 800px) {
        flex-wrap: wrap;
      }
    }

    .container {
      position: relative;
      width: 300px;
      height: 200px;
      overflow: hidden;
    }

    .slider {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5em;
      background: #f0f0f0;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }

    .slide-in {
      animation: slideIn 0.3s forwards;
      display: flex;
      flex-direction: column;

      gap: 10px;
    }

    .conts {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0%);
      }
    }
  }
`;

export const FormHeaderContainer = styled.div`
  h3 {
    background-color: ${primaryColor};
    color: white;
    padding: 10px;
    @media (max-width: 800px) {
      font-size: 14px;
    }
  }
  input {
    background-color: ${primaryColor};
    color: white;
    padding: 10px;
    width: 100%;
    @media (max-width: 800px) {
      font-size: 14px;
    }
  }
`;

export const ReuseableBoxFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

export const ReuseableFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin: 10px auto 10px auto;
  label {
    span {
      color: red;
    }
    @media (max-width: 800px) {
      font-size: 12px;
    }
  }
  input {
    border-style: solid;
    padding: 8px;
    border-width: 1px;
    border-radius: 5px;
  }
`;

export const BankHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto 20px auto;
`;

export const AppButtonContainer = styled.div`
  width: 80px;
  margin: 20px auto 20px auto;
  button {
    font-weight: 800;
    font-size: 14px;
    font-family: "Onest-Medium";
    background-color: ${primaryColor};
    margin: auto;
    color: white;
    padding: 10px;
    width: 80px;
    border-radius: 5px;
  }
`;

export const DualAppButtonContainer = styled.div`
  width: 200px;
  margin: 20px auto 20px auto;
  display: flex;
  flex-direction: row;
  button {
    font-weight: 800;
    font-size: 14px;
    font-family: "Onest-Medium";
    background-color: ${primaryColor};
    margin: auto;
    color: white;
    padding: 10px;
    width: 80px;
    border-radius: 5px;
  }
`;

export const CanvassContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    font-family: "Onest-Regular";
    font-size: 14px;
    margin: 0px;
    font-weight: 600;
    text-align: center;
    @media (max-width: 800px) {
      font-size: 12px;
    }
  }
`;

export const MediaFileContainer = styled.div`
  div {
    display: flex;
    flex-direction: column;
    margin: 20px 20px;
    label {
      font-size: 14px;
    }
  }
  .mediaContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    div {
      flex-direction:row;
    }
  }
`;
