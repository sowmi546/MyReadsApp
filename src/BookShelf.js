import React,{Component} from 'react';
import Book from './Book.js';
import PropTypes from "prop-types";

class BookShelf extends Component{

  render(){
    const {changeShelf,books } = this.props;
    return(<div className="bookshelf">
     <h2 className="bookshelf-title">{this.props.status}</h2>
     <div className="bookshelf-books">
       <ol className="books-grid">
         {this.props.books.map((book) =>(
             <li key={book.id} className="contact-list-item">
                 <Book book={book} changeShelf={changeShelf} books={books}/>
             </li>



         ))}
       </ol>
     </div>
     </div>
);




  }



}
BookShelf.propTypes = {
  changeShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};

export default BookShelf;
