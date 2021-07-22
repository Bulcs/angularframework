import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from '../components/Button.component';
import { ResultComponent } from '../components/result.component';
import { VotingCardComponent } from '../components/votingCard.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    ButtonComponent,
    VotingCardComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
