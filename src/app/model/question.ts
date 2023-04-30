import { Answer } from './answer';
import { Survey } from './survey';


export class Question {

  
  id: number;


  text: string;


  survey: Survey;


  answers: Answer[];

  constructor() {
    this.answers = [];
  }

  public addAnswer(answer: Answer) {
    answer.question = this;
    this.answers.push(answer);
  }
}
