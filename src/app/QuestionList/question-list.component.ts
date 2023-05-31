import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: 'question-list.component.html',
  styleUrls: ['question-list.component.scss'],
})
export class QuestionListComponent {
  questions = [
    {
      id: 1,
      text: 'Question 1',
      options: ['Option A', 'Option B', 'Option C'],
      correctAnswer: 'Option B',
    },
    {
      id: 2,
      text: 'Question 2',
      options: ['Option A', 'Option B', 'Option C'],
      correctAnswer: 'Option C',
    },
    {
      id: 3,
      text: 'Question 3',
      options: ['Option A', 'Option B', 'Option C'],
      correctAnswer: 'Option A',
    },
    {
      id: 4,
      text: 'Question 4',
      options: ['Option A', 'Option B', 'Option C'],
      correctAnswer: 'Option C',
    },
    {
      id: 5,
      text: 'Question 5',
      options: ['Option A', 'Option B', 'Option C'],
      correctAnswer: 'Option A',
    },
  ];
  selectedAnswers: { [questionId: number]: string } = {};

  constructor(private router: Router) {}
  isSubmitted = false;
  selectedQuestionIndex: number | undefined;

  calculateScore() {
    let score = 0;
    for (const question of this.questions) {
      const selectedAnswer = this.selectedAnswers[question.id];
      if (selectedAnswer === question.correctAnswer) {
        score++;
      }
    }
    return score;
  }

  submitQuiz() {
    const unansweredQuestions = this.questions.filter(
      (question) => !this.selectedAnswers[question.id]
    );

    if (unansweredQuestions.length > 0) {
      unansweredQuestions.forEach((question) => {
        const element = document.getElementById(`question-${question.id}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      });
      this.isSubmitted = true;
      alert('Please answer all questions before submitting the quiz.');
    } else {
      const score = this.calculateScore();
      this.router.navigate(['/feedback'], { state: { score } });
    }
  }

  selectQuestion(index: number) {
    this.selectedQuestionIndex = index;
  }
}
