// Imports
import * as React from "react";
import { container, heading } from "./layout.module.css";
import { Button, Stack } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Component
const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <Stack direction="row" spacing={2}>
          <Button href="/" disabled={location.pathname === "/" && true}>
            Home
          </Button>
          <Button
            href="/about"
            disabled={location.pathname === "/about" && true}
          >
            About
          </Button>
        </Stack>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer>
        Copyright &copy; {new Date().getFullYear()} Stotfold Model Car Club
      </footer>
    </div>
  );
};

// Export component
export default Layout;
