var React = require('react');
var NavConstants = require('../constants/nav_constants');
var Link = require('react-router').Link;

var NavButtons = React.createClass({

  navButtons: function () {
    return Object.keys(NavConstants).map( function(key, idx) {
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
