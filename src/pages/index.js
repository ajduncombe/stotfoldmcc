// Imports
import * as React from "react";
import Layout from "../components/layout";

// Component
const IndexPage = ({ location }) => {
  return (
    <Layout pageTitle="Welcome to SMCC">
      <p>Text to be added here.</p>
    </Layout>
  );
};

export const Head = () => <title>SMCC Home Page</title>;

// Export component
export default IndexPage;
