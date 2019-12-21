import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';
import ArticleModel from './models/ArticleModel';
import WorkModel from './models/WorkModel';

class PagePublisher {
  static config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json')).toString());

  public static publishIndex() {
    const TEMPLATE: Buffer = fs.readFileSync(path.join(__dirname, '../app/templates/index.ejs'));
    const DIST_PATH: string = path.join(__dirname, '../app/public/index.html');
    const { blogTitle } = PagePublisher.config;

    fs.writeFileSync(DIST_PATH, ejs.render(String(TEMPLATE), { blogTitle }));
  }

  public static publishNavigation() {
    const TEMPLATE: Buffer = fs.readFileSync(path.join(__dirname, '../app/templates/navigation.ejs'));
    const DIST_PATH: string = path.join(__dirname, '../app/public/navigation.html');
    const { blogTitle, blogSubtitle } = PagePublisher.config;

    fs.writeFileSync(DIST_PATH, ejs.render(String(TEMPLATE), { blogTitle, blogSubtitle }));
  }

  public static publishAbout() {
    const TEMPLATE: Buffer = fs.readFileSync(path.join(__dirname, '../app/templates/about.ejs'));
    const DIST_PATH: string = path.join(__dirname, '../app/public/about.html');
    const { blogTitle } = PagePublisher.config;

    fs.writeFileSync(DIST_PATH, ejs.render(String(TEMPLATE), { blogTitle }));
  }

  public static publishArticles(articles: ArticleModel[]) {
    const TEMPLATE: Buffer = fs.readFileSync(path.join(__dirname, '../app/templates/articles.ejs'));
    const DIST_PATH: string = path.join(__dirname, '../app/public/articles.html');
    const { blogTitle } = PagePublisher.config;

    fs.writeFileSync(DIST_PATH, ejs.render(String(TEMPLATE), { blogTitle, articles }));
  }

  public static publishWorks(works: WorkModel[]) {
    const TEMPLATE: Buffer = fs.readFileSync(path.join(__dirname, '../app/templates/works.ejs'));
    const DIST_PATH: string = path.join(__dirname, '../app/public/works.html');
    const { blogTitle } = PagePublisher.config;

    fs.writeFileSync(DIST_PATH, ejs.render(String(TEMPLATE), { blogTitle, works }));
  }
}

export default PagePublisher;
