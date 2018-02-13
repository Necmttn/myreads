## 1. Project folder structure.

`App.js` is generally keeps all providers. so it's more like main `HOC` component. for convience you would like to keep
that in root of your project `src/` not in `src/components`

## 2.Route structure.
Most of the projects you want to keep views ( UI elements ) and route's seperatly with that. then you can easly debug your code. 

in  `App.js`

```
  <Route exact path="/" render={ ( ) => (
      <ListBooks
          shelfBooks={this.state.shelfBooks}
          updateShelfApp={this.updateShelfApp}
      />
  )}/>

```

 you could do 

```
  <Route path="/" exact component={HomePage} />
```

and declare homepage simply.

```
const HomePage = (props) => {
  return (
    <div> 
      <ListBooks
        shelfBooks={this.state.shelfBooks}
        updateShelfApp={this.updateShelfApp}
      />
    </div>
  )
}
``` 

which is better then what you have there. because it's going to be much more easy to detech where you have bug.

and the errors will become much more informative. for such small project like this. it's okay but once it's start getting bigger it will be handy.

## 3.`BooksGrid` component

one of the common practice for rendering array items. doing it outside of inside of render() fuction. what i mean
by that. 
> i will just go head and refactor your code. 


first step i would seperate UI from logic.
```

class BooksGrid extends Component {

    render() {

        if (this.props.books.length > 0) {
            this.props.books.sort(sortBy('title'));

            return (

                <ol className="books-grid">

                    {this.props.books.map((book) => (
                        <BookItem book={book} />
                    ))}
                </ol>
            )
        } else {
            return null
        }
    }
}


const BookItem = ({book}) => (
  <li key={book.id}>
    <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{
                backgroundImage: `url(${book.imageLinks.thumbnail})`
            }}></div>
            <div className="book-shelf-changer">
                <select defaultValue={book.shelf}
                        onChange={(event) => this.props.onHandleChange(event, book)}>
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

```

i would remove `Javascript logic` from jsx because it's more harder to debug. 

```
class BooksGrid extends Component {
    render() {
      const { books } = this.props
      const Books = () => {
        if (books.length > 0) {
          books.sort(sortBy('title'));
          return books.map((book) => (
            <BookItem book={book} />
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

```
you would notice. instead of returning null. i render UX friendly note. it's good to have habit's like this. 


## 4. `DRY`  => DONT REPEAT YOURSELF
First thing i notice after opening. `ListBooks.js` i notice there. 

you have this element.
```
  <div className="bookshelf">
    <h2 className="bookshelf-title">Read</h2>
    <div className="bookshelf-books">
        <BooksGrid
            books={read}
            onHandleChange={this.props.updateShelfApp}
        />
    </div>
  </div>
```
you have this UI element repating. instead you could do.

```
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

```
i would create small component out of it.

then it would look like;

```
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

```
 why this is good practice because let's say you wanna change styling for bookshelf. with your previous structure. it
 would take some time X3 time compare to this one.


