import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book.js';
class SearchPage extends Component{
state={
  query:'',
  resultBooks:[],
  emptySearch:false
}

updateQuery =(query) =>{
  this.setState (() =>({
    query: query,
  }))
  if(query){
    BooksAPI.search(query.trim())
    .then(books =>{
    	books.length>0 ? this.setState({resultBooks:books, emptySearch:false}) : this.setState({resultBooks:[], emptySearch:true})

    });
  }
  else {
    this.setState({resultBooks:[]});
  }

};
componentDidMount(){
      BooksAPI.getAll()
      .then((books) =>{
          this.setState(() =>({
            books
          }));

      })

  }

  searchChangeShelf = (updatedBook, newShelf) =>{

    BooksAPI.update(updatedBook,newShelf)
    .then(response =>{
      updatedBook.shelf = newShelf;
      this.setState((prevState) =>({
          books : prevState.books.filter((b) => b.id !== updatedBook.id).concat([updatedBook]),
      }))
    });
  }

render(){
  const {resultBooks,emptySearch} = this.state;
  return(

    <div>
    <div className="search-books">
      <div className="search-books-bar">

        <Link to='/' className="close-search">Close Search </Link>
        <div className="search-books-input-wrapper">

          <input type="text" placeholder="Search by title or author" value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)} />

        </div>
      </div>
      <div className="search-books-results">

        <div>

          <ol className="books-grid">
            {resultBooks.map(book =>(
                <Book book={book} key ={book.id} changeShelf={this.searchChangeShelf} />


            ))}

          </ol>
        </div>
        {emptySearch && ( <h4>You do not have any search results. Please try again</h4>)}

      </div>
    </div>
    </div>
  );
}


}
export default SearchPage;
