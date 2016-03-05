var React = require('react');
var NavConstants = require('../constants/nav_constants');
var Link = require('react-router').Link;
var FilterActions = require('../actions/filter_actions');

var NavButtons = React.createClass({
  businesses: function () {
    FilterActions.resetFilters();
    window.location.href = '/businesses';
  },

  navButtons: function () {
    return Object.keys(NavConstants).map( function(key, idx) {
      if (NavConstants == NavConstants.BUSINESSES) {
        <li className="navbutton" key={idx}>
          <a onClick={FilterActions.resetFilters}>{NavConstants[key][0]}</a>
        </li>
      }
      return (
        <li className="navbutton" key={idx}>
          <Link to={NavConstants[key][1]}>{NavConstants[key][0]}</Link>
        </li>
      );
    });
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
