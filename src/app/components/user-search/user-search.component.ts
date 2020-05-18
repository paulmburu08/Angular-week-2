import { Component, OnInit, Output } from '@angular/core';
import { UserSearchService } from 'src/app/services/user-search.service';
import { UserSearch } from 'src/app/modules/user-search';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  searchInput : string
  searchResult : UserSearch
  
  constructor(private user_service : UserSearchService) { }

 onSubmit(){
  this.user_service.getUser(this.searchInput)
  this.searchResult = this.user_service.userSearch;
}

  ngOnInit(): void {
  
  }


}
