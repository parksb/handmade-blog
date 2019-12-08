import ArticlePublisher from './../services/ArticlePublisher';
import WorkPublisher from '../services/WorkPublisher';

const args: string[] = process.argv.slice(2);
const target: string = args[0];
const mode: string = args[1];

switch (target) {
  case 'article':
    console.log('\x1b[36m%s\x1b[0m', 'Run ArticlePublisher...');

    if (!mode || mode === 'all') {
      console.log('Publish all articles: ArticlePublisher.publishAllArticles()');
      ArticlePublisher.publishAllArticles();
      console.log('\x1b[36m%s\x1b[0m', 'Done!');
    } else if (!isNaN(Number(mode))) {
      const id = Number(mode);
      console.log(`Publish article #${id}: ArticlePublisher.publishArticle(${id})`);
      ArticlePublisher.publishArticle(id);
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

  default:
    console.log('\x1b[31m%s\x1b[0m', `ERR! Unknown target '${target}'.`);
}

console.log('');
