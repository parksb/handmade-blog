/* eslint-disable no-console */

import ArticlePublisher from '../services/ArticlePublisher';
import WorkPublisher from '../services/WorkPublisher';
import PagePublisher from '../services/PagePublisher';

const args: string[] = process.argv.slice(2);
const target: string = args[0];
const mode: string = args[1];

switch (target) {
  case 'article':
    console.log('\x1b[36m%s\x1b[0m', 'Run ArticlePublisher...');

    if (!mode || mode === 'all') {
      console.log('Publish all articles: ArticlePublisher.publishArticles()');
      ArticlePublisher.publishArticles();
      console.log('\x1b[36m%s\x1b[0m', 'Done!');
    } else if (!Number.isNaN(Number(mode))) {
      const id = Number(mode);
      console.log(`Publish article #${id}: ArticlePublisher.publishArticles(${id})`);
      ArticlePublisher.publishArticles(id);
      console.log('\x1b[36m%s\x1b[0m', 'Done!');
    } else {
      console.log('\x1b[31m%s\x1b[0m', `ERR! Unknown mode '${mode}'.`);
    }
    break;

  case 'work':
    console.log('\x1b[36m%s\x1b[0m', 'Run WorkPublisher...');

    if (!mode || mode === 'all') {
      console.log('Publish all works: WorkPublisher.publishAllWorks()');
      WorkPublisher.publishAllWorks();
      console.log('\x1b[36m%s\x1b[0m', 'Done!');
    } else {
      console.log('\x1b[31m%s\x1b[0m', `ERR! Unknown mode '${mode}'.`);
    }
    break;

  case 'page':
    console.log('\x1b[36m%s\x1b[0m', 'Run PagePublisher...');

    console.log('Publish all pages: PagePublisher.publishIndex()');
    PagePublisher.publishIndex();

    console.log('Publish all pages: PagePublisher.publishAbout()');
    PagePublisher.publishAbout();

    console.log('Publish all pages: PagePublisher.publishNavigation()');
    PagePublisher.publishNavigation();
    break;

  default:
    console.log('\x1b[31m%s\x1b[0m', `ERR! Unknown target '${target}'.`);
}

console.log('');
