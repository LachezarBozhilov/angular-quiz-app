import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { QuestionListComponent } from './QuestionList/question-list.component';
import { FeedbackComponent } from './Feedback/feedback.component';

@NgModule({
  declarations: [AppComponent, QuestionListComponent, FeedbackComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
