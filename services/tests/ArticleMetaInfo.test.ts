import { expect } from 'chai';

import ArticleMetaInfo from '../classes/ArticleMetaInfo';

describe('ArticleMetainfo', () => {
  describe('set/get properties', () => {
    it('id', () => {
      const id = 0;
      const articleMetaInfo = new ArticleMetaInfo();
      articleMetaInfo.setProp('id', id);

      expect(articleMetaInfo.getId()).to.equal(id);
    });

    it('title', () => {
      const title = 'Lorem Ipsum';
      const articleMetaInfo = new ArticleMetaInfo();
      articleMetaInfo.setProp('title', title);

      expect(articleMetaInfo.getTitle()).to.equal(title);
    });

    it('subtitle', () => {
      const subtitle = 'Sed sit amet arcu';
      const articleMetaInfo = new ArticleMetaInfo();
      articleMetaInfo.setProp('subtitle', subtitle);

      expect(articleMetaInfo.getSubtitle()).to.equal(subtitle);
    });

    it('date', () => {
      const date = '2019-12-31';
      const articleMetaInfo = new ArticleMetaInfo();
      articleMetaInfo.setProp('date', date);

      expect(articleMetaInfo.getDate()).to.equal(date);
    });

    describe('tags', () => {
      it('string type', () => {
        const tags = 'tag1,tag2';
        const articleMetaInfo = new ArticleMetaInfo();
        articleMetaInfo.setProp('tags', tags);

        expect(articleMetaInfo.getTags()).deep.equal(['tag1', 'tag2']);
      });

      it('string array type', () => {
        const tags = ['tag1', 'tag2'];
        const articleMetaInfo = new ArticleMetaInfo();
        articleMetaInfo.setProp('tags', tags);

        expect(articleMetaInfo.getTags()).deep.equal(tags);
      });
    });
  });
});
