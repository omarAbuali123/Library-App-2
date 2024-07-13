import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { database } from './Firebase';
import { ref, set, get, child, update } from 'firebase/database';

function BookCatalog() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    isbn: ''
  });

  const getdata = () => {
    axios.get('https://book-catalog-6edc2-default-rtdb.firebaseio.com/books.json')
      .then(res => {
        const data = res.data;
        const bookArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]/* لبيانات لمستلمه احولها الى مصفوفه */
        })).filter(book => !book.deleted);
        setBooks(bookArray);
      }).catch(err => {
        console.log(err);
      });
  }

  const addBook = () => {
    const newBookRef = ref(database, 'books/' + new Date().getTime());
    set(newBookRef, newBook).then(() => {
      getdata();
      setNewBook({ title: '', author: '', isbn: '' });
    }).catch(err => {
      console.log(err);
    });
  }

  const updateBook = (id, updatedBook) => {
    const bookRef = ref(database, 'books/' + id);
    update(bookRef, updatedBook).then(() => {
      getdata();
    }).catch(err => {
      console.log(err);
    });
  }

  const deleteBook = (id) => {
    const bookRef = ref(database, 'books/' + id);
    update(bookRef, { deleted: true }).then(() => {
      getdata();
    }).catch(err => {
      console.log(err);
    });
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="container">
      <div className="add-book-form">
        <h2>Add New Book</h2>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="ISBN"
          value={newBook.isbn}
          onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
        />
        <button onClick={addBook}>Add Book</button>
      </div>
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <h2>{book.title}</h2>
          <h4>{book.author}</h4>
          <p>{book.isbn}</p>
          <button onClick={() => updateBook(book.id, { ...book, title: prompt('Enter new title', book.title) })}>Update</button>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BookCatalog;


