import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class BookService{

books = [

{id:1,title:'Angular Basics',author:'John',available:true},
{id:2,title:'NodeJS Guide',author:'Smith',available:true},
{id:3,title:'Database Systems',author:'David',available:true}

];

getBooks(){
return this.books;
}

getBook(id:number){
return this.books.find(b=>b.id==id);
}

issueBook(id:number){
let book = this.getBook(id);
if(book) book.available=false;
}

returnBook(id:number){
let book = this.getBook(id);
if(book) book.available=true;
}

}