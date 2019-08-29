# a-game.github.io
My private website built with no runtime dependencies.

I tried to keep it as simple as possible using pure ES6 features for DOM manipulation like progress bars and smooth scrolling.
I do however use sass because it's a pain in the butt to duplicate styles.
Finally webpack is used for building the static output pages.


### Deploy:
npm run build
cd public/
git init
git add -A
git commit -m "Publish - $(date +"%T")"
git push -u https://<TOKEN>@github.com/a-game/a-game.github.io.git master -f
rm -rf .git