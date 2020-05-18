import { Component, OnInit, Output } from '@angular/core';
import { UserSearchService } from 'src/app/services/user-search.service';
import { UserSearch } from 'src/app/modules/user-search';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  user : UserSearch
  inputUser : string
  
  constructor(private user_service : UserSearchService) { }

 onSubmit(search){
  this.user_service.getUser(search).then(
    (success)=>{
      this.user = this.user_service.userSearch
    },
    (error)=>{
      console.log(error)
    }
    )
     
}

  ngOnInit(): void{
    
  }


}
