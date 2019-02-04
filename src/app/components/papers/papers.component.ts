import {Component, OnInit} from '@angular/core';
import {Paper} from '../../model/paper';
import {PaperService} from '../../services/paper/paper.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.css']
})
export class PapersComponent implements OnInit {

  constructor(private paperService: PaperService, private router: Router) {
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
    localStorage.setItem('typeOfPayment', 'paper');
    localStorage.setItem('paper', JSON.stringify(paper));
    window.location.replace('https://localhost:4200');
  }

}
