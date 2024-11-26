export interface IEditorsPickListResponse {
  featuresEditorPickList: IEditorsPick[];
  snuSocietyEditorPickList: IEditorsPick[];
  artsAndCultureEditorPickList: IEditorsPick[];
  shortArticleEditorPickList: IEditorsPick[];
  opinionEditorPickList: IEditorsPick[];
}

export interface IEditorsPick {
  id: number;
  title: string;
}
