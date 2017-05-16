import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { Pagination } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loadElements, changePage } from '../actions/actions';

import ListElements from './ListElements';

class App extends Component {

  componentDidMount() {
    const { loadElements } = this.props;
    const offset = 0;
    const limit = 10;

    loadElements(offset, limit);
  }

  handleSelect = (eventKey) => {
    const { loadElements, changePage } = this.props;
    const offset = eventKey * 10 - 10 ;
    const limit = 10 * eventKey;

    changePage(eventKey);
    loadElements(offset, limit);
  };

  render() {
    const { elements, total, activePage } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        </p>
        <ListElements elements={elements} />
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          items={Math.ceil(total / 10)}
          maxButtons={5}
          activePage={activePage}
          onSelect={this.handleSelect} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
     elements: state.elements,
     total: state.total,
     activePage: state.activePage,
  };
};

export default connect(mapStateToProps, { loadElements, changePage })(App);
