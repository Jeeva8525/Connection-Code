import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BookService } from '../core/services/book.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './book-list.component.html'
})
export class BookListComponent {

  books: any[] = [];
  search = '';

  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }

  filteredBooks() {
    return this.books.filter(book =>
      book.title.toLowerCase().includes(this.search.toLowerCase())
    );
  }

}