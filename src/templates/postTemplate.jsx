import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout, SEO } from "../components";

const PostTemplate = ({ data }) => {
  const { frontmatter, body } = data.post;
  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <article>
        <i className="createdDate">{frontmatter.date}</i>
        <MDXRenderer className="blog-post-content">{body}</MDXRenderer>
      </article>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    post: mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`;
