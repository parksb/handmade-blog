/* eslint-disable no-console */

import * as fs from 'fs';
import * as path from 'path';

import ArticlePublisher from '../services/ArticlePublisher';
import ArticleMetaInfo from '../services/classes/ArticleMetaInfo';
import WorkPublisher from '../services/WorkPublisher';
import PagePublisher from '../services/PagePublisher';

function getArticleIdByFilename(filename: string) {
  const originalPath: string = `${ArticlePublisher.ARTICLE_ORIGIN_PATH}/${filename}`;
  const file: Buffer = fs.readFileSync(originalPath);
  const metaInfo: ArticleMetaInfo = ArticlePublisher.extractMetaInfo(String(file));

  return metaInfo.getId();
}

console.log('\x1b[36m%s\x1b[0m', 'The watcher is running:');

fs.watch(`${__dirname}/../_articles`, (event, filename: string) => {
  const id = getArticleIdByFilename(filename);
  console.log(`${new Date()}: ${filename} #${id}`);
  ArticlePublisher.publishArticles(id);
});

fs.watch(`${__dirname}/../app/templates`, (event, filename: string) => {
  console.log(`${new Date()}: ${filename}`);

  switch (path.parse(filename).name) {
    case 'index':
      PagePublisher.publishIndex();
      break;
    case 'navigation':
      PagePublisher.publishNavigation();
      break;
    case 'about':
      PagePublisher.publishAbout();
      break;
    case 'articles':
      ArticlePublisher.publishArticles();
      break;
    case 'works':
      WorkPublisher.publishAllWorks();
      break;
    default:
      console.log('Unknown page');
  }
});
