import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {JournalService} from '../../services/journal/journal.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private journalService: JournalService, public router: Router) {
  }

  public buttonClicked: boolean;
  public username: string;
  public password: string;
  public journalLogged: boolean;

  ngOnInit() {
    this.buttonClicked = false;
    this.journalLogged = false;
  }

  login() {
    this.userService.login(this.username, this.password).subscribe(res => {
      localStorage.setItem('user', this.username);
      if (res['role'] === 'COMPANY') {
        this.journalLogged = true;
        localStorage.setItem('role', 'company');
        localStorage.setItem('myJournals', JSON.stringify(res['myJournals']));
      } else {
        this.buttonClicked = true;
        localStorage.setItem('role', 'user');
      }
    });
  }
}
