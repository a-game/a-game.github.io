import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

import { Layout, SEO } from "../components";

const BioPage = () => {
  const age = calculateAge();
  const data = useStaticQuery(graphql`
    query {
      game: file(relativePath: { eq: "Game.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Bio" />
      <article>
        <div className="container">
          <div className="row">
            <div className="column picture-column">
              <Img
                className="picture"
                fluid={data.game.childImageSharp.fluid}
              />
            </div>
            <div className="column">
              <h2 className="column-header">Hi, My Name is Ahmad Game</h2>
              <p className="column-text">
                I'm a {age} year old dude living Malmö, Sweden.
              </p>
              <p>
                Growing up I wanted to be super hero, unfortunately I quickly
                found out that lacking any kind of superpower (unless you count
                my amazing ability to injure myself doing any type of physical
                activity) I had to settle for another career. After a few twists
                turns I ended up in software.
              </p>
              <p>
                I'm not gonna lie or brag to be an expert at this or that. The
                fact of the matter is that I'm a jack of all trades. I've done a
                bit of everything, both when it comes to code stacks and job
                positions.
              </p>
              <p>
                When I'm not working, I like to run, boulder, eat burgers and
                listen to audio books. I've tried doing all of it at the same
                time, but it got messy. (2/5 would not recommend)
              </p>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

function calculateAge() {
  const ageDifMs = Date.now() - new Date(1985, 6, 26).getTime();
  const ageDate = new Date(ageDifMs); // milliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default BioPage;
