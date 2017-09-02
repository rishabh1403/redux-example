import React from 'react';
import { connect } from 'react-redux';
class BookList extends React.Component {

    renderList() {
        return this.props.books.map((item, i) => {
            return (
                <li key={i}>
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

export default connect(mapStateToProps)(BookList);