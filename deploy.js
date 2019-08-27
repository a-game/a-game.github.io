const ghpages = require("gh-pages");
// const token = "ff877e068b9b863420216a06e52b5048a893110f"; //process.env.ACCESS_TOKEN;
// console.log(token);
// const repo = `https://${token}@github.com/a-game/a-game.github.io.git`;
// console.log(repo);

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/a-game/a-game.github.io.git",
  },
  e => {
    const msg = "Deploy OK!";
    if (e) {
      msg = e;
    }
    console.log(msg);
  }
);
