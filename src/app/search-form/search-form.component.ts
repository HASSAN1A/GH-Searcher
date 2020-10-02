import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Output() emitSearch = new EventEmitter<any>()

  searchTerm: string;

  

  constructor() { }

  search(){
    this.emitSearch.emit(this.searchTerm);
  }

  ngOnInit() {
  }

}
