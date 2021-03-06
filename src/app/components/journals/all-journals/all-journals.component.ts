import {Component, OnInit} from '@angular/core';
import {Journal} from '../../../model/journal';
import {JournalService} from '../../../services/journal/journal.service';
import {Router} from '@angular/router';
import {Globals} from '../../../globals';

@Component({
  selector: 'app-all-journals',
  templateUrl: './all-journals.component.html',
  styleUrls: ['./all-journals.component.css']
})
export class AllJournalsComponent implements OnInit {

  public journals: Journal[];

  constructor(private journalService: JournalService, private router: Router, private globals: Globals) {
  }

  ngOnInit() {
    if (localStorage.getItem('role') === 'company') {
      this.journals = JSON.parse(localStorage.getItem('myJournals'));
    } else {
      this.journalService.getAllJournals().subscribe(res => {
        console.log(res);
        this.journals = res['journals'];
      });
    }
  }

  chooseJournal(journal: Journal) {
    if (localStorage.getItem('role') === 'company') {
      const url = localStorage.getItem('user') + '-company' + '-' + journal.name + '-' + 0;

      this.journalService.getTokenForName(url).subscribe(token => {
        window.location.replace('https://192.168.1.5:4200/payment-methods-list/'.concat(token));
      });
    } else {

      const url = localStorage.getItem('user') + '-journal' + '-' + journal.name + '-' +
        journal.price + '-' + localStorage.getItem('scName');

      this.journalService.getTokenForName(url).subscribe(token => {
        window.location.replace(this.globals.address + '/payment-methods/'.concat(token));
      });
    }
  }
}


