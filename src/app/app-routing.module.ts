import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllJournalsComponent} from './components/journals/all-journals/all-journals.component';
import {LoginComponent} from './components/login/login.component';
import {PapersComponent} from './components/papers/papers.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'journals', component: AllJournalsComponent},
  {path: 'papers', component: PapersComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    enableTracing: false, // <-- debugging purposes only
    // preloadingStrategy: SelectivePreloadingStrategyService,
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
