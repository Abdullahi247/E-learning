import { primaryColor } from "@/components/utils/color";
import styled from "styled-components";

export const AboutContainer = styled.section`
  background-color: white;
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
  }
`;

export const GeneralContainer = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const TopBannerContainer =  styled.section`
position: relative;
/* border-top: 4px solid black; */
/* border-bottom: 4px solid black; */
display: flex;
background-color: white;
width: 100%;
.content {
  @media (min-width: 768px) {
    position: absolute;
    z-index: 10;
  }
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  text-align: center;
  background-color: white;
  width: 100%;

  @media (min-width: 768px) {
    text-align: left;
    width: 50vw;
    transform: skewX(-6deg);
    left: -2rem;
  }

  .inner-content {
    @media (min-width: 768px) {
      transform: skewX(6deg);
    }
  }

  .logo {
    width: 70%;
    margin: 0;
    padding: 10px;
    /* height: 150px; */
    object-fit: cover;
  }
}
.headers {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.headline2 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: #008552;
    font-size: 32px; /* 4xl in Tailwind */
    font-weight: 800; /* extrabold in Tailwind */
    font-family: 'Onest-Medium';
    padding: 1rem; /* 4 in Tailwind */
    text-align: center;

    @media (min-width: 768px) {
      text-align: center;
      /* font-size: 48px; 4xl in Tailwind */
    }
  }
.headline {
    /* margin-top: -10px; */
    color: #008552;
    font-size: 32px; /* 4xl in Tailwind */
    font-weight: 800; /* extrabold in Tailwind */
    font-family: 'Onest-Medium';
    padding: 1rem; /* 4 in Tailwind */
    margin: 3rem 2.5rem; /* my-12 mx-10 in Tailwind */
    text-align: center;
    margin-top: 0px;
    margin-bottom: 0px;

    @media (min-width: 768px) {
      text-align: center;
      font-size: 48px; /* 4xl in Tailwind */
    }
  }
`;



export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const NavLink = styled.a`
text-decoration: none;
color: #333;
font-size: 15px;
font-weight: 800;
position: relative;
transition: all 0.3s ease;
background-color: #f8f8f8;
padding: 10px;
border-radius: 5px;

&:hover {
  color: #007bff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #007bff;
    position: absolute;
    bottom: -5px;
    left: 0;
  }
}
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 20px;
  background-color: #f8f8f8;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;