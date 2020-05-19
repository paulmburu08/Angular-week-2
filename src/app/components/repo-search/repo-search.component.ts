import { Component, OnInit,} from '@angular/core';
import { RepoSearchService } from 'src/app/services/repo-search.service';
import { RepoSearch } from 'src/app/modules/repo-search';
import { RepoDescription } from 'src/app/modules/repo-description';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {
  
  users : RepoSearch;
  inputRepo : string;
  repos : RepoDescription[]=[]

  constructor(private repo_service : RepoSearchService) { }

  onSubmit(search){
    this.repo_service.getRepoCount(search).then(
      (success)=>{
        this.users = this.repo_service.repoSearch
        console.log(this.users)
      },
      (error)=>{
        console.log(error)
      }
      )

    this.repo_service.getRepoDescription(search).then(response =>{
        this.repos = this.repo_service.repos
        console.log(this.repos)
      },
      (error)=>{
        console.log(error)
      }
      )
  }

  ngOnInit(): void {
  }

}
