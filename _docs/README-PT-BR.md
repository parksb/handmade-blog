<div align="center">
  <h1>

  ✍️

  Handmade Blog

  [![build](https://img.shields.io/github/workflow/status/ParkSB/handmade-blog/Node%20CI/master?style=flat-square)](https://github.com/ParkSB/handmade-blog/actions?query=workflow%3A%22Node+CI%22) ![node](https://img.shields.io/badge/node-%3E%3D%2010.0-brightgreen?style=flat-square) [![demo](https://img.shields.io/netlify/3f01acb3-1107-470a-914f-90d100b87d85?label=demo&style=flat-square)](https://handmade-blog.netlify.com/) [![license](https://img.shields.io/github/license/ParkSB/handmade-blog?style=flat-square)](LICENSE)

  </h1>
  
  <strong>Leia essa documentação em outra língua:</strong> [:us:](README.md) [:kr:](README-KO.md) [:indonesia:](README-ID.md) [:it:](README-IT.md) [:greece:](README-EL.md)
</div>

Handmade Blog é um leve gerador de blog estático para pessoas que querem começar um blog rapidamente. Ele suporta documentos do tipo **artigo** para postagem de blog, documento do tipo **trabalho** para portifólio, destaques de código, sintaxe [KaTeX](https://katex.org/), notas de rodápé e mais.

## Demo: [Aqui](https://handmade-blog.netlify.com/)

![Pré-visualização de artigo](https://user-images.githubusercontent.com/6410412/74097056-be43d100-4b4a-11ea-806b-7bd263d7f623.png)

## Começando

1. Clique no botão 'Use this template' acima da lista de arquivos para criar um novo repositório. Caso queria utilizar o domínio github.io, você deve renomear o repositório para `{SEU_ID}.github.io`. (ex., `betty-grof.github.io`) Não se esqueça de habilitar a opção 'Include all branches'.

    ![Click no botão 'Use this template'](https://user-images.githubusercontent.com/6410412/93741226-f524ae00-fc26-11ea-8f88-ba634d2de66b.png)

    ![Renomeie seu repositório para id.github.io, e habilite a opção 'Include all branches'](https://user-images.githubusercontent.com/6410412/93741223-f48c1780-fc26-11ea-9980-8911e531a29c.png)

2. Clique na aba 'Settings' em seu repositório, e defina a 'source branch' como 'gh-pages' para o GitHub Pages. O GitHub Pages irá hospedar seu website baseado na branch 'gh-pages'. Com isso, você poderá acessar seu website via `https://{SEU_ID}.github.io/` em alguns minutos.

    ![Clique na aba 'Settings'](https://user-images.githubusercontent.com/6410412/93750006-d11c9900-fc35-11ea-9ac1-4f92216f28f9.png)

    ![Defina branch de origem do GitHub Pages para branch gh-pages](https://user-images.githubusercontent.com/6410412/93741218-f2c25400-fc26-11ea-9e30-eddb9a2a3b3f.png)

3. Clone o repositório, e instale os pacots do node.

    ```shell script
    $ git clone https://github.com/{SEU_ID}/{NOME_REPOSITORIO}.git # git clone https://github.com/betty-grof/betty-grof.github.io.git
    $ cd {NOME_REPOSITORIO} # cd betty-grof.github.io
    $ npm install
    ```

4. Modifique o arquivo `config.json` no diretório `services` para definir o título e o subtítulo do seu blog.

    ```json
    {
      "blogTitle": "Betty Grof",
      "blogSubtitle": "Oh My Glob",
      "article": {
        "tableOfContents": true 
      }
    }
    ```

5. Inicie um servidor local em `http://localhost:1234/`. O script `npm start` abre um server local baseado no diretório `server`.

    ```shell script
    $ npm start
    ```
   
    ![O website com o título 'Betty Grof' em http://localhost:1234/](https://user-images.githubusercontent.com/6410412/93754683-155f6780-fc3d-11ea-99de-92c747c103f9.png)
    
6. _Commit_ e _push_ as mudanças em seu diretório de trabalho para o repositório remoto.

   ```shell script
   $ git add ./services/config.json
   $ git commit -m "Definido o título e subtítulo do blog"
   $ git push origin master
   ```

7. Execute o script de `deploy` se você estiver pronto para hospedar seu website. Esse script constrói os arquivos locais para o diretório `dist` e os envia para a branch `gh-pages` que contém apenas os arquivos do diretório `dist`. Assim o Github Pages irá hospedar seu seu website em `https://{SEU_ID}.github.io/` automaticamente baseando-se na branch `gh-pages`

    ```shell script
    $ npm run deploy
    ```

## Uso

### Escreva e publique um documento

1. Escreva um documento nos diretórios `_articles` ou `_works`.

1. Execute os comandos `npm run publish article` ou `npm run publish work` para converter os arquivos Markdown em HTML.

1. Visualize os documentos convertidos no servidor local utilizando o script `npm start`.

1. _Commit_ e _push_ as mundaças para o repositório, e execute `npm run deploy` para fazer o _deploy_.

### Modifique uma página

Modifique um template ejs para mudar o conteúdo de uma página existente. Por exemplo, se você deseja colocar uma imagem na landing page, abra o arquivo `app/templates/index.ejs` e adicione a tag `img` no elemento `main-container`.

```html
<main id="main-container">
  <img src="../assets/profile.jpg" alt="Minha imagem de perfil" />
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</main>
```

Então, execute o script `npm run publish page` para publicar a landing page modificada e visualize as mudanças no servidor local usando o script `npm start`.

```shell script
$ npm run publish page
$ npm start
```

Se você estiver pronto para o deploy, execute o script `npm run deploy`. Você pode mudar não só alterar a landing page mas qualquer página desta forma. (Talvez você precise entender a estrutura do projeto.)

### Estrutura do projeto

* `_articles` - Arquivos Markdown para as publicações do blog.
* `_works` - Arquivos Markdown para o portfolio.
* `app`
  * `assets` - Qualquer arquivo a ser importado por arquivos HTML tal como imagens, fontes, etc. 
  * `public` - Arquivos HTML gerado pelo script `publish`. Os diretórios `server` e `dist` são baseados neste diretório. Não altere os arquivos neste diretório diretamente.
    * `article` - Arquivos HTML convertidos do diretório `_articles`.
    * `work` - Arquivos HTML convertidos do diretório `_works`.
  * `src` - Código-fonte a ser importado por arquivos HTML.
    * `css` - Arquvos CSS gerados pele script `build`.
    * `scss`
    * `ts`
  * `static` - Qualquer arquivo estático que não são compilados pelo script `build` tal como `robots.txt`, `sitemap.xml`, ou arquivos de SEO. O script `build` copia todos os arquivos deste dirtório para o diretório `dist`. 
  * `templates` - Arquivos de template EJS. O script `publish` converte os templates deste diretório para arquivos HTML.
* `dist` - Arquivos compilados pelo script `build`. O script `deploy` envia um website para o GitHub pages baseado neste diretório. Não altere os arquivos neste diretório diretamente.
* `server` - Arquivos compilados pelo script `build`. O script `start` abre um servidor local baseado neste diretório. Não altere os arquivos neste diretório diretamente.
* `services` - Código-fonte que implementa o script `publish`.
  * `classes`
  * `models`
* `tools` - Código-fonte que implementa vários scripts npm.

## Casos de uso

* parksb.github.io: https://github.com/parksb/parksb.github.io
* betty-grof.github.io: https://github.com/betty-grof/betty-grof.github.io

## Scripts disponíveis

### `npm start`

Inicia um servidor de desenvolvimento local http://localhost:1234/.

### `npm run publish`

Converte os templates para arquivos HTML.

```shell script
$ npm run publish article
```

Converte todos os artigos.

```shell script
$ npm run publish works
```

Converte todos os trabalhos.

```shell script
$ npm run publish article 5
```

Converte um artigo com o id 5.

```shell script
$ npm run publish work 3
```

Converte um trabalho com o id 5.

```shell script
$ npm run publish page
```

Converte todas as páginas.

### `npm run watch`

Reconstrói arquivos de modelo no diretório `templates` e arquivos markdown no diretório` _articles` automaticamente sempre que os arquivos são modificados.

### `npm run build`

Executa o build dos arquivos utilizando o empacotador parcel.

### `npm run deploy`

Executa o build e o deploys dos arquivos.

## License

Este projeto está licenciado sob a Licença MIT - consulte o arquvio [LICENSE](LICENSE) para obter detalhes.
