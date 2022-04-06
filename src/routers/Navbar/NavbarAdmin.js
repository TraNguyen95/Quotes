import React, { useEffect, useState } from "react";
import { FaHome, FaPager, FaPlusSquare } from "react-icons/fa";
import styled from "styled-components";
import { Breakpoints } from "../../styles/Breakpoints";

export default function NavbarAdmin() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 600;

  return (
    <>
      {isMobile ? (
        <MobileNavbar.Wrapper>
          <MobileNavbar.List>
            <MobileNavbar.Link>
              <FaHome />
            </MobileNavbar.Link>
            <MobileNavbar.Link>
              <FaPager />
            </MobileNavbar.Link>
            <MobileNavbar.Link>
              <FaPlusSquare />
            </MobileNavbar.Link>
          </MobileNavbar.List>
        </MobileNavbar.Wrapper>
      ) : (
        <Navbar.Wrapper>
          <Navbar.Logo>NEMO QUOTES</Navbar.Logo>
          <Navbar.List>
            <Navbar.Link>Home</Navbar.Link>
            <Navbar.Link>Dashboard</Navbar.Link>
            <Navbar.Link>Add Quotes</Navbar.Link>
          </Navbar.List>
        </Navbar.Wrapper>
      )}
    </>
  );
}

const Navbar = {
  Wrapper: styled.nav`
    padding: 0.5rem 3rem 0;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Breakpoints.lg} {
      padding: 0.5rem 2rem 0;
    }
  `,
  Logo: styled.h1`
    padding: 0.5rem 1rem;
    font-family: "Khand", sans-serif;
    font-weight: 600;
    font-size: 2.5rem;
    color: var(--light-red);

    ${Breakpoints.lg} {
      font-size: 1.8rem;
    }
  `,
  List: styled.div`
    display: flex;
  `,
  Link: styled.a`
    font-size: 1.8rem;
    cursor: pointer;
    font-weight: 600;
    text-transform: uppercase;
    transition: 0.5s ease-in-out;
    margin-right: 1.5rem;
    position: relative;
    color: var(--light-silver);
    font-family: "Khand", sans-serif;

    ::after {
      background-color: var(--light-red);
      content: "";
      height: 4px;
      transform: scaleX(0);
      transition: transform 0.25s ease;
      transform-origin: left;
      left: 0;
      bottom: -1px;
      width: 100%;
      display: block;
      position: absolute;
    }

    :hover::after {
      background-color: var(--light-red);
      transform: scaleX(1);
    }

    :hover,
    :active {
      color: var(--light-red);
    }

    ${Breakpoints.lg} {
      font-size: 1.5rem;
    }
  `,
};

const MobileNavbar = {
  Wrapper: styled.nav`
    position: fixed;
    width: 100vw;
    bottom: 0;
    z-index: 999;
    background: var(--light);
  `,
  List: styled.div`
    display: flex;
    padding: 0.5rem 2rem;
    margin: 0;
    justify-content: space-around;
  `,
  Link: styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;

    & svg {
      color: var(--light-red);
    }
  `,
};
