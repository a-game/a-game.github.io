const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

const marked = require('meta-marked');
marked.setOptions({
  highlight: (code) => {
    return require('highlight.js').highlightAuto(code).value;
  }
});

const devMode = process.env.NODE_ENV !== 'production';

const MARKDOWN_FILE_DIR = path.join('src', '_blog', 'posts');

const posts = fs
  // Read directory contents
  .readdirSync(MARKDOWN_FILE_DIR)
  // Take only .md files
  .filter(filename => /\.md$/.test(filename))
  // Normalize file data.
  .map(filename => fs.readFileSync(path.join(MARKDOWN_FILE_DIR, filename), 'utf8'));

const createBlogPage = (post) => {
  const content = marked(post);
  return new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src', '_blog', 'template.html'),
    hash: true,
    chunks: ['blog'],
    filename: path.join(__dirname, 'blog', `${content.meta.filename}.html`),
    title: content.meta.title,
    content: content.html
  });
};

module.exports = {
  mode: devMode ? 'development' : 'production',
  devtool: 'source-map',
  entry: {
    index: path.join(__dirname, 'src', '_index', 'index.js'),
    bio: path.join(__dirname, 'src', '_bio', 'bio.js'),
    experience: path.join(__dirname, 'src', '_experience', 'experience.js'),
    blog: path.join(__dirname, 'src', '_blog', 'blog.js')
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].js'
  },
  devServer: {
    publicPath: path.resolve(__dirname, 'assets'), // bundle.js
    contentBase: path.resolve(__dirname), // index.html
    watchContentBase: false,
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/'
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('postcss-import'),
                require('autoprefixer'),
                require('cssnano')
              ]
            }
          },
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', '_index', 'template.html'),
      hash: true,
      chunks: ['index'],
      filename: path.resolve(__dirname, 'index.html')
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', '_bio', 'template.html'),
      hash: true,
      chunks: ['bio'],
      filename: path.resolve(__dirname, 'bio', 'index.html')
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', '_experience', 'template.html'),
      hash: true,
      chunks: ['experience'],
      filename: path.resolve(__dirname, 'experience', 'index.html')
    }),
    // Spread the returned HtmlWebpackPlugin config
    // objects into the plugins array.
    ...posts.map(post => createBlogPage(post))
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};