// Imports
import * as React from "react";
import fLogo from "../images/f_Logo_Online_04_2019/Color/PNG/f_logo_RGB-Blue_58.png";

// Component
const Layout = ({ pageTitle, children }) => {
  return (
    <div className="m-auto w-screen font-sans">
      <header className="w-full bg-lime-500 px-20 py-20">
        <p className="text-center text-5xl font-bold">SMCC logo will go here</p>
      </header>
      <nav className="m-auto w-full flex-wrap justify-evenly bg-gray-100 md:flex md:w-1/2 md:rounded-b-md">
        {[
          ["Home", "/"],
          ["About", "/about"],
          ["Racing", "/racing"],
          ["Results", "/results"],
          ["Gallery", "/gallery"],
          ["News", "/news"],
          ["Contact", "/contact"],
        ].map(([title, path]) => (
          <button
            className="mx-1 p-2 font-bold transition-colors duration-500 hover:bg-lime-500 hover:text-white disabled:bg-lime-500 disabled:text-white"
            disabled={location.pathname === path && true}
          >
            {location.pathname === path ? title : <a href={path}>{title}</a>}
          </button>
        ))}
        <a href="https://www.facebook.com/stotfoldmcc" target="_blank">
          <img
            className="mx-1 p-2"
            height="50"
            width="50"
            src={fLogo}
            alt="Facebook f logo"
          ></img>
        </a>
      </nav>
      <main className="w-full p-2 md:m-auto md:w-1/2">
        <h1 className="text-2xl font-bold text-[rebeccapurple]">{pageTitle}</h1>
        {children}
      </main>
      <footer className="absolute bottom-0 w-full bg-gray-200 p-1 text-right text-sm">
        Copyright &copy; {new Date().getFullYear()} Stotfold Model Car Club
        <br />
        Created by{" "}
        <a
          className="underline"
          href="https://www.github.com/ajduncombe"
          target="_blank"
        >
          ajduncombe
        </a>
      </footer>
    </div>
  );
};

// Export component
export default Layout;
