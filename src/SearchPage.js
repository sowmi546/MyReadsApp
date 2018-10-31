import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
class SearchPage extends React.Component{
state={
  query:'',
  books :[],
}
updateQuery =(query) =>{
  this.setState (() =>({
    query: query.trim(),
  }))
}
componentDidMount(){
      BooksAPI.getAll()
      .then((books) =>{
          this.setState(() =>({
            books
          }));

      })

  }
render(){
  const {query,books} = this.state;
  //const
  console.log(JSON.stringify(books[0]));
  const showFilteredResults = query ===''
        ? books
        : books.filter((c) =>(
          c.description.toLowerCase().includes(query.toLowerCase())
        ))
  return(

    <div>
    <div className="search-books">
      <div className="search-books-bar">

        <Link to='/' className="close-search">Close Search </Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input type="text" placeholder="Search by title or author" value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)} />


        </div>
      </div>
      <div className="search-books-results">

          {query ===''?
              (<div></div>) :
              (
            <div>
              <ol className="books-grid">
              {showFilteredResults.map((book) =>(
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">AlreadyRead</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.author}</div>
                  </div>
                </li>
              ))}

                </ol>

                </div>)}

      </div>
    </div>
    </div>
  )
}


}
export default SearchPage;
