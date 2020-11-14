import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBook } from '../actions'
import BookItem from '../widgetsUI/book_item';
class HomeContainer extends Component {


    componentDidMount() {
        this.props.dispatch(getBook(1, 'desc', 0))
    }

    renderItems = (books) => (

     
        books.list ?
            books.list.map(item => (
                <BookItem {...item} key={item._id}/>
            ))
            : null
    )

    loadMore = () =>{
        let broj = this.props.books.list.length;
        this.props.dispatch(getBook(2, 'desc', broj,this.props.books.list))
    }
    render() {
        return (
            <div>
                {this.renderItems(this.props.books)}
                <div className="loadmore" onClick={this.loadMore}>
                    Load more!
                </div>
            </div>
        )
    }
}

export default connect(function mapStateToProps(state, ownProps) {
    return {
        books: state.books
    }
})(HomeContainer)