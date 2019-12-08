interface ArticleMetaInfoModel {
  id: number;

  title: string;

  subtitle?: string;

  date: string;

  tags: string | string[];
}

export default ArticleMetaInfoModel;
