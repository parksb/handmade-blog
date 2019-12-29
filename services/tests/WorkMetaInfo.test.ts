import { expect } from 'chai';

import WorkMetaInfo from '../classes/WorkMetaInfo';

describe('WorkMetainfo', () => {
  describe('set/get properties', () => {
    it('id', () => {
      const id = 0;
      const workMetaInfo = new WorkMetaInfo();
      workMetaInfo.setMetaInfoProp('id', id);

      expect(workMetaInfo.getId()).to.equal(id);
    });

    it('title', () => {
      const title = 'Lorem Ipsum';
      const workMetaInfo = new WorkMetaInfo();
      workMetaInfo.setMetaInfoProp('title', title);

      expect(workMetaInfo.getTitle()).to.equal(title);
    });

    it('subtitle', () => {
      const subtitle = 'Sed sit amet arcu';
      const workMetaInfo = new WorkMetaInfo();
      workMetaInfo.setMetaInfoProp('subtitle', subtitle);

      expect(workMetaInfo.getSubtitle()).to.equal(subtitle);
    });

    it('thumbnail', () => {
      const thumbnail = 'image.jpg';
      const workMetaInfo = new WorkMetaInfo();
      workMetaInfo.setMetaInfoProp('thumbnail', thumbnail);

      expect(workMetaInfo.getThumbnail()).to.equal(thumbnail);
    });
  });
});
