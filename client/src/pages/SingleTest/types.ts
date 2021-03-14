export type QuestionType = "regular";
export interface IQuestion {
  type?: QuestionType;
  title: string;
  answers: IAnswer[];
}

export interface IAnswer {
  title: string;
  points: number;
}
