import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router
  ) {
  }
  private buttonClicked: boolean;
  private username: string;
  private password: string;

  ngOnInit() {
    this.buttonClicked = false;
  }

  login() {
    this.userService.login(this.username, this.password).subscribe(res => {
      localStorage.setItem('user', this.username);
      this.buttonClicked = true;
    });
  }
}
