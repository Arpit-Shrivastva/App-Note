import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  textVal:string = "";

  @Output()
  searchText: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
      
  }
  searchNote() {
    this.searchText.emit(this.textVal);
  }
}