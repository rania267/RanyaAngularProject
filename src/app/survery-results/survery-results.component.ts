import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey.service';
@Component({
  selector: 'app-survery-results',
  templateUrl: './survery-results.component.html',
  styleUrls: ['./survery-results.component.css']
})
export class SurveryResultsComponent implements OnInit {
  results: { question: string, answer: number }[] = [];

  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
    this.surveyService.getSurveyResults(1).subscribe(
      (data: any) => {
        for (let question in data) {
          this.results.push({ question: question, answer: data[question] });
        }
      },
      (error) => console.log(error)
    );
  }
}
