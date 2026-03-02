const fs = require("fs");
const { execSync } = require("child_process");

if (!fs.existsSync("dist")) fs.mkdirSync("dist");

execSync(`npx copyfiles -u 1 "**/*.{html,css,js,png,jpg,jpeg,gif,svg}" dist`);

execSync(
    `npx html-minifier-terser --input-dir . --output-dir dist --file-ext html --collapse-whitespace --remove-comments --minify-css true --minify-js true`,
);

execSync(`npx cleancss -o dist/style.css style.css`);

execSync(`npx terser script.js -o dist/script.js -c -m`);

console.log("Optimization Done ✅");
