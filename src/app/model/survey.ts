import { Question } from "./question";
import { Answer } from "./answer";
export class Survey {
  id: number;
  title: string;
  questions: Question[];
  answers: Answer[];


}
