export interface ICommonResponse<T> {
  data: T;
}

export interface ICommonError {
  errorCode: string;
  timestamp: Date;
  title: string;
  status: string;
  detail: string;
  instance: string;
}
