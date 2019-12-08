import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';

import ArticleModel from './models/ArticleModel';

class ArticleListPublisher {
  static ARTICLE_LIST_TEMPLATE: Buffer = fs.readFileSync(path.join(__dirname, '../app/templates/articles-template.html'));
  static ARTICLE_LIST_DIST_PATH: string = path.join(__dirname, '../app/articles.html');

  public static publishArticleList(articles: ArticleModel[]) {
    const articleList = { articles };

    fs.writeFileSync(
      this.ARTICLE_LIST_DIST_PATH,
      ejs.render(String(this.ARTICLE_LIST_TEMPLATE), articleList),
    );
  }
}

export default ArticleListPublisher;
