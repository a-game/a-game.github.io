/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { IconContext } from "react-icons";

import { Header, Contact } from ".";
import "./layout.module.scss";

const Layout = ({ hideFooter, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <IconContext.Provider value={{ className: "icon" }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        {!hideFooter && (
          <footer>
            <Contact />
          </footer>
        )}
      </IconContext.Provider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
