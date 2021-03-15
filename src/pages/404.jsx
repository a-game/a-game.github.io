import React from "react";
import { Layout, SEO } from "../components";
import catGIF from '../images/cat.gif';

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <article
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>
          <strong>404 </strong> Page not found
        </h1>
        <p style={{ marginBottom: "5rem", textAlign: "center" }}>
          You just hit a route that doesn&#39;t exist... the sadness. <br />
          Hopefully this gif can cheer you up.
        </p>
        <img src={catGIF} alt="cat shaq wiggle" width="400" />
      </article>
    </Layout>
  );
};

export default NotFoundPage;
