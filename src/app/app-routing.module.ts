import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionListComponent } from './QuestionList/question-list.component';
import { FeedbackComponent } from './Feedback/feedback.component';

const routes: Routes = [
  { path: '', component: QuestionListComponent },
  { path: 'feedback', component: FeedbackComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
