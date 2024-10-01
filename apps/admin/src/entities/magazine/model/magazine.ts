export interface IMagazineListRequest {
  count: number;
}

export interface IMagazine {
  volumeNumber: number;
  publishDate: string;
  volumeCoverLink: string;
  fileLink: string;
}
