import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Layout, SEO, Contact } from "../components";
import * as style from "./index.module.scss";

const IndexPage = () => {
  return (
    <Layout hideFooter>
      <SEO />
      <div className={style.hero}>
        <StaticImage
          src="../images/hero.jpg"
          alt="Background image"
          placeholder="tracedSVG"
          layout="fullWidth"
          quality={99}
          style={{ position: "absolute" }}
          className={style.backgroundImage}
        />
        <div className={style.overlay}>
          <h1 className="text-center">Hi, my name is Game!</h1>
          <p className="text-center">
            Game is my actual last name.
            <br />
            I'm not too fond of the book or the rapper.
            <br />
            The film however is pretty good ;)
          </p>
          <Contact />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
