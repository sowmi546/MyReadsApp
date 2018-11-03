import React from 'react'
import './App.css';
import {Route} from 'react-router-dom';
import MainPage from './MainPage.js';
import SearchPage from './SearchPage.js';

const BooksApp = props =>  {
    return (
      <div>
        <Route exact path='/' render ={() =>(
          <MainPage/>
        )}
        />
        <Route exact path ='/search' render ={({history}) =>(
          <SearchPage />

        )}
        />
      </div>

    )

}

export default BooksApp;
