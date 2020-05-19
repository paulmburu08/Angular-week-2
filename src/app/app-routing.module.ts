import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { RepoSearchComponent } from './components/repo-search/repo-search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GithubSearchComponent } from './components/github-search/github-search.component';


const routes: Routes = [
  {path: 'home', component: GithubSearchComponent },
  {path: 'user', component: UserSearchComponent },
  {path: 'repo', component: RepoSearchComponent},
  {path: '', redirectTo:"/home", pathMatch:"full"},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
