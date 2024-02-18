export interface Answer {
  order: number;
  title: string;
  type: string;
  answer: string | string[];
}

export interface AnswersSchema {
  isLoading: boolean;
  error?: string;
  answers: Answer[];
}
