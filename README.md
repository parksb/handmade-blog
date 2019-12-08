<div align="center">
  <h1>

  🖖

  Handmade Blog
  </h1>
</div>

A classic static blog generator for people who want to start a blog quickly. It supports article type document for a blog post, work type document for portfolio, code highlights, [KaTeX](https://katex.org/) syntax, footnotes, and others.

## Demo: [Here](https://handmade-blog.netlify.com/)

![article page](https://user-images.githubusercontent.com/6410412/70389251-36353400-1a00-11ea-91af-42a12b06c383.png)

## Getting Started

1. Click the 'Use this template' button above the file list to create a new repository.

2. Clone the repository, and install node modules.

    ```bash
    $ git clone https://github.com/{YOUR_ID}/{REPOSITORY_NAME}.git
    $ cd {REPOSITORY_NAME}
    $ npm install
    ```

3. Publish the example articles and works by `npm run publish`. It converts a markdown documents in `_articles` or `_works` directory to HTML files.

    ```bash
    $ npm run publish article
    $ npm run publish work
    ```

    You may need to change the hardcoded text, such as the title of the site. You can modify them directly by change the contents of the HTML files in the `app` directory, and run `npm run build`. (Yes, we need to improve it.)

4. Start local server at `http://localhost:1234/`. `npm start` script opens local server based on `server` directory. 

    ```bash
    $ npm start
    ```

5. Run deploy script if you're ready to host a live server. This script builds local files to `dist` directory and creates `gh-pages` branch that contains only the files in `dist` directory. GitHub will host live server at `https://{YOUR_ID}.github.io/` based on `gh-pages` automatically.

    ```bash
    $ npm run deploy
    ```

## Document Publishing Process

1. Write a new document in `_articles` or `_works` directory.

1. Run `npm run publish article` or `npm run publish work` script to convert markdown to HTML.

1. Run `npm run deploy` to publish the document to live server.

## Available Scripts 

### `npm start`

Starts local development server at http://localhost:1234/.

### `npm run publish`

Converts markdown documents to HTML files.

```bash
$ npm start publish article
```

Converts all articles.

```bash
$ npm start publish works
```

Converts all works.

```bash
$ npm start publish article 5
```

Converts an article that id is 5.

```bash
$ npm start publish work 3
```

Converts a work which id is 3.

### `npm run build`

Builds files with parcel bundler.

### `npm run deploy`

Builds and deploys the files. 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.