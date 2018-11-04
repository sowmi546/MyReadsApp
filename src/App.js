import React from 'react'
import './App.css';
import {Route} from 'react-router-dom';
import MainPage from './MainPage.js';
import SearchPage from './SearchPage.js';
import * as BooksAPI from './BooksAPI'
class BooksApp extends React.Component{
  state ={
    books:[],
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
             this.setState({books});
         });
  }
  render(){
    const {books} = this.state;
    return (
      <div>
        <Route exact path='/' render ={() =>(
          <MainPage books={books}/>
        )}
        />
        <Route exact path ='/search' render ={({history}) =>(
          <SearchPage books={books} />

        )}
        />
      </div>

    )
  }


}

export default BooksApp;
