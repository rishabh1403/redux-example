import React from 'react';
import BookList from '../containers/book_list.js';
export default class App extends React.Component{
    render(){
        return (
            <div>
                <BookList />
            </div>
        )
    }
}