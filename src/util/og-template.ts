import type { CollectionEntry } from "astro:content";

export default (post: CollectionEntry<"posts">) => {
  return {
    type: "div",
    props: {
      style: {
        color: "#f1f8fd",
        background: "#212737",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              background: "#212737",
              borderRadius: "60px",
              display: "flex",
              justifyContent: "center",
              width: "88%",
              height: "80%",
              boxShadow: "0 0 30px 30px rgb(0 0 0 / 0.1)",
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    padding: "40px",
                    width: "90%",
                    height: "95%",
                  },
                  children: [
                    {
                      type: "h1",
                      props: {
                        style: {
                          color: "#E45C2F",
                          fontSize: 72,
                          overflow: "hidden",
                        },
                        children: [post.data.title],
                      },
                    },
                    {
                      type: "p",
                      props: {
                        style: {
                          fontSize: 28,
                          lineHeight: 1.5,
                        },
                        children: [post.data.description],
                      },
                    },
                    {
                      type: "b",
                      props: {
                        style: {
                          overflow: "hidden",
                          fontSize: 28,
                          marginTop: "auto",
                          marginLeft: "auto",
                        },
                        children: [`By ${post.data.author}`],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
};
