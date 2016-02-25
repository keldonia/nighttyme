var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SearchBar = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({ search: '' });
  },

  search: function (e) {
    e.preventDefault();
    console.log(e);
  },

  render: function() {
    return (
      <form className='search-bar' onSubmit={this.search}>
        <label htmlFor='main-search'></label>
        <input
          type="text"
          id='main-search'
          placeholder="What are you looking for?"
          valueLink={this.linkState("search")}
        />
      <button className="group"></button>
      </form>
    );
  }

});

module.exports = SearchBar;
