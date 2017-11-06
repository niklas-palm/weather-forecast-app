import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
          >
            {book.title}
          </li>
      );
    })
  }

  render() {
    return(
      <ul classNamte="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

//Anything returned from this functrion will end up as props on the BookList Container.
function mapDispatchToProps(dispatch) {
  // Whenever selecBook is called, the result should be passed to all of our reducers
  return (
    bindActionCreators({
      selectBook: selectBook
      }, dispatch)
  );
}

// Connects BookList to Redux. Specifially the state in the reducers specified in
// mapStateToProps are injected into BookList's props.
// mapDispatchToProps connects BookList to the redux-action specified in the function.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
