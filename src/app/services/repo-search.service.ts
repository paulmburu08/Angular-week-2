import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RepoSearch } from '../modules/repo-search';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'dns';
import { rejects } from 'assert';


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

    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiReponse>(`${this.repoSearchUrl}${this.userInput}`).toPromise().then(response=>{
        let length = this.repoSearch.repoSearch.length;
         
        for (let index=0; index<length; length++){
          this.repoSearch.repoSearch.pop();
        }

        for (let item of response.data){
          this.repoSearch.repoSearch.push();
        }

        resolve()
      },
      error=>{
        this.repoSearch.repoSearch.push('error');

        reject(error);

      });
    });
    return promise;
   }

}
