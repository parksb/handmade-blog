<div align="center">
  <h1>

  ✍️

  Handmade Blog

  [![build](https://img.shields.io/github/workflow/status/ParkSB/handmade-blog/Node%20CI/master?style=flat-square)](https://github.com/ParkSB/handmade-blog/actions?query=workflow%3A%22Node+CI%22) ![node](https://img.shields.io/badge/node-%3E%3D%2010.0-brightgreen?style=flat-square) [![demo](https://img.shields.io/netlify/3f01acb3-1107-470a-914f-90d100b87d85?label=demo&style=flat-square)](https://handmade-blog.netlify.com/) [![license](https://img.shields.io/github/license/ParkSB/handmade-blog?style=flat-square)](LICENSE)

  </h1>
</div>

Handmade Blog là một trình nhẹ tạo blog tĩnh cho những người muốn bắt đầu một blog nhanh chóng. Nó hỗ trợ thư mục article cho một bài đăng, thư mục work cho portfolio, nổi bật code, hỗ trợ [KaTeX](https://katex.org/), footnotes và hơn thế nữa.

## Xem thử: [Tại đây](https://handmade-blog.vercel.app/)

![Article page preview](https://user-images.githubusercontent.com/6410412/74097056-be43d100-4b4a-11ea-806b-7bd263d7f623.png)

## Kết quả Lighthouse

**[article/0.html](https://handmade-blog.vercel.app/article/0.html) trên điện thoại**

![Performance 94, Accessibility 100, Best Practices 100, SEO 92, PWA N/A](https://user-images.githubusercontent.com/6410412/169649124-32f4bd18-f3ff-418d-8bb8-61ec6105877a.png)

**[article/0.html](https://handmade-blog.vercel.app/article/0.html) trên máy tính**

![Performance 99, Accessibility 100, Best Practices 92, SEO 91, PWA N/A](https://user-images.githubusercontent.com/6410412/169649130-7f0a82e1-21ac-4c7d-9efb-9f9908865b63.png)

## Bắt Đầu

1. Nhấp vào nút 'Use this template' phía trên danh sách tệp để tạo một kho lưu trữ mới. Nếu bạn muốn sử dụng miền github.io, phải đặt tên cho kho lưu trữ là `{YOUR_ID} .github.io`. (ví dụ: `betty-grof.github.io`) Đừng quên bật tùy chọn 'Include all branches' .

    ![Click the 'Use this template' button](https://user-images.githubusercontent.com/6410412/93741226-f524ae00-fc26-11ea-8f88-ba634d2de66b.png)

    ![Name repository to id.github.io, and enable 'Include all branches' option](https://user-images.githubusercontent.com/6410412/93741223-f48c1780-fc26-11ea-9980-8911e531a29c.png)

2. Nhấp vào tab 'Settings' trong kho lưu trữ của bạn và đặt nhánh nguồn cho Trang GitHub thành nhánh `gh-pages`. GitHub Pages sẽ lưu trữ trang web của bạn dựa trên nhánh `gh-pages`. Bạn sẽ có thể truy cập trang web qua `https://{YOUR_ID}.github.io/` sau vài phút.

    ![Click the 'Settings' tab](https://user-images.githubusercontent.com/6410412/93750006-d11c9900-fc35-11ea-9ac1-4f92216f28f9.png)

    ![Set source branch of the github pages to gh-pages branch](https://user-images.githubusercontent.com/6410412/93741218-f2c25400-fc26-11ea-9e30-eddb9a2a3b3f.png)

3. Sao chép kho lưu trữ và cài đặt các gói node.

    ```shell script
    $ git clone https://github.com/{YOUR_ID}/{REPOSITORY_NAME}.git # git clone https://github.com/betty-grof/betty-grof.github.io.git
    $ cd {REPOSITORY_NAME} # cd betty-grof.github.io
    $ npm install
    ```

4. Thay đổi thông tin như tiêu đề trong điều hướng (trong `app/templates/navigations.ejs`), và chạy lệnh `npm run build`.

    ```html
    <nav>
      <a class="logo-link" href="/">
        <h1>CUSTOMIZED BLOG TITLE</h1>
        <span>customized blog subtitle</span>
      </a>
      <small>
        <a id="about" class="info-link" href="/about.html">👀About</a> /
        <a id="works" class="info-link" href="/works.html">🔥Works</a> /
        <a id="articles" class="info-link" href="/articles.html">📚Articles</a>
      </small>
    </nav>
    ```
    ``` shell script
    $ npm run build
    ```

5. Chạy lệnh  `npm start` để bắt đầu một server tại địa chỉ `http://localhost:8080/`. Server này dựa trên thư mục `dist`.

    ```shell script
    $ npm run build
    $ npm start
    ```
   
    ![The website that is titled 'Betty Grof' at http://localhost:1234/](https://user-images.githubusercontent.com/6410412/93754683-155f6780-fc3d-11ea-99de-92c747c103f9.png)
    
6. Commit và push các thay đổi trong thư mục làm việc của bạn vào kho lưu trữ từ xa.

   ```shell script
   $ git add ./app/templates/navigations.ejs
   $ git commit -m "Customize the blog title and subtitle"
   $ git push origin master
   ```

7. Chạy lệnh `deploy` nếu bạn đã sẵn sàng lưu trữ trang web. Tập lệnh này xây dựng các tệp cục bộ vào thư mục `dist` và đẩy nó đến nhánh `gh-pages` nơi chỉ chứa các tệp trong thư mục `dist`. GitHub Pages sẽ lưu trữ trang web của bạn tại địa chỉ `https://{YOUR_ID}.github.io/` dựa trên nhánh `gh-pages` một cách tự động.

    ```shell script
    $ npm run deploy
    ```

## Sử dụng

### Viết và công khai một tài liệu

1. Viết một tài liệu trong thư mục `_articles` hoặc `_works`.

1. Chạy `npm run publish article` hoặc `npm run publish work` để chuyển tài liệu sang định dạng HTML.

1. Xem trước tài liệu đã chuyển trên máy chủ cụng bộ với lệnh `npm start`.

1. Commit và push thay đổi lên kho, và chạy `npm run deploy` để triển khai.

### Thay đổi một trang

Sửa đổi ejs mẫu để thay đổi nội dung của trang hiện có. Ví dụ: nếu bạn muốn đặt một hình ảnh vào trang đích, hãy mở tệp `app/templates/index.ejs` và thêm thẻ `img` vào yếu tố `main-container`.

```html
<main id="main-container">
  <img src="../assets/profile.jpg" alt="My profile picture" />
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</main>
```

Sau đó, chạy `npm run publish page` để công khai và sửa đổi trang đích và xem trước thay đổi trên máy chủ cục bộ sử dụng `npm start`.

```shell script
$ npm run publish page
$ npm start
```

Nếu bạn đã sẵn sàng triển khai, chạy `npm run deploy`. Bạn có không chỉ có thể thay đổi trang đích mà có thể thay đổi bất cứ trang nào với cách này. (Bạn có thể cần hiểu cấu trúc của dự án.)

### Cấu trúc dự án

* `_articles` - Các tập markdown cho bài đăng.
* `_works` - Các tập markdown cho portfolio.
* `app`
  * `assets` - Bất kỳ tệp nào được nhập bằng tệp HTML như hình ảnh, phông chữ, v.v.
  * `public` - Các tệp HTML được tạo bởi tập lệnh `publish`. Thư mục `server` và` dist` dựa trên thư mục này. Không thay đổi trực tiếp các tệp trong thư mục này.
    * `article` - Các tệp HTML được chuyển đổi từ thư mục `_articles`.
    * `work` - Các tệp HTML được chuyển đổi từ thư mục `_works`.
  * `styles` - Tệp CSS nguồn được dùng trong HTML.
  * `static` - Bất kỳ tệp tĩnh nào không được biên dịch bởi tập lệnh `build` như `robots.txt`, `sitemap.xml` hoặc tệp SEO. Tập lệnh `build` sao chép tất cả các tệp trong thư mục này vào thư mục `dist`.
  * `templates` - Tệp EJS mẫu. Tập lệnh `publish` chuyển đổi các mẫu trong thư mục này thành các tệp HTML.
* `dist` - Các tệp được biên dịch bởi tập lệnh `build`. Tập lệnh `deploy` triển khai một trang web tới các trang GitHub dựa trên thư mục này. Không thay đổi trực tiếp các tệp trong thư mục này.
* `server` - Các tệp được biên dịch bởi tập lệnh `build`. Tập lệnh `start` mở máy chủ cục bộ dựa trên thư mục này. Không thay đổi trực tiếp các tệp trong thư mục này.
* `services` - Mã nguồn triển khai tập lệnh `publish`.
  * `classes`
  * `models`
* `tools` - Mã nguồn triển khai các tập lệnh npm khác nhau.

## Trang mẫu

* parksb.github.io: https://github.com/parksb/parksb.github.io
* betty-grof.github.io: https://github.com/betty-grof/betty-grof.github.io

## Các Lệnh Có Thể

### `npm start`

Khởi động máy chủ phát triển cục bộ tại http://localhost:1234/.

### `npm run publish`

Chuyển đổi mẫu thành tệp HTML.

```shell script
$ npm run publish article
```

Chuyển đổi tất cả các article.

```shell script
$ npm run publish works
```

Chuyển đổi tất cả các works.

```shell script
$ npm run publish article 5
```

Chuyển đổi một article có id là 5.

```shell script
$ npm run publish work 3
```

Chuyển đổi một work có id là 3.

```shell script
$ npm run publish page
```

Chuyển đổi tất cả các trang

### `npm run watch`

Tự động xây dựng lại tệp mẫu trong thư mục `template` và tệp đánh dấu trong thư mục `_articles` bất cứ khi nào tệp được sửa đổi.

### `npm run build`

Tạo tệp với gói bưu kiện.

### `npm run deploy`

Xây dựng và triển khai các tệp.

## Bản quyền

Dự án này dưới bản quyền MIT - xem [LICENSE](../LICENSE) để biết chi tiết.