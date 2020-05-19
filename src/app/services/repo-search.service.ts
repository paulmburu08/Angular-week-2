import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RepoSearch } from '../modules/repo-search';
import { HttpClient } from '@angular/common/http';
import { RepoDescription } from '../modules/repo-description';


@Injectable({
  providedIn: 'root'
})
export class RepoSearchService {

  repoSearchUrl = `${environment.repoUrl}`;
  userSearchUrl = `${environment.userUrl}`;
  API_KEY = `${environment.apiKey}`;
  repoSearch : RepoSearch;
  repo : RepoDescription
  repos : RepoDescription[] = []


  constructor(private http: HttpClient) {
   }
  
   getRepoCount(search){
    let promise = new Promise<RepoSearch>((resolve,reject)=>{
      this.http.get<RepoSearch>(`${this.repoSearchUrl}${search}`).toPromise().then(
        (success) => {
          this.repoSearch = success.total_count;
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

  getRepoDescription(search){
  let repoLength = this.repos.length
  for(let i=0; i< repoLength; i++){
    this.repos.pop()
  }

    interface ApiResponse{
      items: any;
    }

    let promise = new Promise<ApiResponse>((resolve,reject)=>{
      this.http.get<ApiResponse>(`${this.repoSearchUrl}${search}`).toPromise().then(response=>{
        for(let item of response.items){
          this.repo = new RepoDescription("","","","");
          this.repo.name = item.name;
          this.repo.full_name = item.full_name;
          this.repo.description = item.description;
          this.repo.forks = item.forks;

          this.repos.push(this.repo)
        }  
            resolve();
        },

        (error) => {
          console.log(error);
          
          reject();
        }
      )
    })

    return promise

  }




}
