import { Component, Input, OnInit } from '@angular/core';
import {JournalEntriesService} from '../../services/journal-entries.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  
  journalentries: Array<any>;

  @Input() journalentry: Object;
  constructor(private journalentriesService: JournalEntriesService) { }

  ngOnInit() {
    this.journalentriesService.getList()
    .then((data) => {
      this.journalentries = data;
    });
  }
}
