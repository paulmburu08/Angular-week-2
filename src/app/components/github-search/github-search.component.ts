import { Component, OnInit } from '@angular/core';
import { UserSearchService } from 'src/app/services/user-search.service';
import { UserSearch } from 'src/app/modules/user-search';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  constructor(private user_service : UserSearchService) { }

  user : UserSearch
  ngOnInit(): void {
    this.user_service.getUser("paulmburu08").then(
      (success)=>{
        this.user = this.user_service.userSearch
      },
      (error)=>{
        console.log(error)
      }
      )
  }

}
