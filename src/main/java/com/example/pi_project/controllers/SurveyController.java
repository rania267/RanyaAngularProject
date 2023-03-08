package com.example.pi_project.controllers;

import com.example.pi_project.entities.Answer;
import com.example.pi_project.entities.Question;
import com.example.pi_project.entities.Survey;
import com.example.pi_project.repositories.ContractRepository;
import com.example.pi_project.repositories.QuestionRepository;
import com.example.pi_project.repositories.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class SurveyController {
    @Autowired
    private SurveyRepository surveyRepository;
    @Autowired
    private QuestionRepository questionRepository;
    //http://localhost:8081/surveys/1/results
    @GetMapping("/surveys/{surveyId}/results")
    public ResponseEntity<Map<String, Object>> calculateSurveyResults(@PathVariable Long surveyId) {
        Survey survey = surveyRepository.getById(surveyId);

        List<Answer> answers = survey.getAnswers();
        List<Question> questions = questionRepository.findAll();

        Map<String, Integer> questionCounts = new HashMap<>();
        Map<String, Integer> answerCounts = new HashMap<>();

        for (Question question : questions) {
            questionCounts.put(question.getText(), 0);
            answerCounts.put(question.getText(), 0);
        }

        for (Answer answer : answers) {
            Question question = answer.getQuestion();
            String questionText = question.getText();
            String answerText = answer.getText();

            int currentQuestionCount = questionCounts.get(questionText);
            int currentAnswerCount = answerCounts.get(questionText);

            questionCounts.put(questionText, currentQuestionCount + 1);
            answerCounts.put(questionText, currentAnswerCount + getAnswerCount(answerText));
        }

        Map<String, Object> result = new HashMap<>();
        for (Question question : questions) {
            String questionText = question.getText();
            int questionCount = questionCounts.get(questionText);
            int answerCount = answerCounts.get(questionText);
            double averageAnswer = (double) answerCount / questionCount;
            result.put(questionText, averageAnswer);
        }

        return ResponseEntity.ok(result);
    }

    private int getAnswerCount(String answer) {
        switch (answer.toLowerCase()) {
            case "very dissatisfied":
                return 1;
            case "dissatisfied":
                return 2;
            case "neutral":
                return 3;
            case "satisfied":
                return 4;
            case "very satisfied":
                return 5;
            default:
                return 0;
        }
    }


}
