import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger.js';
class Book extends Component{

  render(){
      const {book,changeShelf,shelf,books}= this.props;
      const noImage = book.imageLinks && book.imageLinks.thumbnail? book.imageLinks.thumbnail : "https://islandpress.org/sites/default/files/400px%20x%20600px-r01BookNotPictured.jpg";

      return(
        <div>

        <div className="book" id={book.id}>

          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${noImage})` }}></div>
            <ShelfChanger book={book} changeShelf ={changeShelf} shelf={shelf} books={books}/>
          </div>
          <div className="book-title">{book.title}</div>
          
          <div className="book-authors">{book.authors}</div>

      </div>
      </div>
      );

  }

};

  Book.propTypes = {
    changeShelf: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
  };

export default Book;
