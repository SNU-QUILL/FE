import { EARTICLE_CATEGORY } from "@/constants/article";

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

export interface IUpdateEdiorPickRequest {
  id: number;
  category: EARTICLE_CATEGORY;
}
