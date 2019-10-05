class Book {
  constructor(name, bprix,fnum,fcost,time){
    this.name = name;
    this.bprix = bprix;
    this.fnum = fnum;//fardo number
    this.time = time;
    this.fcost = fcost;//fardo cost
  }
}

class UI {
  addBookToList(book) {
     const list = document.getElementById('book-list');

     // Create tr element
     const row = document.createElement('tr');

     // Insert cols
     row.innerHTML = `
       <td>${book.name}</td>
       <td>${book.bprix}</td>
       <td>${book.fnum}</td>
       <td>${book.fcost}</td>
       <td>${book.time}</td>
       <td><a href="#" class="delete">X</a></td>
     `;

     list.appendChild(row);
  }

  showAlert(message, className) {
     // Create a div
     const div = document.createElement('div');
     // Add classes
     div.className = `alert ${className}`;
     // Add Text
     div.appendChild(document.createTextNode(message));
     // Get Parent
     const container = document.querySelector('.container');

     // Put it before form

     // Get Form
     const form = document.querySelector('#book-form');
     // Insert Alert
     container.insertBefore(div, form);

     // Timeout after 3 sec
     setTimeout(function(){
       document.querySelector('.alert').remove();
     }, 3000);
  }

  deleteBook(target) {
   if(target.className === 'delete'){
     target.parentElement.parentElement.remove();
   }
  }

  clearFields() {
   document.getElementById('name').value = "";
   document.getElementById('bprix').value = "";
   document.getElementById('fnum').value = "";
  }
}

// Local Storage Class
class Store {

 // It'll take care of fetching them from LocalStorage
 static getBooks() {
   let books;
   if(localStorage.getItem('books') === null) {
     books = [];
   } else {
     books = JSON.parse(localStorage.getItem('books'));
   }

   return books;
 }

 // It'll take care of the book in the UI
 static displayBooks() {
   const books = Store.getBooks();

   books.forEach(function(book){
     const ui = new UI;
     // Add Book to UI
     ui.addBookToList(book);
   });
 }

 // Add books to Local Storage
 static addBook(book) {
   // First we get how many books we already have a fixed unchanged value
   const books = Store.getBooks();

   // Added new book to our array using .push method
   books.push(book);
   // Added a key-value pair to our LocalStorage in object syntax, where 'books' is the key and JSON.stringify(books) is the value
   localStorage.setItem('books', JSON.stringify(books));
 }

 static removeBook(time) {
   const books = Store.getBooks();

   books.forEach(function(book, index){
     if(book.time === time){
       books.splice(index, 1);
     }
   });

   localStorage.setItem('books', JSON.stringify(books));
 }
}

// DOM Load Event
// We don't need parenthesis here
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e) {

 // Get form values
 const name = document.getElementById('name').value,
       bprix = document.getElementById('bprix').value,
       fnum = document.getElementById('fnum').value,
       da  = new Date(),
       year = da.getFullYear(),
       month = (da.getMonth())+1,
       day = da.getDate(),
       hour = da.getHours(),
       minute = da.getMinutes(),
       time = hour + ':' + minute + ' | ' + day + '-'+month+'-'+year,
       b_p = Number(document.getElementById('bprix').value),
       f_n = Number(document.getElementById('fnum').value),
       fardo_pri = b_p * 6 ,
       fcost = fardo_pri * f_n
 // Instantiate book

 const book = new Book(name, bprix, fnum, fcost, time);

 // Instantiate UI
 const ui = new UI();

 // Validation
 if(name === "" || bprix === "" || fnum === ""){
   // Error alert
   ui.showAlert('Please fill in all fields', 'error');
 } else {
   // Add Book to List
   ui.addBookToList(book);

   // Add to LocalStorage
   // As it's a static method we don't need to use any object instance here
   Store.addBook(book);

   // Show success
   ui.showAlert('Client Added', 'success');

   // Clear Fields
   ui.clearFields();
 }

 e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

 // Instanitate UI
 const ui = new UI();

 // Delete Book
 ui.deleteBook(e.target);

 // Remove from LocalStorage
 Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

 // Show Alert
 ui.showAlert('Client Removed!', 'success');

 e.preventDefault();
});

function sum(){
   var name = document.getElementById('name').value;
   var b_p = Number(document.getElementById('bprix').value);
   var f_n = Number(document.getElementById('fnum').value);
   var put = document.getElementById('put');

   var fardo_pri = b_p * 6 ;
   var fdo_tot = fardo_pri * f_n;

   put.innerHTML = 'total fardo price ' + fdo_tot + ' DA';
 }
