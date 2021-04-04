<div align="center">
  <h1>

  ✍️

  Handmade Blog

  [![build](https://img.shields.io/github/workflow/status/ParkSB/handmade-blog/Node%20CI/master?style=flat-square)](https://github.com/ParkSB/handmade-blog/actions?query=workflow%3A%22Node+CI%22) ![node](https://img.shields.io/badge/node-%3E%3D%2010.0-brightgreen?style=flat-square) [![demo](https://img.shields.io/netlify/3f01acb3-1107-470a-914f-90d100b87d85?label=demo&style=flat-square)](https://handmade-blog.netlify.com/) [![license](https://img.shields.io/github/license/ParkSB/handmade-blog?style=flat-square)](LICENSE)

  </h1>
  
  <strong>Leggi questo documento in un altro linguaggio:</strong> [:us:](README.md) [:kr:](README-KO.md) [:indonesia:](README-ID.md) [:brazil:](README-PT-BR.md) [:greece:](README-EL.md)
</div>

Handmade Blog è un leggero generatore di blog statici per persone che vogliono aprire un blog rapidamente. Supporta documenti di tipo "article" per i post del blog, documenti di tipo "work" per il portfolio, evidenziazione codice, [KaTeX](https://katex.org/) sintassi, note a piè di pagina, e altro.

## Demo: [Qui](https://handmade-blog.netlify.com/)

![Anteprima pagina articolo](https://user-images.githubusercontent.com/6410412/74097056-be43d100-4b4a-11ea-806b-7bd263d7f623.png)

## Come iniziare

1. Clicca sul bottone 'Use this template' sopra la lista di file per creare un nuovo repository. Se vuoi usare il dominio github.io, devi rinominare il repository in `{IL_TUO_ID}.github.io`. (es., `betty-grof.github.io`). Non dimenticare di abilitare l'opzione 'Include all branches'.

    ![Clicca il bottone 'Use this template'](https://user-images.githubusercontent.com/6410412/93741226-f524ae00-fc26-11ea-8f88-ba634d2de66b.png)

    ![Rinomina il repository in id.github.io, e abilita l'opzione 'Include all branches'](https://user-images.githubusercontent.com/6410412/93741223-f48c1780-fc26-11ea-9980-8911e531a29c.png)

2. Clicka sul tab 'Settings' del tuo repository, and imposta il branch `gh-pages` come source branch per GitHub Pages. GitHub Pages farà da hosting del tuo sito in base al branch `gh-pages`. Potrai accedere al sito in pochi minuti all'indirizzo `https://{IL_TUO_ID}.github.io/`.

    ![Clicka sul tab 'Settings'](https://user-images.githubusercontent.com/6410412/93750006-d11c9900-fc35-11ea-9ac1-4f92216f28f9.png)

    ![Imposta il branch gh-pages come source branch delle github pages](https://user-images.githubusercontent.com/6410412/93741218-f2c25400-fc26-11ea-9e30-eddb9a2a3b3f.png)

3. Clona il repository, e installa installa le dipendenze di node.

    ```shell script
    $ git clone https://github.com/{IL_TUO_ID}/{NOME_REPOSITORY}.git # git clone https://github.com/betty-grof/betty-grof.github.io.git
    $ cd {NOME_REPOSITORY} # cd betty-grof.github.io
    $ npm install
    ```

4. Modifica il file `config.json` nella cartella `services` per impostare il titolo e il sottotitolo del tuo blog.

    ```json
    {
      "blogTitle": "Betty Grof",
      "blogSubtitle": "Oh My Glob",
      "article": {
        "tableOfContents": true 
      }
    }
    ```

5. Avvia il server locale all'indirizzo `http://localhost:1234/`. Il comando `npm start` avvia il server locale in base alla cartella `server`.

    ```shell script
    $ npm start
    ```
   
    ![Il sito website intitolato 'Betty Grof' a http://localhost:1234/](https://user-images.githubusercontent.com/6410412/93754683-155f6780-fc3d-11ea-99de-92c747c103f9.png)
    
6. Commita e pusha le modifiche nella tua working directory locale sul repository remoto.

   ```shell script
   $ git add ./services/config.json
   $ git commit -m "Imposta titolo e sottotitolo del blog"
   $ git push origin master
   ```

7. Lancia lo script `deploy` se sei pronto per pubblicare il sito. Questo script builda i file locali in una cartella `dist` e la pusha sul branch `gh-pages`, che contiene solo i file nella cartella `dist`. GitHub Pages pubblicherà il tuo sito all'indirizzo `https://{IL_TUO_ID}.github.io/` in base al branch `gh-pages`, automaticamente.

    ```shell script
    $ npm run deploy
    ```

## Utilizzo

### Scrivi e pubblica un documento

1. Scrivi un documento nelle cartelle `_articles` o `_works`.

1. Lancia i comandi `npm run publish article` o `npm run publish work` per convertire i documenti markdown in HTML.

1. Verifica il documento convertito sul server locale, usando il comando `npm start`.

1. Committa and pusha le modifiche sul repository, and lancia `npm run deploy` per pubblicare.

### Cambia una pagina

Modifica un template ejs per cambiare il contenuto di una pagina esistente. Per esempio, se vuoi inserire un'immagine nella pagina di atterraggio, apri il file `app/templates/index.ejs`, e aggiungi il tab `img` all'elemento `main-container`.

```html
<main id="main-container">
  <img src="../assets/profile.jpg" alt="La mia foto profilo" />
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</main>
```

Quindi lancia il comando `npm run publish page` per pubblicare la pagina di atterraggio modificata e verifica in anteprima le modifiche sul server locale usando il comando `npm start`.

```shell script
$ npm run publish page
$ npm start
```

Se sei pronto per la pubblicazione, lancia il comando `npm run deploy`. Poi cambiare non solo la pagina di atterraggio, ma qualsiasi pagina in questo modo (potresti aver bisogno di capire la struttura del progetto).

### Struttura del progetto

* `_articles` - File Markdown per i post del blog.
* `_works` - File Markdown per il portfolio.
* `app`
  * `assets` - Qualsiasi file da importare nei file HTML come immagini, font, ecc.
  * `public` - File HTML generatu dallo script `publish`. Le cartelle `server` e `dist` sono basate su questa cartella. Non modificare manualmente i file in questa cartella.
    * `article` - File HTML convertiti dalla cartella `_articles`.
    * `work` - File HTML convertiti dalla cartella `_works`.
  * `src` - Codice sorgente da importare dai file HTML.
    * `css` - File CSS generati dallo script `build`.
    * `scss`
    * `ts`
  * `static` - Qualsiasi file statico che non è compilato dallo script `build`, come `robots.txt`, `sitemap.xml`, o i file di SEO. Lo script `build` copia tutti i file sotto questa cartella sotto la cartella `dist`. 
  * `templates` - File template EJS. Lo script `publish` converte i template in questa cartella in file HTML.
* `dist` - File compilati dallo script `build`. Lo script `deploy` pubblica il sito su GitHub pages in base a questa cartella. Non modificare manualmente i file in questa cartella
* `server` - File compilati dallo script `build`. Lo script `start` apre il server locale in base a questa cartella. Non modificare manualmente i file in questa cartella
* `services` - Codice sorgente che implementa lo script `publish`.
  * `classes`
  * `models`
* `tools` - Codice sorgente che implementa vari script npm.

## Showcase

* parksb.github.io: https://github.com/parksb/parksb.github.io
* betty-grof.github.io: https://github.com/betty-grof/betty-grof.github.io

## Comandi disponibili

### `npm start`

Avvia il server locale di sviluppo all'indirizzo http://localhost:1234/.

### `npm run publish`

Converte i template in file HTML.

```shell script
$ npm run publish article
```

Converte tutti gli article.

```shell script
$ npm run publish works
```

Converte tutti i work.

```shell script
$ npm run publish article 5
```

Converte un article con l'id 5.

```shell script
$ npm run publish work 3
```

Converte un work con l'id 3.

```shell script
$ npm run publish page
```

Converte tutte le pagine.

### `npm run watch`

Ricompila i file template nella cartella `templates`e i file markdown nella cartella `_articles` automaticamente appena rileva file modificati.

### `npm run build`

Compila i file con il parcel bundler.

### `npm run deploy`

Builda e pubblica i file.

## Licenza

Questo progetto è pubblicato sotto la MIT License - leggi il file [LICENSE](LICENSE) per dettagli.
