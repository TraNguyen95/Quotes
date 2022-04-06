import React, { useEffect, useState } from "react";
import { FaPager } from "react-icons/fa";
import styled from "styled-components";
import { Breakpoints } from "../../styles/Breakpoints";

export default function NavbarHome() {
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
        <MobileNavbar>
          <Navbar.Logo>NEMO QUOTES</Navbar.Logo>
          <Navbar.Link>
            <FaPager />
          </Navbar.Link>
        </MobileNavbar>
      ) : (
        <Navbar.Wrapper>
          <Navbar.Logo>NEMO QUOTES</Navbar.Logo>
          <Navbar.Link>Dashboard</Navbar.Link>
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

    :hover,
    :active {
      color: var(--light-red);
    }

    & svg {
      color: var(--light-silver);
    }

    ${Breakpoints.lg} {
      font-size: 1.5rem;
    }
  `,
};

const MobileNavbar = styled.nav`
  position: fixed;
  width: 100vw;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
`;
