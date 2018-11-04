import React, { Component } from "react";
import PropTypes from "prop-types";


class ShelfChanger extends Component{

    state = {
        currentShelf: this.props.shelf,

    };

    changeShelf = (event) => {
        this.props.changeShelf(this.props.book, event.target.value);
        this.setState({
            currentShelf: event.target.value,
        });
    };


    render(){
       const {book,books } = this.props;
       //setting default value for shelf
       let currentShelf ='none';
       //getting the shelf to which the book belongs to from the homepage and marking the shelf for it
       for (let result of books) {
      if (book.id === result.id) {
        currentShelf = result.shelf;
        break;
      }
       }
        return(
            <div className="book-shelf-changer">
                <select
                    value={currentShelf}
                    onChange={this.changeShelf}
                >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>

            </div>
        )
    }
}
ShelfChanger.propTypes = {
  changeShelf: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
};
export default ShelfChanger;
