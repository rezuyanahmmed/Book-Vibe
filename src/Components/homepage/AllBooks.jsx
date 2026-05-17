import React, { use } from 'react';

const booksPromise = fetch('/booksData.json').then(res => res.json())

const AllBooks = () => {

  const books = use(booksPromise)
  console.log(books);

  return (
    <div>
      <h2>Books</h2>
    </div>
  );
};

export default AllBooks;