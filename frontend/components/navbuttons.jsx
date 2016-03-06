var React = require('react');
var NavConstants = require('../constants/nav_constants');
var Link = require('react-router').Link;
var FilterActions = require('../actions/filter_actions');
var ApiActions = require('../actions/api_create_actions');

var NavButtons = React.createClass({
  searchRefresh: function (navLocation, e) {
    FilterActions.resetFilters();
    ApiActions.fetchSearchSuggestions();
    window.location.hash = navLocation;
  },

  navButtons: function () {
    var that = this
    return Object.keys(NavConstants).map( function(key, idx) {
      return (
        <li className="navbutton" key={idx}>
          <a onClick={this.searchRefresh.bind(that, NavConstants[key][1])}>{NavConstants[key][0]}</a>
        </li>
      );
    }, this);
  },

  render: function() {
    var navbuttons = this.navButtons();

    return (
      <ul className="navbuttons-collection">
        {navbuttons}
      </ul>
    );
  }

});

module.exports = NavButtons;
