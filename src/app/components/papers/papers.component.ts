import {Component, OnInit} from '@angular/core';
import {Paper} from '../../model/paper';
import {PaperService} from '../../services/paper/paper.service';
import {Router} from '@angular/router';
import {JournalService} from '../../services/journal/journal.service';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.css']
})
export class PapersComponent implements OnInit {

  constructor(private paperService: PaperService, private router: Router, private journalService: JournalService) {
  }

  papers: Paper[];

  ngOnInit() {
    this.paperService.getAllPapers().subscribe(res => {
      console.log(res);
      this.papers = res as Paper[];
    });
  }

  getPaper(paper: Paper, index: number) {
    this.paperService.addPaper(paper, localStorage.getItem('user')).subscribe(res => {
      console.log(res);
      this.papers.splice(index, 1);
    });
  }

  payPaper(paper: Paper) {
    const url = localStorage.getItem('user') + '-paper' + '-' + paper.journal.name + '-' +
      paper.price + '-' + localStorage.getItem('scName') + '-' + paper.id;

    this.journalService.getTokenForName(url).subscribe(token => {
      window.location.replace('https://localhost:4200/payment-methods/'.concat(token));

    });
  }

}
