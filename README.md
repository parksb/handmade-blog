<div align="center">
  <h1>

  ✍️

  Handmade Blog

  [![build](https://img.shields.io/github/workflow/status/ParkSB/handmade-blog/Node%20CI/master?style=flat-square)](https://github.com/ParkSB/handmade-blog/actions?query=workflow%3A%22Node+CI%22) ![node](https://img.shields.io/badge/node-%3E%3D%2010.0-brightgreen?style=flat-square) [![demo](https://img.shields.io/netlify/3f01acb3-1107-470a-914f-90d100b87d85?label=demo&style=flat-square)](https://handmade-blog.netlify.com/) [![license](https://img.shields.io/github/license/ParkSB/handmade-blog?style=flat-square)](LICENSE)

  </h1>
  
  <strong>Read this document in another language:</strong> [:kr:](README-KO.md) [:indonesia:](README-ID.md) [:brazil:](README-PT-BR.md) [:it:](README-IT.md) [:malaysia:](README-MS.md) [:greece:](README-EL.md)
</div>

Handmade Blog is a lightweight static blog generator for people who want to start a blog quickly. It supports article type document for a blog post, work type document for portfolio, code highlights, [KaTeX](https://katex.org/) syntax, footnotes, and more.

## Demo: [Here](https://handmade-blog.netlify.com/)

![Article page preview](https://user-images.githubusercontent.com/6410412/74097056-be43d100-4b4a-11ea-806b-7bd263d7f623.png)

## Getting Started

1. Click the 'Use this template' button above the file list to create a new repository. If you want to use github.io domain, have to name the repository `{YOUR_ID}.github.io`. (e.g., `betty-grof.github.io`) Don't forget to enable the 'Include all branches' option.

    ![Click the 'Use this template' button](https://user-images.githubusercontent.com/6410412/93741226-f524ae00-fc26-11ea-8f88-ba634d2de66b.png)

    ![Name repository to id.github.io, and enable 'Include all branches' option](https://user-images.githubusercontent.com/6410412/93741223-f48c1780-fc26-11ea-9980-8911e531a29c.png)

2. Click the 'Settings' tab in your repository, and set the source branch for GitHub Pages to `gh-pages` branch. GitHub Pages will host your website based on `gh-pages` branch. You'll be able to access the website via `https://{YOUR_ID}.github.io/` in a few minutes.

    ![Click the 'Settings' tab](https://user-images.githubusercontent.com/6410412/93750006-d11c9900-fc35-11ea-9ac1-4f92216f28f9.png)

    ![Set source branch of the github pages to gh-pages branch](https://user-images.githubusercontent.com/6410412/93741218-f2c25400-fc26-11ea-9e30-eddb9a2a3b3f.png)

3. Clone the repository, and install node packages.

    ```shell script
    $ git clone https://github.com/{YOUR_ID}/{REPOSITORY_NAME}.git # git clone https://github.com/betty-grof/betty-grof.github.io.git
    $ cd {REPOSITORY_NAME} # cd betty-grof.github.io
    $ npm install
    ```

4. Modify `config.json` file in `services` directory to set your blog title and subtitle.

    ```json
    {
      "blogTitle": "Betty Grof",
      "blogSubtitle": "Oh My Glob",
      "article": {
        "tableOfContents": true 
      }
    }
    ```

5. Start a local server at `http://localhost:1234/`. `npm start` script opens the local server based on `server` directory.

    ```shell script
    $ npm start
    ```
   
    ![The website that is titled 'Betty Grof' at http://localhost:1234/](https://user-images.githubusercontent.com/6410412/93754683-155f6780-fc3d-11ea-99de-92c747c103f9.png)
    
6. Commit and push the changes in your working directory to the remote repository.

   ```shell script
   $ git add ./services/config.json
   $ git commit -m "Set the blog title and subtitle"
   $ git push origin master
   ```

7. Run `deploy` script if you're ready to host the website. This script builds local files to `dist` directory and pushes it to `gh-pages` branch that contains only the files in `dist` directory. GitHub Pages will host your website at `https://{YOUR_ID}.github.io/` based on `gh-pages` branch automatically.

    ```shell script
    $ npm run deploy
    ```

## Usage

### Write and publish a document

1. Write a document in `_articles` or `_works` directory.

1. Run `npm run publish article` or `npm run publish work` script to convert markdown documents to HTML.

1. Preview converted document on the local server using `npm start` script.

1. Commit and push the changes to the repository, and run `npm run deploy` to deploy.

### Change a page

Modify an ejs template to change the contents of the existing page. For example, if you want to put an image to the landing page, open the `app/templates/index.ejs` file, and add `img` tag to the `main-container` element.

```html
<main id="main-container">
  <img src="../assets/profile.jpg" alt="My profile picture" />
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</main>
```

Then, run `npm run publish page` script to publish the modified landing page and preview changes on the local server using `npm start` script.

```shell script
$ npm run publish page
$ npm start
```

If you're ready to deploy, run `npm run deploy` script. You can change not only the landing page but any pages like this way. (You may need to understand the project structure.)

### Project structure

* `_articles` - Markdown files for the blog posts.
* `_works` - Markdown files for the portfolio.
* `app`
  * `assets` - Any files to be imported by HTML files such as image, font, etc.
  * `public` - HTML files generated by `publish` script. `server` and `dist` directory is based on this directory. Do not change the files under this directory directly.
    * `article` - HTML files converted from `_articles` directory.
    * `work` - HTML files converted from `_works` directory.
  * `src` - Source code to be imported by HTML files.
    * `css` - CSS files generated by `build` script.
    * `scss`
    * `ts`
  * `static` - Any static files that aren't compiled by `build` script like `robots.txt`, `sitemap.xml`, or SEO files. `build` script copies all files under this directory to `dist` directory. 
  * `templates` - EJS template files. `publish` script converts templates under this directory to HTML files.
* `dist` - Files compiled by `build` script. `deploy` script deploys a website to GitHub pages based on this directory. Do not change the files under this directory directly.
* `server` - Files compiled by `build` script. `start` script opens local server based on this directory. Do not change the files under this directory directly.
* `services` - Source code implementing `publish` script.
  * `classes`
  * `models`
* `tools` - Source code implementing various npm scripts.

## Showcase

* parksb.github.io: https://github.com/parksb/parksb.github.io
* betty-grof.github.io: https://github.com/betty-grof/betty-grof.github.io

## Available Scripts

### `npm start`

Starts local development server at http://localhost:1234/.

### `npm run publish`

Converts templates to HTML files.

```shell script
$ npm run publish article
```

Converts all articles.

```shell script
$ npm run publish works
```

Converts all works.

```shell script
$ npm run publish article 5
```

Converts an article which id is 5.

```shell script
$ npm run publish work 3
```

Converts a work which id is 3.

```shell script
$ npm run publish page
```

Converts all pages.

### `npm run watch`

Rebuilds template files in `templates` directory and markdown files in `_articles` directory automatically whenever the files are modified.

### `npm run build`

Builds files with parcel bundler.

### `npm run deploy`

Builds and deploys the files.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
