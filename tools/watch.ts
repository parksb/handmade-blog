import * as fs from 'fs';
import ArticlePublisher from '../services/ArticlePublisher';
import ArticleMetaInfo from '../services/classes/ArticleMetaInfo';

function getArticleIdByFilename(filename: string) {
  const path: string = `${ArticlePublisher.ARTICLE_ORIGIN_PATH}/${filename}`;
  const file: Buffer = fs.readFileSync(path);
  const metaInfo: ArticleMetaInfo = ArticlePublisher.extractMetaInfo(String(file));

  return metaInfo.getId();
}

console.log('\x1b[36m%s\x1b[0m', 'The article watcher is running:');

fs.watch(`${__dirname}/../_articles`, (event, filename: string) => {
  const id = getArticleIdByFilename(filename);
  console.log(`${new Date()}: ${filename} #${id}`);
  console.log(`Publish article #${id}: ArticlePublisher.publishArticle(${id})`);
  ArticlePublisher.publishArticle(id);
});
