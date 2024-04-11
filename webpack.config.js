const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  devtool: "source-map",
  plugins: [
    new HtmlPlugin({
      template: "public/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};






class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    // общее пищевое поведение
  }
}

class FlyingAnimal extends Animal {
  fly() {
    // общее поведение полета
  }
}

class Bird extends FlyingAnimal {
  chirp() {
    // общее поведение щебетания
  }
}

class Bat extends FlyingAnimal {
  echolocate() {
    // общее поведение эхолокации
  }
}





