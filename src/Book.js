import React from 'react';

const Book = ({ book, onClick }) => {
  const { title, author, image, price } = book;

  return (
    <div className="book" style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
      <img src={image} alt={title} style={{ width: '100px', height: '150px', marginRight: '20px' }} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h3>{title}</h3>
        <p>by {author}</p>
        <p>{price}</p>
        <button onClick={() => onClick(author)}>Get Author</button>
      </div>
    </div>
  );
};

export default Book;
