var ApiActions = require('../actions/api_actions');
var NavConstants = require('../constants/nav_constants');
var ApiUtil = require('../util/api_util');
var Link = require('react-router').Link;
var React = require('react');

var App = React.createClass({

  render: function() {
    var navbuttons = Object.keys(NavConstants).map( function(key, idx) {
      return (
        <li className="navbutton" key={idx}>
          <Link to={NavConstants[key][1]}>{NavConstants[key][0]}</Link>
        </li>
      );
    });

    if (window.user) {
      var userStuff = (
        <ul className="userbuttons-collection">
          <a className="userbutton" href="/session/new">Sign In</a>
        </ul>
      )
    } else {
      var userStuff = (
        <ul className="userbuttons-collection">
          <a className="userbutton" href="/session/new">Sign In</a>
          <a className="userbutton" href="/users/new">Sign Up</a>
        </ul>
      )
    };

    return (
      <section className="App">
        <navigation className="navbar group">
          <section className="mini-logo">
            <a href="/#"><h1>Nighttyme</h1></a>
          </section>
          <ul className="navbuttons-collection">
            {navbuttons}
          </ul>
          <input  type="text"
                  className="nav-search"
                  placeholder="What will it be?"
                  title="Search Nighttyme"
                  >

          </input>
          {userStuff}
        </navigation>
        <section className="app-body">
          {this.props.children}
        </section>
      </section>
    );
  }

});

module.exports = App;
