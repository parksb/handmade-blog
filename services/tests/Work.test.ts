import { expect } from 'chai';

import Work from '../classes/Work';

const workModel = {
  id: 0,
  title: 'Lorem Ipsum',
  subtitle: 'Sed sit amet arcu',
  thumbnail: 'image.jpg',
  content: '<p>Lorem ipsum dolor sit amet.</p>',
};

describe('Work', () => {
  describe('getWork', () => {
    it('should returns work model', () => {
      const work = new Work(workModel);
      expect(work.getWork()).to.equal(workModel);
    });
  });

  describe('getContent', () => {
    it('should returns only content string', () => {
      const work = new Work(workModel);
      expect(work.getContent()).to.equal(workModel.content);
    });
  });
});
