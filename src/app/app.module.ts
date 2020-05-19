import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './components/github-search/github-search.component';
import { RepoSearchComponent } from './components/repo-search/repo-search.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BackgroundColorDirective } from './directives/background-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    RepoSearchComponent,
    UserSearchComponent,
    NotFoundComponent,
    BackgroundColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
