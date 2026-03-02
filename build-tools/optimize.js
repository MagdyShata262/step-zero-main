const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const distDir = path.join(__dirname, "..", "dist");
const rootDir = path.join(__dirname, "..");

// إنشاء dist لو مش موجود
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

// نسخ الملفات الأساسية فقط (بدون node_modules و dist)
fs.readdirSync(rootDir).forEach((file) => {
    if (
        file !== "node_modules" &&
        file !== "dist" &&
        file !== "build-tools" &&
        !file.startsWith(".")
    ) {
        const srcPath = path.join(rootDir, file);
        const destPath = path.join(distDir, file);

        if (fs.lstatSync(srcPath).isFile()) {
            fs.copyFileSync(srcPath, destPath);
        }
    }
});

// Minify HTML
execSync(
    `npx html-minifier-terser dist --file-ext html --collapse-whitespace --remove-comments --minify-css true --minify-js true --input-dir dist --output-dir dist`,
);

// Minify CSS
execSync(`npx cleancss -o dist/style.css style.css`, { stdio: "inherit" });

// Minify JS
execSync(`npx terser script.js -o dist/script.js -c -m`, { stdio: "inherit" });

console.log("🚀 Optimization Done Successfully!");
