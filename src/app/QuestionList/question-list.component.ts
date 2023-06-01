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
      text: '1. What does this code output? echo 76 <=> "76 trombones";',
      options: ['1', '-1', 'a parser error', '0'],
      correctAnswer: '0',
    },
    {
      id: 2,
      text: '2. Which is the most secure way to avoid storing a password in clear text in database?',
      options: [
        '$encrypted = shal($password);',
        '$encrypted = crypt($password, $salt);',
        '$encrypted = md5($password);',
        '$encrypted = password_hash($password, PASSWORD_DEFAULT);',
      ],
      correctAnswer: '$encrypted = password_hash($password, PASSWORD_DEFAULT);',
    },
    {
      id: 3,
      text: '3. In a conditional statement, you want to execute the code only if both value are true. Which comparison operator should you use?',
      options: [' ||', ' &', '<=>', '&&'],
      correctAnswer: '&&',
    },
    {
      id: 4,
      text: '4. What is a key difference between GET and POST?',
      options: [
        'GET is used with the HTTP protocol. POST is used with HTTPS.',
        'GET displays the submitted data as part of the URL. During POST, this information is not shown, as its encoded in the request body.',
        'GET is intended for changing the server state and it carries more data than POST.',
        'GET is more secure than POST and should be used for sensitive information.',
      ],
      correctAnswer:
        ' GET displays the submitted data as part of the URL. During POST, this information is not shown, as its encoded in the request body.',
    },
    {
      id: 5,
      text: '5. Which are valid PHP error handling keywords?',
      options: [
        'try, throw, catch, callable',
        'try, yield, catch, finally',
        'yield, throw, catch, finally',
        'try, throw, catch, finally',
      ],
      correctAnswer: 'try, throw, catch, finally',
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
