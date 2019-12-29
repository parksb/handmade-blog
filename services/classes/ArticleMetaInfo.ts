import ArticleMetaInfoModel from '../models/ArticleMetaInfoModel';

class ArticleMetaInfo implements ArticleMetaInfoModel {
  id: number;

  title: string;

  subtitle?: string;

  date: string;

  tags: string | string[];

  setProp(name: string, value: any) {
    switch (name) {
      case 'id':
        this.id = Number(value);
        break;

      case 'title':
      case 'subtitle':
      case 'date':
      case 'tags':
        this[name] = value;
        break;

      default:
        throw new Error(`Unkown property '${name}'.`);
    }
  }

  getId(): number {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getSubtitle(): string {
    return this.subtitle;
  }

  getDate(): string {
    return this.date;
  }

  getTags(): string[] {
    if (typeof this.tags === 'string') {
      this.tags = this.tags.split(',');
    }

    return this.tags;
  }
}

export default ArticleMetaInfo;
