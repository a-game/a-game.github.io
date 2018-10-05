---
filename: index
title: My thoughts
author:  Me
createdDate: 2018-09-25
...

# Hello World

## Hello World 2

### Hello World 3

#### Hello World 4

##### Hello World 5

###### Hello World 6

here is a list:

- How I made this
    - sub
- Postcss loader default config
- Product + dev

---

```Javascript
  devServer: {
    publicPath: path.resolve(__dirname, 'assets'), // bundle.js
    contentBase: path.resolve(__dirname), // index.html
    watchContentBase: false,
    compress: true,
    port: 8080
  },

  // Spread the returned HtmlWebpackPlugin config
  // objects into the plugins array.
  ...posts.map(post => createBlogPage(post))
```

```scss
@import 'colors';
@import 'screens';
@import 'nav';
@import 'footer';
@import 'progress';
@import 'fonts';

* {
  box-sizing: border-box;
}

html {
  // Makes 0.1rem be equal to 1px
  font-size: 10px;
}

body {
  margin: 0;
  outline: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: $background;

  color: $black;
  @extend %bodyFont;
}

a {
  text-decoration: none;
  color: $secondary;
  transition: color 0.3s ease;

  &:hover {
    color: $secondary-light;
  }
}

hr {
  // dividers
  margin: 5rem auto;
  background-color: $secondary-dark;
  border-radius: .2rem;
}

```

here is just a paragraph.
