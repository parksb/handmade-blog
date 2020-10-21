<div align="center">
  <h1>

  ✍️

  Handmade Blog

  [![build](https://img.shields.io/github/workflow/status/ParkSB/handmade-blog/Node%20CI/master?style=flat-square)](https://github.com/ParkSB/handmade-blog/actions?query=workflow%3A%22Node+CI%22) ![node](https://img.shields.io/badge/node-%3E%3D%2010.0-brightgreen?style=flat-square) [![demo](https://img.shields.io/netlify/3f01acb3-1107-470a-914f-90d100b87d85?label=demo&style=flat-square)](https://handmade-blog.netlify.com/) [![license](https://img.shields.io/github/license/ParkSB/handmade-blog?style=flat-square)](LICENSE)

  </h1>
</div>

Handmade Blog adalah generator blog statis klasik untuk orang yang ingin memulai blog dengan cepat. mendukung dokumen jenis artikel untuk posting blog, dokumen jenis pekerjaan untuk portofolio, code highlights, [KaTeX](https://katex.org/) syntax, footnotes, dan lainnya.

## Demo: [Klik disini](https://handmade-blog.netlify.com/)

![Preview page artikel](https://user-images.githubusercontent.com/6410412/74097056-be43d100-4b4a-11ea-806b-7bd263d7f623.png)

## Panduan memulai

1. Klik tombol 'Use this template' di atas daftar file untuk membuat repositori baru. Jika Anda ingin menggunakan domain github.io, maka beri nama repositori anda seperti ini `{ID_ANDA}.github.io`. (cth., `betty-grof.github.io`) Jangan lupa untuk mengaktifkan opsi 'Include all branches'.

    ![Klik tombol 'Use this template'](https://user-images.githubusercontent.com/6410412/93741226-f524ae00-fc26-11ea-8f88-ba634d2de66b.png)

    ![Beri nama repositori ke id.github.io, dan aktifkan opsi 'Include all branches'](https://user-images.githubusercontent.com/6410412/93741223-f48c1780-fc26-11ea-9980-8911e531a29c.png)

2. Klik tab 'Settings' di repositori Anda, dan atur source branch untuk GitHub Pages ke branch `gh-pages`. GitHub Pages akan menghosting situs Anda berdasarkan branch `gh-pages`. Anda dapat mengakses situs web melalui `https://{ID_Anda}.github.io/` dalam beberapa menit.

    ![Klik tab 'Settings'](https://user-images.githubusercontent.com/6410412/93750006-d11c9900-fc35-11ea-9ac1-4f92216f28f9.png)

    ![atur source branch untuk GitHub Pages ke branch gh-pages](https://user-images.githubusercontent.com/6410412/93741218-f2c25400-fc26-11ea-9e30-eddb9a2a3b3f.png)

3. Clone repositori, dan instal node packages.

    ```shell script
    $ git clone https://github.com/{ID_ANDA}/{NAMA_REPOSITORI}.git # git clone https://github.com/betty-grof/betty-grof.github.io.git
    $ cd {NAMA_REPOSITORI} # cd betty-grof.github.io
    $ npm install
    ```

4. Modifikasi file `config.json` di direktori `services` untuk mengatur title (judul) dan subtitle (subjudul) blog Anda.

    ```json
    {
      "blogTitle": "Betty Grof",
      "blogSubtitle": "Oh My Glob",
      "article": {
        "tableOfContents": true 
      }
    }
    ```

5. Start server lokal di `http://localhost:1234/`. jalankan script `npm start` membuka server lokal berdasarkan direktori `server`.

    ```shell script
    $ npm start
    ```
   
    ![Website yang berjudul 'Betty Grof' di http://localhost:1234/](https://user-images.githubusercontent.com/6410412/93754683-155f6780-fc3d-11ea-99de-92c747c103f9.png)
    
6. Commit dan push perubahan dalam working directory (direktori kerja) Anda ke remote repository.

   ```shell script
   $ git add ./services/config.json
   $ git commit -m "Mengatur title dan subtitle blog"
   $ git push origin master
   ```

7. Jalankan script `deploy` jika Anda siap untuk menghosting live server. Script ini membangun file lokal ke direktori `dist` dan mem-push ke branch `gh-pages` yang hanya berisi file dalam direktori `dist`. GitHub Pages akan menghosting live server di `https://{ID_ANDA}.github.io/` berdasarkan branch `gh-pages` secara otomatis.

    ```shell script
    $ npm run deploy
    ```

## Penggunaan

### Menulis dan menerbitkan dokumen

1. Tulis dokumen di direktori `_articles` atau `_works`.

2. Jalankan script `npm run publish article` atau `npm run publish work` untuk mengonversi dokumen markdown (md) menjadi HTML.

3. Preview dokumen yang dikonversi di server lokal menggunakan script `npm start`.

4. Commit dan push perubahan ke repositori, dan jalankan `npm run deploy` untuk menerbitkan dokumen ke live server.

### Mengubah halaman

Modifikasi template ejs untuk mengubah konten halaman yang ada. Misalnya, jika Anda ingin meletakkan gambar ke landing page, buka file ʻapp/templates/index.ejs` dan tambahkan tag ʻimg` ke element `main-container`.

```html
<main id="main-container">
  <img src="../assets/profile.jpg" alt="Foto profil saya" />
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</main>
```

Kemudian, jalankan skrip `npm run publish page` untuk mempublikasikan landing page yang telah dimodifikasi.

```shell script
$ npm run publish page
```

Selesai! Anda tidak hanya dapat mengubah landing page tetapi page apa pun seperti ini. (Anda mungkin perlu memahami struktur project.)

### Struktur project

* `_articles` - File markdown untuk posting blog.
* `_works` - File markdown untuk portofolio.
* `app`
  * `assets` - File apa pun yang akan diimpor oleh file HTML seperti gambar, font, dll.
  * `public` - File HTML yang dihasilkan oleh script `publish`. Direktori `server` dan `dist` berdasar pada direktori ini. Jangan mengubah file di bawah direktori ini secara langsung.
    * `article` - File HTML dikonversi dari direktori `_articles`.
    * `work` - File HTML dikonversi dari direktori `_works`.
  * `src` - Source code untuk diimpor oleh file HTML.
    * `css` - File CSS yang dihasilkan oleh script `build`.
    * `scss`
    * `ts`
  * `static` - File statis apa pun yang tidak dikompilasi oleh script `build` seperti `robots.txt`, `sitemap.xml`, atau file SEO. Script `build` menyalin semua file di bawah direktori ini ke direktori `dist`. 
  * `templates` - File HTML digunakan sebagai template ejs. Script `publish` mengonversi file markdown menjadi HTML berdasarkan template di bawah direktori ini.
* `dist` - File dikompilasi oleh script `build`. script `deploy` mendeploy situs web ke GitHub Pages berdasarkan direktori ini. Jangan mengubah file di bawah direktori ini secara langsung.
* `server` - File dikompilasi oleh script `build`. Script `start` membuka server lokal berdasarkan direktori ini. Jangan mengubah file di bawah direktori ini secara langsung.
* `services` - Source code menerapkan script `publish`.
  * `classes`
  * `models`
* `tools` - Source code menerapkan berbagai npm script.

## Showcase (Contoh kasus)

* parksb.github.io: https://github.com/parksb/parksb.github.io
* betty-grof.github.io: https://github.com/betty-grof/betty-grof.github.io

## Script yang Tersedia

### `npm start`

Memulai local development server di http://localhost:1234/.

### `npm run publish`

Mengonversi template ke file HTML.

```shell script
$ npm run publish article
```

Mengonversi semua artikel.

```shell script
$ npm run publish works
```

Mengonversi semua karya.

```shell script
$ npm run publish article 5
```

Mengonversi artikel dengan id 5.

```shell script
$ npm run publish work 3
```

Mengonversi karya dengan id 3.

```shell script
$ npm run publish page
```

Mengonversi semua halaman.

### `npm run watch`

Membangun kembali file template di direktori `templates` dan file markdown di direktori `_articles` secara otomatis setiap kali file diubah.

### `npm run build`

Builds file dengan parcel bundler.

### `npm run deploy`

Build dan deploy file.

## Lisensi

Proyek ini berlisensi di bawah Lisensi MIT - lihat file [LISENSI](LISENSI) untuk detailnya.
