package com.example.pi_project.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Question {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(name = "text")
        private String text;

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "survey_id")
        private Survey survey;

        @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
        private List<Answer> answers;

        // Constructors, getters and setters

        public Question() {
            this.answers = new ArrayList<>();
        }

        public Question(String text) {
            this.text = text;
            this.answers = new ArrayList<>();
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }

        public Survey getSurvey() {
            return survey;
        }

        public void setSurvey(Survey survey) {
            this.survey = survey;
        }

        public List<Answer> getAnswers() {
            return answers;
        }

        public void setAnswers(List<Answer> answers) {
            this.answers = answers;
        }

        public void addAnswer(Answer answer) {
            answer.setQuestion(this);
            this.answers.add(answer);
        }
    }


