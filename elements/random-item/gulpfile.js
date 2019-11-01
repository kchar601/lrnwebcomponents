const gulp = require("gulp");
const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const stripCssComments = require("strip-css-comments");
const decomment = require("decomment");
const sourcemaps = require("gulp-sourcemaps");
const packageJson = require("./package.json");
// merge all the src files together
gulp.task("merge", () => {
  return gulp
    .src("./src/" + packageJson.wcfactory.elementName + ".js")
    .pipe(
      replace(
        /\/\* REQUIRED FOR TOOLING DO NOT TOUCH \*\//g,
        (classStatement, character, jsFile) => {
          // pull these off the package wcfactory files area
          let html = fs
            .readFileSync(path.join("./", packageJson.wcfactory.files.html))
            .toString()
            .trim();
          html = decomment(html);
          let haxString = "";
          if (packageJson.wcfactory.useHAX) {
            let HAXProps = fs.readFileSync(
              path.join("./", packageJson.wcfactory.files.hax)
            );
            haxString = `
  // haxProperty definition
  static get haxProperties() {
    return ${HAXProps};
  }`;
          }
          let rawprops = "{}";
          rawprops = fs.readFileSync(
            path.join("./", packageJson.wcfactory.files.properties)
          );
          let props = `${rawprops}`;
          props = props.replace(/\"type\": \"(\w+)\"/g, '"type": $1');
          let cssResult = "";
          if (
            packageJson.wcfactory.useSass &&
            packageJson.wcfactory.files.scss
          ) {
            const sass = require("node-sass");
            cssResult += sass.renderSync({
              file: path.join("./", packageJson.wcfactory.files.scss)
            }).css;
          } else if (packageJson.wcfactory.files.css) {
            cssResult += fs.readFileSync(
              path.join("./", packageJson.wcfactory.files.css)
            );
          }
          let styleRegex = /\/\*[\s]*LIST SHARED STYLES BELOW[\s]*((?:(?:\w+)[\s,]*)*)\*\//g,
            styleArray =
              cssResult.match(styleRegex) &&
              cssResult.match(styleRegex).length > 0
                ? cssResult
                    .match(styleRegex)[0]
                    .replace(styleRegex, "$1")
                    .match(/(\w+)[\s,]*/g)
                : [];
          sharedStyles =
            styleArray && styleArray.length > 0
              ? styleArray.map(style =>
                  style.replace(
                    /(\w+)[\s,]*/g,
                    `
        $1`
                  )
                )
              : ``;
          cssResult = stripCssComments(cssResult).trim();
          let litResult =
              packageJson.wcfactory.customElementClass !== "LitElement"
                ? ``
                : `
  //styles function
  static get styles() {
    return  [${sharedStyles ? `${sharedStyles},` : ``}
      css\`
${cssResult}
      \`
    ];
  }`,
            styleResult =
              packageJson.wcfactory.customElementClass !== "LitElement"
                ? `<style>
${cssResult}
        </style>`
                : ``;

          return `${litResult}
  // render function
  get html() {
    return \`
${styleResult}
${html}\`;
  }
${haxString}
  // properties available to the custom element for data binding
  static get properties() {
    let props = ${props};
    if (super.properties) {
      props = Object.assign(props, super.properties);
    }
    return props;
  }`;
        }
      )
    )
    .pipe(gulp.dest("./"));
});

// run polymer analyze to generate documentation
gulp.task("analyze", () => {
  var exec = require("child_process").exec;
  return exec(
    "polymer analyze --input demo/index.html > analysis.json",
    function(error, stdout, stderr) {
      if (error !== null) {
        console.log("exec error: " + error);
      }
    }
  );
});
// copy from the built locations pulling them together
gulp.task("compile", () => {
  // copy outputs
  gulp
    .src("./" + packageJson.wcfactory.elementName + ".js")
    .pipe(
      rename({
        suffix: ".es6"
      })
    )
    .pipe(gulp.dest("./"));

  return gulp
    .src("./" + packageJson.wcfactory.elementName + ".js")
    .pipe(
      replace(
        /^(import .*?)(['"]\.\.\/(?!\.\.\/).*)(\.js['"];)$/gm,
        "$1$2.umd$3"
      )
    )
    .pipe(
      rename({
        suffix: ".umd"
      })
    )
    .pipe(gulp.dest("./"));
});

gulp.task("watch", () => {
  return gulp.watch("./src/*", gulp.series("merge", "analyze"));
});

// shift build files around a bit and build source maps
gulp.task("sourcemaps", () => {
  return gulp
    .src("./" + packageJson.wcfactory.elementName + ".es6.js")
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write("./"));
});

gulp.task("dev", gulp.series("merge", "analyze", "watch"));

gulp.task("default", gulp.series("merge", "analyze", "compile", "sourcemaps"));
