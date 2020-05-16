import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  repoSearchUrl = `${environment.repoUrl}`
  userSearchUrl = `${environment.userUrl}` 
  API_KEY = `${environment.apiKey}`

  constructor() { }
}
