const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");

// إنشاء dist من جديد
if (fs.existsSync(dist)) {
    fs.rmSync(dist, { recursive: true });
}
fs.mkdirSync(dist);

// نسخ الملفات
fs.readdirSync(root).forEach((file) => {
    if (!["node_modules", "dist", "build-tools", ".git"].includes(file)) {
        const src = path.join(root, file);
        const dest = path.join(dist, file);

        if (fs.lstatSync(src).isFile()) {
            fs.copyFileSync(src, dest);
        }
    }
});

// Minify HTML
fs.readdirSync(dist).forEach((file) => {
    if (file.endsWith(".html")) {
        execSync(
            `npx html-minifier-terser dist/${file} -o dist/${file} --collapse-whitespace --remove-comments --minify-css true --minify-js true`,
        );
    }
});

// Minify CSS
if (fs.existsSync("style.css")) {
    execSync(`npx cleancss -o dist/style.css style.css`);
}

// Minify JS
if (fs.existsSync("script.js")) {
    execSync(`npx terser script.js -o dist/script.js -c -m`);
}

console.log("🚀 Optimization Done Successfully!");
