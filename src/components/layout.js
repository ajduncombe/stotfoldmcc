// Imports
import * as React from "react";

// Component
const Layout = ({ pageTitle, children }) => {
  return (
    <div className="m-auto max-w-screen-md font-sans">
      <nav className="flex space-x-4 rounded-md bg-green-200 sm:justify-center">
        {[
          ["Home", "/"],
          ["About", "/about"],
        ].map(([title, path]) => (
          <button
            className="mx-1 p-2 transition-colors duration-500 hover:bg-green-500 disabled:bg-gray-500 disabled:text-white"
            disabled={location.pathname === path && true}
          >
            {location.pathname === path ? title : <a href={path}>{title}</a>}
          </button>
        ))}
      </nav>
      <main>
        <h1 className="text-[rebeccapurple]">{pageTitle}</h1>
        {children}
      </main>
      <footer className="rounded-md bg-gray-200 p-1 text-right text-sm">
        Copyright &copy; {new Date().getFullYear()} Stotfold Model Car Club
      </footer>
    </div>
  );
};

// Export component
export default Layout;
