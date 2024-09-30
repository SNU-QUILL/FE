export interface IEditorPickListResponse {
  featuresEditorPickList: IEditorPick[];
  snuSocietyEditorPickList: IEditorPick[];
  artsAndCultureEditorPickList: IEditorPick[];
  shortArticleEditorPickList: IEditorPick[];
  opinionEditorPickList: IEditorPick[];
}

export interface IEditorPick {
  id: number;
  title: string;
  articleId: number;
}
