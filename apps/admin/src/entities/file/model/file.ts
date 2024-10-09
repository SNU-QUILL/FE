export enum EFileType {
  MAGAZINE = "MAGAZINE",
  MAGAZINE_COVER = "MAGAZINE_COVER",
  ARTICLE = "ARTICLE",
  STAFF_PROFILE = "STAFF_PROFILE",
}

export interface IFileUploadRequest {
  file: Blob;
  fileType: EFileType;
}

export interface IFileUploadResponse {
  endPoint: string;
}
