import {Component, OnInit} from '@angular/core';
import {Journal} from '../../../model/journal';
import {JournalService} from '../../../services/journal/journal.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-journals',
  templateUrl: './all-journals.component.html',
  styleUrls: ['./all-journals.component.css']
})
export class AllJournalsComponent implements OnInit {

  private journals: Journal[];

  constructor(private journalService: JournalService, private router: Router) {
  }

  ngOnInit() {
    this.journalService.getAllJournals().subscribe(res => {
      console.log(res);
      this.journals = res['journals'];
    });
  }

  chooseJournal(journal: Journal) {
    const url = localStorage.getItem('user') + '-journal' + '-' + journal.name + '-' + journal.price
    this.journalService.getTokenForName(url).subscribe(token => {
      window.location.replace('https://localhost:4200/payment-methods/'.concat(token));

    });
  }

}