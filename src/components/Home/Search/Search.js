import React from "react";
import "./Search.scss";
import PropTypes from "prop-types";

export class Search extends React.Component {
  handler = (e) => {
    const value = e.target.value;
    console.log(value);

    this.props.search(value);
  };

  render() {
    return (
      <div className="Search__input container">
        <input
          type="search"
          placeholder="search"
          onChange={this.handler}
        ></input>
        <button>Go</button>
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
};
