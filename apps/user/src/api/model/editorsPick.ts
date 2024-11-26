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

export const mockEditorsPick: IEditorsPickListResponse = {
  featuresEditorPickList: [
    {
      id: 123,
      title: "The Hidden Stories Behind SNU's Architecture",
    },
  ],
  snuSocietyEditorPickList: [
    {
      id: 457,
      title: "Student Clubs Revolutionizing Campus Life",
    },
  ],
  artsAndCultureEditorPickList: [
    {
      id: 892,
      title: "Contemporary Art Exhibition Stuns Visitors",
    },
  ],
  shortArticleEditorPickList: [
    {
      id: 675,
      title: "New Library System Launches Next Month",
    },
  ],
  opinionEditorPickList: [
    {
      id: 234,
      title: "Why We Need More Open Discussions",
    },
  ],
};
