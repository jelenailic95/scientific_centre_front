import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {JournalService} from './services/journal/journal.service';
import {AllJournalsComponent} from './components/journals/all-journals/all-journals.component';
import { LoginComponent } from './components/login/login.component';
import { PapersComponent } from './components/papers/papers.component';
import {Globals} from './globals';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import { ViewComponent } from './components/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    AllJournalsComponent,
    LoginComponent,
    PapersComponent,
    NavigationBarComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    JournalService, Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
