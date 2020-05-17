import { Component, OnInit,} from '@angular/core';
import { RepoSearchService } from 'src/app/services/repo-search.service';
import { RepoSearch } from 'src/app/modules/repo-search';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {

  public repoSearch : RepoSearch;
  repoSearchInput : string;
  constructor(private repo_Search:RepoSearchService) { 
  }

  onSubmit(){
    this.repoSearchInput = this.repo_Search.userInput
    this.repoSearch = this.repo_Search
  }

  ngOnInit(): void {
  }

}
