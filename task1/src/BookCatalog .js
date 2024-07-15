import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { database } from './Firebase';
import { ref, set, update } from 'firebase/database';

function BookCatalog() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    isbn: ''
  });
  const [editBook, setEditBook] = useState(null);/*لتحديد الكتاب الذي يتم تحريره  */

  useEffect(() => {/*لجلب البيانات عند تحميل المكون لأول مرة. */
    getdata();
  }, []);

  const getdata = async () => {
    try {
      const response = await axios.get('https://book-catalog-6edc2-default-rtdb.firebaseio.com/books.json');
      if (response.data) {
        const formattedData = Object.keys(response.data)
          .filter((key) => !response.data[key].deleted) // Filter out deleted books
          .map((key) => ({
            id: key,
            ...response.data[key],
          }));
        setBooks(formattedData);
      }
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
    }
  };

  const addBook = () => {
    const newBookRef = ref(database, 'books/' + new Date().getTime());
    set(newBookRef, newBook).then(() => {/*تُستخدم دالة set لإضافة الكتاب الجديد إلى الموقع المحدد في قاعدة البيانات.  */
      getdata();/*  تقوم بجلب البيانات المحدثة من قاعدة البيانات.*/
      setNewBook({ title: '', author: '', isbn: '' });
    }).catch(err => {
      console.log(err);
    });
  }

  const updateBook = (id, updatedBook) => {
    const bookRef = ref(database, 'books/' + id);
    update(bookRef, updatedBook).then(() => {
      getdata();
      setEditBook(null); 
    }).catch(err => {
      console.log(err);
    });
  }

  const deleteBook = (id) => {
    const bookRef = ref(database, 'books/' + id);
    update(bookRef, { deleted: true }).then(() => {/*تحديث حالة الكتاب ليكون محذوفًا. */
      getdata();
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <div className="container mx-auto p-4">
      <div className="add-book-form mb-6">
        <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          className="block w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          className="block w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="ISBN"
          value={newBook.isbn}
          onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
          className="block w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={addBook}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Book
        </button>
      </div>
      <div className="flex flex-wrap">
        {books.map((book) => (
          <div key={book.id} className="book-card border border-gray-300 p-4 m-2 w-52">
            {editBook === book.id ? (
              <div>
                <input
                  type="text"
                  placeholder="Title"
                  value={book.title}
                  onChange={(e) => setBooks(books.map(b => b.id === book.id ? { ...b, title: e.target.value } : b))}
                  className="block w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Author"
                  value={book.author}
                  onChange={(e) => setBooks(books.map(b => b.id === book.id ? { ...b, author: e.target.value } : b))}
                  className="block w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="ISBN"
                  value={book.isbn}
                  onChange={(e) => setBooks(books.map(b => b.id === book.id ? { ...b, isbn: e.target.value } : b))}
                  className="block w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <button
                  onClick={() => updateBook(book.id, { title: book.title, author: book.author, isbn: book.isbn })}
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditBook(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-bold">{book.title}</h2>
                <h4 className="text-md">{book.author}</h4>
                <p>{book.isbn}</p>
                <button
                  onClick={() => setEditBook(book.id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteBook(book.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookCatalog;
