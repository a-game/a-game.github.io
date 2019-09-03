import React from "react";
import { graphql } from "gatsby";
import { Layout, SEO } from "../components";

const PostTemplate = ({ data }) => {
  const { frontmatter, html } = data.post;
  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <article>
        <i className="createdDate">{frontmatter.date}</i>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`;
