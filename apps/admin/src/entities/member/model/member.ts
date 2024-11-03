export type TMemberListResponse = Record<string, IMember[]>;

export interface IMember {
  id: number;
  memberPictureUrl: string;
  name: string;
  role: string;
  email: string;
}
