import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';

class PagePublisher {
  static config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json')).toString());

  public static publishIndex() {
    const TEMPLATE: Buffer = fs.readFileSync(path.join(__dirname, '../app/templates/index.html'));
    const DIST_PATH: string = path.join(__dirname, '../app/index.html');
    const { blogTitle } = PagePublisher.config;

    fs.writeFileSync(DIST_PATH, ejs.render(String(TEMPLATE), { blogTitle }));
  }

  public static publishNavigation() {
    const TEMPLATE: Buffer = fs.readFileSync(path.join(__dirname, '../app/templates/navigation.html'));
    const DIST_PATH: string = path.join(__dirname, '../app/navigation.html');
    const { blogTitle, blogSubtitle } = PagePublisher.config;

    fs.writeFileSync(DIST_PATH, ejs.render(String(TEMPLATE), { blogTitle, blogSubtitle }));
  }

  public static publishAbout() {
    const TEMPLATE: Buffer = fs.readFileSync(path.join(__dirname, '../app/templates/about.html'));
    const DIST_PATH: string = path.join(__dirname, '../app/about.html');
    const { blogTitle } = PagePublisher.config;

    fs.writeFileSync(DIST_PATH, ejs.render(String(TEMPLATE), { blogTitle }));
  }
}

export default PagePublisher;
