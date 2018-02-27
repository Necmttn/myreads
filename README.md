## My Reads - React Project

React Bookshelf application - this is the final assessment project for Udacity's React Fundamentals course, which is part of the React Nanodegree.

### Project Description

#### Home Page
 
 This page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

    * Currently Reading
    * Want to Read
    * Read
    
Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Default value for the control is the current shelf the book is in.

This page also has a link to /search, a search page that allows you to find books to add to your library.

#### Search Page

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page.
 
 Each book has a control that lets you add the book to each shelf in your library.
 
 The search page has a link to / (the root URL), which leads back to the main page where changes are reflected instantly.
 
 #### React Features
 
When a book is on a bookshelf, it has the same state on both the home page and the search page.

Component state is passed down from parent components to child components. 

When the browser is refreshed, the same information is displayed on the page.

#### Provided APIs


##### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

##### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

##### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. 
* The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 


## Installing and Launching the Project 

The application was created with create-react-app and requires the following steps to get it installed and launched:

* npm install 
* npm start 




https://github.com/becomeLegend/myreads/blob/09e49d8f25432d3cada1c5bf6f5c5864f9ceacd3/src/index.js#L2-L6
