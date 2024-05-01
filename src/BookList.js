import React from 'react';
import Book from './Book';
import bookdata from './bookdata';

const BookList = () => {
  const handleClick = (author) => {
    console.log(`Clicked on book by ${author}`);
  };

  return (
    <div className="book-list">
      {bookdata.map((book, index) => (
        <Book key={index} book={book} onClick={handleClick} />
      ))}
    </div>
  );
};

export default BookList;
