import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'
import '../App.css'


class ListBooks extends React.Component {

    state = {
        oneBook: {}
    }

    static propTypes = {
        shelfBooks: PropTypes.array.isRequired
    }


    render() {

        let currentlyReading = this.props.shelfBooks.filter((book) => book.shelf === 'currentlyReading')
        let wantToRead = this.props.shelfBooks.filter((book) => book.shelf === 'wantToRead')
        let read = this.props.shelfBooks.filter((book) => book.shelf === 'read')


        const BookShelf = ({title, books}) => (
          <div className="bookshelf">
              <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                  <BooksGrid
                      books={books}
                      onHandleChange={this.props.updateShelfApp}
                  />
              </div>
          </div>
        )

        return (

            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    <BookShelf
                      title="Currently Reading"
                      books={currentlyReading}
                    />
                    <BookShelf
                      title="Want to Read"
                      books={wantToRead}
                    />
                    <BookShelf
                      title="Read"
                      books={read}
                    />
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to={`/search`}
                        onClick={ () => this.props.refresh(this.props.shelfBooks)}>
                        Add a Book
                    </Link>
                </div>
            </div>
        )
    }
}


export default ListBooks
