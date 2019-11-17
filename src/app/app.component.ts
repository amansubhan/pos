import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  books: Book[] = []

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Book[]>('https://angpos-api.herokuapp.com/books')
      .subscribe(fetchedBooks => (this.books = fetchedBooks));
  }

  title = 'AngPOS ';
}
