import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  template: `
    <h1>Feedback</h1>
    <p>Your answer was {{ isCorrect ? 'correct' : 'incorrect' }}.</p>
    <p>Your score is {{ score }}.</p>
    <button (click)="restartTest()">Restart</button>
  `,
  styleUrls: ['feedback.component.scss'],
})
export class FeedbackComponent {
  isCorrect!: boolean;
  score!: number;

  constructor(private router: Router) {
    const navigationState = this.router.getCurrentNavigation()?.extras.state;
    if (navigationState) {
      this.isCorrect = navigationState['isCorrect'];
      this.score = navigationState['score'];
    }
  }

  restartTest() {
    this.router.navigate(['/']);
  }
}
