import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Paper} from '../../model/paper';

@Injectable({
  providedIn: 'root'
})
export class PaperService {

  constructor(private http: HttpClient) {
  }

  getAllPapers() {
    return this.http.get('/api/papers/'.concat(localStorage.getItem('user')));
  }

  addPaper(paper: Paper, username: string) {
    return this.http.post('/api/papers/add', {'paperId': paper.id, 'username': username});
  }

  getMyPapers(name: string) {
    return this.http.get('/api/papers/my-papers/'.concat(name));

  }
}
