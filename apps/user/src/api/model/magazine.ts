export interface IMagazineRequest {
  pageSize: number;
}

export interface IMagazineResponse {
  volumeNumber: number;
  publishDate: string;
  volumeCoverLink: string;
  fileLink: string;
}

export interface IMagazineResponseWithPages {
  totalPages: number;
  content: IMagazineResponse[];
}
