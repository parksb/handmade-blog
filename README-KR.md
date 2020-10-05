<div align="center">
  <h1>

  ✍️

  Handmade Blog

  [![build](https://img.shields.io/github/workflow/status/ParkSB/handmade-blog/Node%20CI/master?style=flat-square)](https://github.com/ParkSB/handmade-blog/actions?query=workflow%3A%22Node+CI%22) ![node](https://img.shields.io/badge/node-%3E%3D%2010.0-brightgreen?style=flat-square) [![demo](https://img.shields.io/netlify/3f01acb3-1107-470a-914f-90d100b87d85?label=demo&style=flat-square)](https://handmade-blog.netlify.com/) [![license](https://img.shields.io/github/license/ParkSB/handmade-blog?style=flat-square)](LICENSE)

  </h1>

  <strong>이 문서를 다른 언어로 읽어보세요:</strong> [🇰🇷](README-KR.md) [🇮🇩](README-ID.md)
</div>

핸드메이드 블로그(Handmade Blog)는 블로그를 빠르게 시작하고 싶어하는 사람들을 위한 가벼운 정적 블로그 생성기입니다. 블로그 포스트를 위한 아티클 타입 문서와 포트폴리오를 위한 작업 타입 문서, 코드 하이라이트, [KaTeX](https://katex.org/) 문법, 각주, 그리고 더 많은 것들을 지원합니다.

## Demo: [Here](https://handmade-blog.netlify.com/)

![아티클 페이지 화면](https://user-images.githubusercontent.com/6410412/74097056-be43d100-4b4a-11ea-806b-7bd263d7f623.png)

## 시작하기 

1. 파일 리스트 위에 있는 'Use this template' 버튼을 눌러 새 저장소를 만드세요. 만약 github.io 도메인을 사용하고 싶다면, 저장소 이름을 `{YOUR_ID}.github.io`. (e.g., `betty-grof.github.io`)으로 지어야 합니다. 'Include all branches' 옵션을 선택하는 것도 잊지 마세요.

    !['Use this template' 버튼을 클릭하세요.](https://user-images.githubusercontent.com/6410412/93741226-f524ae00-fc26-11ea-8f88-ba634d2de66b.png)

    ![저장소 이름을 id.github.io로 짓고, 'Include all branches' 옵션을 활성화하세요.](https://user-images.githubusercontent.com/6410412/93741223-f48c1780-fc26-11ea-9980-8911e531a29c.png)

2. 새로 만든 저장소에서 'Settings' 탭을 클릭하고, GitHub Pages를 위한 'Source branch'를 `gh-pages` 브랜치로 설정하세요. GitHub Pages가 `gh-pages` 브랜치를 기반으로 웹사이트를 호스팅하게 됩니다. 이제 몇 분뒤 `https://{YOUR_ID}.github.io/`로 웹사이트에 접속할 수 있을 것입니다.

    !['Settings' 탭을 클릭하세요.](https://user-images.githubusercontent.com/6410412/93750006-d11c9900-fc35-11ea-9ac1-4f92216f28f9.png)

    ![github pages의 source branch를 gh-pages 브랜치로 설정하세요.](https://user-images.githubusercontent.com/6410412/93741218-f2c25400-fc26-11ea-9e30-eddb9a2a3b3f.png)

3. 저장소를 클론하고 패키지를 설치하세요.

    ```shell script
    $ git clone https://github.com/{YOUR_ID}/{REPOSITORY_NAME}.git # git clone https://github.com/betty-grof/betty-grof.github.io.git
    $ cd {REPOSITORY_NAME} # cd betty-grof.github.io
    $ npm install
    ```

4. `services` 디렉토리의 `config.json` 파일을 수정해 블로그의 타이틀과 서브타이틀을 변경하세요.

    ```json
    {
      "blogTitle": "Betty Grof",
      "blogSubtitle": "Oh My Glob",
      "article": {
        "tableOfContents": true 
      }
    }
    ```

5. `http://localhost:1234/`에서 로컬 서버를 구동하세요. `npm start` 스크립트가 `server` 디렉토리를 기반으로 로컬 서버를 열어줍니다.

    ```shell script
    $ npm start
    ```
   
    ![http://localhost:1234/의 'Betty Grof'로 이름지어진 웹사이트.](https://user-images.githubusercontent.com/6410412/93754683-155f6780-fc3d-11ea-99de-92c747c103f9.png)
    
6. 작업 디렉토리의 변경사항을 커밋하고, 원격 저장소로 푸시하세요.

   ```shell script
   $ git add ./services/config.json
   $ git commit -m "Set the blog title and subtitle"
   $ git push origin master
   ```

7. 웹사이트를 호스팅할 준비가 됐다면 `deploy` 스크립트를 실행하세요. 이 스크립트는 로컬 파일을 `dist` 디렉토리로 빌드하고, 빌드한 내용을 `gh-pages` 브랜치로 푸시합니다. `gh-pages` 브랜치는 `dist` 디렉토리의 파일만 가지고 있습니다. GitHub Pages가 자동으로 `gh-pages`를 기반으로해 `https://{YOUR_ID}.github.io/`에 웹사이트를 호스팅해줄 것입니다.

    ```shell script
    $ npm run deploy
    ```

## 사용법

### 문서 작성 및 발행

1. `_articles` 또는 `_works` 디렉토리에 문서를 작성하세요.

1. `npm run publish article` 또는 `npm run publish work` 스크립트를 실행해 마크다운 문서를 HTML로 변환하세요.

1. `npm start` 스크립트를 이용해 로컬 서버에서 변환된 문서를 확인하세요.

1. 변경사항을 저장소에 커밋, 푸시하고 `npm run deploy` 스크립트를 실행해 배포하세요.

### 페이지 변경

ejs 템플릿을 수정해 기존 페이지의 내용을 변경할 수 있습니다. 예를 들어, 첫 페이지에 사진을 넣고 싶다면 `app/templates/index.ejs` 파일을 열고 `main-container` 요소에 `img` 태그를 추가해보세요.

```html
<main id="main-container">
  <img src="../assets/profile.jpg" alt="My profile picture" />
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</main>
```

이제 `npm run publish page` 스크립트를 실행해 변경된 첫 페이지를 발행하고 `npm start` 스크립트로 로컬 서버에서 변경된 첫 페이지를 확인하세요.

```shell script
$ npm run publish page
$ npm start
```

배포할 준비가 됐다면 `npm run deploy` 스크립트를 실행하세요. 첫 페이지 뿐 아니라 다른 페이지들로 이런 방식으로 변경할 수 있습니다. (프로젝트 구조에 대한 이해가 필요할 수도 있습니다.)

### 프로젝트 구조

* `_articles` - 블로그 포스트를 위한 마크다운 파일들.
* `_works` - 포트폴리오를 위한 마크다운 파일들.
* `app`
  * `assets` - HTML 파일에 포함되는 이미지, 포트 등 파일들.
  * `public` - `publish` 스크립트로 생성되는 HTML 파일들. `server`와 `dist` 디렉토리가 이 디렉토리를 기반합니다. 이 디렉토리 안에 있는 파일들을 직접 수정하지 마세요.
    * `article` - `_articles` 디렉토리에서 변환된 HTML 파일들.
    * `work` - `_works` 디렉토리에서 변환된 HTML 파일들.
  * `src` - HTML 파일에 포함되는 스크립트들.
    * `css` - `build` 스크립트로 생성되는 CSS 파일들.
    * `scss`
    * `ts`
  * `static` - `build` 스크립트로 컴파일되지 않는 `robots.txt`, `sitemap.xml` 또는 SEO 파일 등 정적 파일들. `build` 스크립트는 이 디렉토리의 모든 파일을 `dist` 디렉토리로 복사합니다. 
  * `templates` - EJS 템플릿 파일들. `publish` 스크립트가 이 디렉토리의 템플릿들을 HTML 파일로 변환합니다.
* `dist` - `build` 스크립트로 컴파일된 파일들. `deploy` 스크립트가 이 디렉토리를 기반으로 GitHub pages에 배포합니다. 이 디렉토리 안에 있는 파일을 직접 수정하지 마세요.
* `server` - `build` 스크립트로 컴파일된 파일들. `start` 스크립트가 이 디렉토리를 기반으로 로컬 서버를 구동합니다. 이 디렉토리 안에 있는 파일을 직접 수정하지 마세요.
* `services` - `publish` 스크립트를 구현하는 소스코드.
  * `classes`
  * `models`
* `tools` - 여러 npm 스크립트들을 구현하는 소스코드.

## 예시

* parksb.github.io: https://github.com/parksb/parksb.github.io

## 사용 가능한 스크립트

### `npm start`

`http://localhost:1234/`에 로컬 개발 서버를 구동합니다.

### `npm run publish`

템플릿을 HTML 파일로 변환합니다.

```shell script
$ npm run publish article
```

모든 아티클을 변환합니다.

```shell script
$ npm run publish works
```

모든 작업을 변환합니다.

```shell script
$ npm run publish article 5
```

아이디가 5인 아티클을 변환합니다.

```shell script
$ npm run publish work 3
```

아이디가 3인 작업을 변환합니다.

```shell script
$ npm run publish page
```

모든 페이지를 변환합니다.

### `npm run watch`

`templates` 디렉토리에 있는 템플릿 파일과 `_articles` 디렉토리에 있는 마크다운 파일이 변경될 때마다 자동으로 재빌드합니다.

### `npm run build`

parcel 번들러를 이용해 파일을 빌드합니다.

### `npm run deploy`

파일들을 빌드하고 배포합니다.

## 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다. - 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.
