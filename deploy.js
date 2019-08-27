const ghpages = require("gh-pages");
const token = process.env.ACCESS_TOKEN;
console.log(token);
const repo = `https://${token}@github.com/a-game/a-game.github.io.git`;
console.log(repo);

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: repo,
  },
  e => {
    const msg = "Deploy OK!";
    if (e) {
      msg = e;
    }
    console.log(msg);
  }
);
