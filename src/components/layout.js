// Imports
import * as React from "react";
import fLogo from "../images/f_Logo_Online_04_2019/Color/PNG/f_logo_RGB-Blue_58.png";
import { Navbar, Footer } from "flowbite-react";

// Component
const Layout = ({ pageTitle, children }) => {
  return (
    <div className="m-auto font-sans md:max-w-5xl">
      <header className="w-full bg-lime-500 px-20 py-20">
        <p className="text-center text-5xl font-bold">SMCC logo here</p>
      </header>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Racing", "/racing"],
            ["Results", "/results"],
            ["Gallery", "/gallery"],
            ["News", "/news"],
            ["Contact", "/contact"],
          ].map(([title, path]) => (
            <Navbar.Link
              href={location.pathname !== path && path}
              active={location.pathname === path && true}
            >
              {title}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
        <Navbar.Brand>
          <a href="https://www.facebook.com/stotfoldmcc" target="_blank">
            <img
              className="mx-1 p-2"
              height="50"
              width="50"
              src={fLogo}
              alt="Facebook f logo"
            />
          </a>
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span> */}
        </Navbar.Brand>
      </Navbar>
      <main className="w-full p-2">
        <h1 className="text-2xl font-bold text-[rebeccapurple]">{pageTitle}</h1>
        {children}
      </main>
      <Footer container={true}>
        <Footer.Copyright
          href="/"
          by="Stotfold Model Car Club"
          year={new Date().getFullYear()}
        />
        <Footer.LinkGroup>
          <Footer.Link>
            <a
              href="https://www.github.com/ajduncombe/stotfoldmcc"
              target="_blank"
            >
              Github
            </a>
          </Footer.Link>
          <span className="md:hidden">&nbsp;|&nbsp;</span>
          <Footer.Link href="/contact">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
};

// Export component
export default Layout;
