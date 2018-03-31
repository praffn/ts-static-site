# ts-static-site

The perfect starting point for a simple static site. With Sass. And Typescript.

* Webpack module bundling
* Sass
* Typescript (with sane defaults)
* AirBnBesque linting with TSLint.
* Standard editorconfig settings

-------

## How to use

1) Clone (or download) this repository
   ```
   git clone https://github.com/praffn/ts-static-site.git <NAME OF YOUR SITE>
   ```

2) Run `npm install` or `yarn install`.
3) Remove the `.git` folder. (And do `git init` if you like)
4) Code away 🚀

## Scripts/commands
You can run the scripts by typing `npm run <command>` or `yarn run <command>`.

* `start`<br>
  Will start a webpack development server at `localhost:8080` with live reloading. Development mode.
* `build:dev`<br>
  Will build the project into the `dist` folder with development settings (no minification etc).
* `build`<br>
  Will build the project into the `dist` folder with production settings. (minification, hashed file names etc.)
* `lint`<br>
  Will run the linter

---
#### Todo
* add testing (jest?)
* add gh-pages and deploy script?


