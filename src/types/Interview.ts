export interface InterviewQuestion {
  interviewQuestionId: number;
  questionText: string;
  questionHint?: string;
  order: number;
}

export interface QuestionFormData {
  question: string;
  hint?: string;
  displayOrder: number;
}
