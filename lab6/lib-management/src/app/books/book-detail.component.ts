import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { BookService } from '../core/services/book.service';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent {

  book: any;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.book = this.bookService.getBook(id);

  }

}