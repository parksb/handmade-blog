import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';

import WorkModel from './models/WorkModel';

class WorkListPublisher {
  static WORK_LIST_TEMPLATE: Buffer = fs.readFileSync(path.join(__dirname, '../app/templates/works-template.html'));
  static WORK_LIST_DIST_PATH: string = path.join(__dirname, '../app/works.html');

  public static publishWorkList(works: WorkModel[]) {
    const workList = { works };

    fs.writeFileSync(
      this.WORK_LIST_DIST_PATH,
      ejs.render(String(this.WORK_LIST_TEMPLATE), workList),
    );
  }
}

export default WorkListPublisher;
