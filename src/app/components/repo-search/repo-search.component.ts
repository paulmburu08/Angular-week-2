import { Component, OnInit,} from '@angular/core';
import { RepoSearchService } from 'src/app/services/repo-search.service';
import { RepoSearch } from 'src/app/modules/repo-search';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {

  public repoSearchs : RepoSearchService;
  repoSearchInput : string;
  constructor(private repo_Search:RepoSearchService) { 
  }

  ngOnInit(): void {
    this.repo_Search.dataRequest();
    this.repoSearchs = this.repo_Search 
  }

  onSubmit(){
    this.repoSearchInput = this.repo_Search.userInput   
  }

}
