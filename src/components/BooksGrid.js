import React, { Component } from 'react'
import sortBy from 'sort-by'


class BooksGrid extends Component {
    render() {
      const { books } = this.props
      const Books = () => {
        if (books.length > 0) {
          books.sort(sortBy('title'));
          return books.map((book) => (
            <BookItem book={book} onHandleChange={(event) => this.props.onHandleChange(event, book)}/>
          ))
        } else {
          return (
            <div> You'have no book on your list </div>
          )
        }
      }
      return (
          <ol className="books-grid">
            <Books />
          </ol>
      )
    }
}


const BookItem = ({book, onHandleChange}) => (
  <li key={book.id}>
    <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{
                backgroundImage: `url(${book.imageLinks.thumbnail})`
            }}></div>
            <div className="book-shelf-changer">
                <select defaultValue={book.shelf}
                        onChange={(event) => onHandleChange(event)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
    </div>
  </li>
)


export default BooksGrid
