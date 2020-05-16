import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoSearchService {

  repoSearchUrl = `${environment.repoUrl}`
  userSearchUrl = `${environment.userUrl}` 
  API_KEY = `${environment.apiKey}`
  
  constructor() { }
}
