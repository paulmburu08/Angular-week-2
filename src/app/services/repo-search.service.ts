import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RepoSearch } from '../modules/repo-search';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RepoSearchService {

  repoSearchUrl = `${environment.repoUrl}`;
  userSearchUrl = `${environment.userUrl}`;
  API_KEY = `${environment.apiKey}`;
  repoSearch : RepoSearch;
  userInput : string;

  constructor(private http: HttpClient) {
    this.repoSearch = new RepoSearch();
   }

   dataRequest(){
    interface ApiReponse{
      data: any[];
    }

   }

}
