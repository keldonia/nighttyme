var ApiActions = require('../actions/api_actions');
var SearchBar = require('./search_bar');
var NavButtons = require('./navbuttons');
var UserButtons = require('./user_buttons');
var Link = require('react-router').Link;
var React = require('react');

var App = React.createClass({

  signOut: function () {
    ApiActions.signOut();
  },

  render: function() {

    return (
      <section className="App">
        <navigation className="navbar group">
          <section className="mini-logo">
            <a href="/#"><h1>Nighttyme</h1></a>
          </section>
          <NavButtons />
          <SearchBar />
          <UserButtons />
        </navigation>
        <section className="app-body">
          {this.props.children}
        </section>
      </section>
    );
  }

});

module.exports = App;
