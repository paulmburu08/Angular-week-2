import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserSearch } from '../modules/user-search';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {
  userSearch: UserSearch;
  repoSearchUrl = `${environment.repoUrl}`
  userSearchUrl = `${environment.userUrl}` 
  API_KEY = `${environment.apiKey}`

  constructor(private http : HttpClient) { }

  getUser(search){
    let promise = new Promise<UserSearch>((resolve,reject)=>{
      this.http.get<UserSearch>(`${this.userSearchUrl}${search}?access_token=${this.API_KEY}`).toPromise().then(
        (success) => {
          this.userSearch = success;
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
