import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private pcUrl = '/pc';


  constructor(private http: HttpClient) {
  }


  // static getUserToken(): string {
  //   return localStorage.getItem('userToken');
  // }
  //
  // static setUserToken(token: string) {
  //   localStorage.setItem('userToken', token);
  // }
  //
  // static setJournalToken(token: string) {
  //   localStorage.setItem('journalToken', token);
  // }
  //
  // static getJournalToken() {
  //   return localStorage.getItem('journalToken');
  // }
  //
  // getTokenForName(name: string) {
  //   return this.http.get(this.pcUrl.concat('/get-token/').concat(name), {responseType: 'text'});
  // }

  login(username: string, password: string) {
    return this.http.post('/api/login', {'username': username, 'password': password});
  }

}
