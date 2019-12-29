import { expect } from 'chai';

import Article from '../classes/Article';

const articleModel = {
  id: 0,
  title: 'Lorem Ipsum',
  subtitle: 'Sed sit amet arcu',
  date: '2019-12-31',
  tags: ['tag1', 'tag2'],
  content: '<p>Lorem ipsum dolor sit amet.</p>',
};

describe('Article', () => {
  describe('getArticle', () => {
    it('should returns article model', () => {
      const article = new Article(articleModel);
      expect(article.getArticle()).to.equal(articleModel);
    });
  });

  describe('getContent', () => {
    it('should returns only content string', () => {
      const article = new Article(articleModel);
      expect(article.getContent()).to.equal(articleModel.content);
    });
  });
});
