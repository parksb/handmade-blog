/* eslint-disable no-console */

import { exec } from 'child_process';
import Watcher from 'watcher';

import PagePublisher from '../services/PagePublisher';
import ArticlePublisher from '../services/ArticlePublisher';

const DIST = './app/public';

console.log('\x1b[36m%s\x1b[0m', 'Watch changes...');

const templateWatcher = new Watcher('app/templates', { ignoreInitial: true });
templateWatcher.on('all', (_, path) => {
  console.log(path);
  const match = path.match(/([^/]+)\.ejs/);
  if (match) {
    const filename = match[1];
    PagePublisher.publishPage(filename);
  }
});

const styleWatcher = new Watcher('app/styles', { ignoreInitial: true });
styleWatcher.on('all', () => {
  exec(`cp -rf ./app/styles/* ${DIST}/styles/`, (err, _, stderr) => {
    if (err) {
      throw err;
    } else if (stderr) {
      throw stderr;
    }
  });

  exec(`cleancss --batch --batch-suffix '' ${DIST}/styles/*.css`, (err, _, stderr) => {
    if (err) {
      throw err;
    } else if (stderr) {
      throw stderr;
    }
  });
});

const articleWatcher = new Watcher('_articles', { ignoreInitial: true });
articleWatcher.on('all', (_, path) => {
  console.log(path);
  const match = path.match(/([^/]+)\.md$/);
  if (match) {
    const filename = `${match[1]}.md`;
    const { article: { id } } = ArticlePublisher.getArticleByFilename(filename);
    ArticlePublisher.publishArticles(id);
  }
});
