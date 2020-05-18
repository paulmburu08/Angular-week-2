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

  constructor(private http: HttpClient) {
   }

   getUser(search){
    let promise = new Promise<RepoSearch>((resolve,reject)=>{
      this.http.get<RepoSearch>(`${this.repoSearchUrl}${search}`).toPromise().then(
        (success) => {
          this.repoSearch = success;
          console.log(success);

            resolve();
        },

        (error) => {
          console.log(error);
          
          reject();
        }
      )
    })

    return promise
  };

}
