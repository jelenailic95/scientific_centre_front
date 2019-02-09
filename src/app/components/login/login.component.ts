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

  ngOnInit() {
    this.buttonClicked = false;
  }

  login() {
    this.userService.login(this.username, this.password).subscribe(res => {
      localStorage.setItem('user', this.username);
      if ((res['user']['role'] === 'COMPANY') || (res['user']['role'] === 'company')) {
        localStorage.setItem('role', 'company');
        localStorage.setItem('myJournals', JSON.stringify(res['user']['myJournals']));
      } else {
        localStorage.setItem('role', 'user');
      }
      localStorage.setItem('scName', res['scName']);
      this.router.navigate(['/view']);
    }, error1 => {
      alert('Username or password is not correct! Try again.');
    });
  }
}
