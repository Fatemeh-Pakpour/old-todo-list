import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title , totalTask}) => {
    return (
      <header>
        <h1>{title}</h1>
        <span className="stats">Total Tasks : {totalTask}</span>
      </header>
    );
  }

  Header.propTypes = {
    title: PropTypes.string,
    totalTask :PropTypes.number
  }
  Header.defaultProps = {
    title: "To do list"
  }
  export default Header;