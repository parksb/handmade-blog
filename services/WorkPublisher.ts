/* eslint-disable no-console */

import * as MarkdownIt from 'markdown-it';
import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';

import WorkMetaInfo from './classes/WorkMetaInfo';
import Work from './classes/Work';
import WorkModel from './models/WorkModel';
import PagePublisher from './PagePublisher';

class WorkPublisher {
  static WORK_ORIGIN_PATH: string = path.join(__dirname, '../_works');

  static WORK_DIST_PATH: string = path.join(__dirname, '../app/public/work');

  static WORK_TEMPLATE: Buffer = fs.readFileSync(path.join(__dirname, '../app/templates/work.ejs'));

  static md: MarkdownIt = new MarkdownIt({
    html: false,
    xhtmlOut: false,
    breaks: false,
    langPrefix: 'language-',
    linkify: true,
    typographer: true,
    quotes: '“”‘’',
  });

  private static extractContent(text: string): string {
    return text.replace(/(-{3})([\s\S]+?)(\1)/, '');
  }

  private static extractMetaInfo(text: string): WorkMetaInfo {
    const metaInfo: WorkMetaInfo = new WorkMetaInfo();
    const metaInfoLines: string[] = text.match(/(-{3})([\s\S]+?)(\1)/)[2]
      .match(/[^\r\n]+/g);

    if (!metaInfoLines) {
      return null;
    }

    metaInfoLines.forEach((metaInfoLine: string) => {
      const kvp: string[] = metaInfoLine.match(/(.+?):(.+)/);

      if (kvp) {
        const key: string = kvp[1].replace(/\s/g, '');
        const value: string = kvp[2].replace(/['"]/g, '').trim();

        metaInfo.setMetaInfoProp(key, value);
      }
    });

    return metaInfo;
  }

  public static publishAllWorks() {
    const workFiles: string[] = fs.readdirSync(this.WORK_ORIGIN_PATH);

    const distWorks: WorkModel[] = workFiles.map((workFile: string, idx: number) => {
      const mdContent: Buffer = fs.readFileSync(`${this.WORK_ORIGIN_PATH}/${workFile}`);
      const htmlContent: string = this.md.render(this.extractContent(String(mdContent)));
      const metaInfo: WorkMetaInfo = this.extractMetaInfo(String(mdContent));

      const work: Work = new Work({
        id: idx,
        title: metaInfo.getTitle(),
        subtitle: metaInfo.getSubtitle(),
        thumbnail: metaInfo.getThumbnail(),
        content: htmlContent,
      });

      fs.writeFileSync(
        `${this.WORK_DIST_PATH}/${idx}.html`,
        ejs.render(String(this.WORK_TEMPLATE), work.getWork()),
      );

      console.log(`* ${idx}: ${metaInfo.getTitle()}`);
      return work.getWork();
    });

    PagePublisher.publishWorks(distWorks);
  }
}

export default WorkPublisher;
