export interface AnswerOptions {
  answer_a: string | null;
  answer_b: string | null;
  answer_c: string | null;
  answer_d: string | null;
  answer_e: string | null;
  answer_f: string | null;
}

export interface CorrectAnswers {
  answer_a_correct: string;
  answer_b_correct: string;
  answer_c_correct: string;
  answer_d_correct: string;
  answer_e_correct: string;
  answer_f_correct: string;
}

export interface Question {
  id: number;
  question: string;
  answers: AnswerOptions;
  correct_answers: CorrectAnswers;
  category: string;
  difficulty: string;
}
