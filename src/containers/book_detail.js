import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
class BookDetail extends React.Component {

    

    render() {
        return (
            <div>
                {this.props.activeBook &&  this.props.activeBook.title}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        activeBook : state.activeBook
    }
}


export default connect(mapStateToProps)(BookDetail);