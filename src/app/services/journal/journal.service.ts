import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor(private http: HttpClient) {
  }

  getAllJournals() {
    return this.http.get('/api/journals');
  }

  getTokenForName(name: string) {
    return this.http.get('/api/get-token/'.concat(name), {responseType: 'text'});

  }
}
