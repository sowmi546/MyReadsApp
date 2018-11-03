import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import BookShelf from './BookShelf.js';
import * as BooksAPI from './BooksAPI'

class MainPage extends Component{
state ={
  books:[],
}
componentDidMount(){
  BooksAPI.getAll().then((books) => {
           this.setState({books});
       });
}
getMyBooks = (shelfName) =>{
  return this.state.books.filter((b) => b.shelf===shelfName)
}

changeShelf = (updatedBook, newShelf) =>{

  BooksAPI.update(updatedBook,newShelf)
  .then(response =>{
    updatedBook.shelf = newShelf;
    this.setState((prevState) =>({
        books : prevState.books.filter((b) => b.id !== updatedBook.id).concat([updatedBook]),
    }))
  });
}


render(){
   return(
      <div>

        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf status="Currently Reading" books ={this.getMyBooks("currentlyReading")} changeShelf ={this.changeShelf}/>
              <BookShelf status="Want To Read" books={this.getMyBooks("wantToRead")} changeShelf ={this.changeShelf}/>
              <BookShelf status="Read" books={this.getMyBooks("read")} changeShelf ={this.changeShelf}/>
            </div>
          </div>
          <div className="open-search">
            <Link to ='/search'  className="open-search">Add a book </Link>
          </div>
        </div>
      </div>



  );
}
}
// MainPage.propTypes = {
//   users: PropTypes.array.isRequired,
// };

export default MainPage;
