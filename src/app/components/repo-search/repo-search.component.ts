import { Component, OnInit,} from '@angular/core';
import { RepoSearchService } from 'src/app/services/repo-search.service';
import { RepoSearch } from 'src/app/modules/repo-search';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {
  
  users : RepoSearch;
  inputRepo : string;

  constructor(private repo_service : RepoSearchService) { }

  onSubmit(search){
    this.repo_service.getUser(search).then(
      (success)=>{
        this.users = this.repo_service.repoSearch
      },
      (error)=>{
        console.log(error)
      }
      )
  }

  repoName : string;
  ngOnInit(): void {

  for (let i = 0; i < this.users?.items.length ; i++) {
    this.repoName = this.users?.items[i].full_name;
  
  }
  }

}
