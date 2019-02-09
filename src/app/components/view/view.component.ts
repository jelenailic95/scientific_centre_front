import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  clientLogged = false;
  journalLogged = false;

  constructor(public router: Router) {
    const role = localStorage.getItem('role');
    if ((role === 'company') || (role === 'COMPANY')) {
      this.clientLogged = false;
      this.journalLogged = true;
    } else {
      this.journalLogged = false;
      this.clientLogged = true;
    }
  }

  ngOnInit() {
  }
}
