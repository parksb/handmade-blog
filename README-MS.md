<div align="center">
  <h1>

  ✍️

  Handmade Blog

  [![build](https://img.shields.io/github/workflow/status/ParkSB/handmade-blog/Node%20CI/master?style=flat-square)](https://github.com/ParkSB/handmade-blog/actions?query=workflow%3A%22Node+CI%22) ![node](https://img.shields.io/badge/node-%3E%3D%2010.0-brightgreen?style=flat-square) [![demo](https://img.shields.io/netlify/3f01acb3-1107-470a-914f-90d100b87d85?label=demo&style=flat-square)](https://handmade-blog.netlify.com/) [![license](https://img.shields.io/github/license/ParkSB/handmade-blog?style=flat-square)](LICENSE)

  </h1>
  
  <strong>Baca dokumen ini dalam bahasa lain:</strong> [🇰🇷](README-KR.md) [🇮🇩](README-ID.md) [:brazil:](README-PT-BR.md) [🇮🇹](README-IT.md) [:greece:](README-EL.md)
</div>

Handmade Blog adalah penjana blog statik ringan untuk orang yang ingin memulakan blog dengan cepat. Ia menyokong dokumen jenis artikel untuk catatan blog, dokumen jenis kerja untuk portfolio, sorotan kod, sintaks [KaTeX](https://katex.org/), nota kaki, dan banyak lagi.

## Demo: [Di sini](https://handmade-blog.netlify.com/)

![Article page preview](https://user-images.githubusercontent.com/6410412/74097056-be43d100-4b4a-11ea-806b-7bd263d7f623.png)

## Cara bermula

1. Klik butang 'Use this template' di atas senarai fail untuk membuat repositori baru. Sekiranya anda ingin menggunakan domain github.io, anda mesti memberi nama repositori `{ID_ANDA}.github.io`. (e.g., `betty-grof.github.io`) Jangan lupa untuk mengaktifkan pilihan 'Include all branches'.

    ![Click the 'Use this template' button](https://user-images.githubusercontent.com/6410412/93741226-f524ae00-fc26-11ea-8f88-ba634d2de66b.png)

    ![Name repository to id.github.io, and enable 'Include all branches' option](https://user-images.githubusercontent.com/6410412/93741223-f48c1780-fc26-11ea-9980-8911e531a29c.png)

2. Klik tab 'Settings' di repositori anda, dan tetapkan cabang sumber untuk GitHub Pages ke cabang `gh-pages`. GitHub Pages akan menghoskan laman web anda berdasarkan cabang `gh-pages`. Anda akan dapat mengakses laman web melalui `https://{ID_ANDA}.github.io/` dalam beberapa minit.

    ![Click the 'Settings' tab](https://user-images.githubusercontent.com/6410412/93750006-d11c9900-fc35-11ea-9ac1-4f92216f28f9.png)

    ![Set source branch of the github pages to gh-pages branch](https://user-images.githubusercontent.com/6410412/93741218-f2c25400-fc26-11ea-9e30-eddb9a2a3b3f.png)

3. Klon repositori, dan pasang pakej node.

    ```shell script
    $ git clone https://github.com/{ID_ANDA}/{NAMA_REPOSITORI}.git # git clone https://github.com/betty-grof/betty-grof.github.io.git
    $ cd {NAMA_REPOSITORI} # cd betty-grof.github.io
    $ npm install
    ```

4. Ubah fail `config.json` di direktori `services` untuk menetapkan tajuk dan sari kata blog anda.

    ```json
    {
      "blogTitle": "Betty Grof",
      "blogSubtitle": "Oh My Glob",
      "article": {
        "tableOfContents": true 
      }
    }
    ```

5. Mulakan pelayan tempatan di `http://localhost:1234/`. Skrip `npm start` akan membuka pelayan tempatan berdasarkan direktori `server`.

    ```shell script
    $ npm start
    ```
   
    ![The website that is titled 'Betty Grof' at http://localhost:1234/](https://user-images.githubusercontent.com/6410412/93754683-155f6780-fc3d-11ea-99de-92c747c103f9.png)
    
6. Komit dan hantar perubahan dalam direktori kerja anda ke repositori terpencil.

   ```shell script
   $ git add ./services/config.json
   $ git commit -m "Set the blog title and subtitle"
   $ git push origin master
   ```

7. Jalankan skrip `deploy` jika anda sudah bersedia untuk menghoskan laman web. Skrip ini membina fail tempatan ke direktori `dist` dan menolak ke cabang `gh-pages` yang hanya berisi fail di direktori `dist`. GitHub Pages akan menghoskan laman web anda di `https://{ID_ANDA}.github.io/` berdasarkan cabang `gh-pages` secara automatik.

    ```shell script
    $ npm run deploy
    ```

## Penggunaan

### Tulis dan terbitkan dokumen

1. Tulis dokumen di direktori  `_articles` atau `_works`.

1. Jalankan skrip `npm run publish article` atau `npm run publish work` untuk menukar dokumen markdown ke HTML.

1. Pratonton dokumen yang ditukar pada pelayan tempatan menggunakan skrip `npm start`.

1. Komit dan tekan perubahan ke repositori, dan jalankan `npm run deploy` untuk menyebarkan.

### Tukar halaman

Ubah suai templat ejs untuk mengubah kandungan halaman yang ada. Contohnya, jika anda ingin meletakkan gambar ke halaman arahan, buka fail `app/templates/index.ejs`, dan tambahkan tag `img` ke elemen `main-container`.

```html
<main id="main-container">
  <img src="../assets/profile.jpg" alt="My profile picture" />
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</main>
```

Kemudian, jalankan skrip `npm run publish page` untuk menerbitkan halaman yang diubah dan pratonton perubahan pada pelayan tempatan menggunakan skrip `npm start`.

```shell script
$ npm run publish page
$ npm start
```

Sekiranya anda bersedia untuk menyebarkan, jalankan skrip `npm run deploy`. Anda tidak hanya boleh menukar halaman utama tetapi halaman seperti ini. (Anda mungkin perlu memahami struktur projek.)

### Struktur projek

* `_articles` - Fail markdown untuk catatan blog.
* `_works` - Fail markdown untuk portfolio.
* `app`
  * `assets` - Sebarang fail yang akan diimport oleh fail HTML seperti gambar, fon, dll.
  * `public` - Fail HTML dihasilkan oleh skrip `publish`. Direktori `server` dan `dist` adalah berdasarkan direktori ini. Jangan ubah fail di bawah direktori ini secara langsung.
    * `article` - Fail HTML ditukar dari direktori `_articles`.
    * `work` - Fail HTML ditukar dari direktori `_works`.
  * `src` - Kod sumber yang akan diimport oleh fail HTML.
    * `css` - Fail CSS dihasilkan oleh skrip `build`.
    * `scss`
    * `ts`
  * `static` - Sebarang fail statik yang tidak dikompilasi oleh skrip `build` seperti `robots.txt`, `sitemap.xml`, atau SEO files. Skrip `build` menyalinkan semua fail di bawah direktori ini ke direktori `dist`. 
  * `templates` - Fail templat EJS. Skrip `publish` menukar templat di bawah direktori ini ke fail HTML.
* `dist` - Fail dikompilasi oleh skrip `build`. Skrip `deploy` menyebarkan laman web ke GitHub Pages berdasarkan direktori ini. Jangan ubah fail di bawah direktori ini secara langsung.
* `server` - Fail dikompilasi oleh skrip `build`. Skrip `start` membuka pelayan tempatan berdasarkan direktori ini. Jangan ubah fail di bawah direktori ini secara langsung.
* `services` - Kod sumber yang melaksanakan skrip `publish`.
  * `classes`
  * `models`
* `tools` - Kod sumber yang melaksanakan pelbagai skrip npm.

## Pameran

* parksb.github.io: https://github.com/parksb/parksb.github.io
* betty-grof.github.io: https://github.com/betty-grof/betty-grof.github.io

## Skrip yang ada

### `npm start`

Memulakan pelayan pembangunan tempatan di http://localhost:1234/.

### `npm run publish`

Menukar templat ke fail HTML.

```shell script
$ npm run publish article
```

Menukar semua artikel.

```shell script
$ npm run publish works
```

Menukar semua karya.

```shell script
$ npm run publish article 5
```

Menukar artikel yang id adalah 5.

```shell script
$ npm run publish work 3
```

Menukar karya yang id adalah 3.

```shell script
$ npm run publish page
```

Menukar semua halaman.

### `npm run watch`

Membangun semula fail templat dalam direktori `templates` dan fail markdown dalam direktori `_articles` secara automatik setiap kali fail diubah.

### `npm run build`

Membina fail dengan parcel bundler.

### `npm run deploy`

Membina dan menyebarkan fail.

## Lesen

Projek ini dilesenkan di bawah Lesen MIT - lihat fail [LESEN](LICENSE) untuk maklumat lanjut..
