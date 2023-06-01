import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: 'feedback.component.html',
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
