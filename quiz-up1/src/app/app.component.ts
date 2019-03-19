import { Component } from '@angular/core';
// import { Dunebook } from './Dunebook';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-up';
  // dunebookList: Dunebook[];
  // constructor(private http: HttpClient) { }
  // ngOnInit(): void {
  //   this.http.get('http://localhost:3004/posts').subscribe(response => this.dunebookList = response.json() as Dunebook[]);
  // }
}
