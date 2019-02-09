import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllJournalsComponent} from './components/journals/all-journals/all-journals.component';
import {LoginComponent} from './components/login/login.component';
import {PapersComponent} from './components/papers/papers.component';
import {ViewComponent} from './components/view/view.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'view', component: ViewComponent},
  {path: 'journals', component: AllJournalsComponent},
  {path: 'papers/:type', component: PapersComponent},
  {path: 'papers/my-papers/:id', component: PapersComponent}

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
