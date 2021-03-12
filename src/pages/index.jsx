import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Layout, SEO, Contact } from "../components";
import * as style from "./index.module.scss";

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3840, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <Layout hideFooter>
      <SEO />
      <div className={style.hero}>
        <Img
          style={{ position: "absolute" }}
          className={style.backgroundImage}
          fluid={data.hero.childImageSharp.fluid}
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
