import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
class BookList extends React.Component {

    handleClick(book){
        this.props.selectBook(book);
    }
    renderList() {
        return this.props.books.map((item, i) => {
            return (
                <li key={i} onClick={this.handleClick.bind(this,item)}>
                    {item.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        books : state.books
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook : selectBook} , dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);