var ApiActions = require('../actions/api_actions');
var ApiUtil = require('../util/api_util');
var React = require('react');

var App = React.createClass({

  render: function() {
    return (
      <section className="App">

        <section className="mini-logo group">
          <a href="/#"><h1> Welcome to Nighttyme </h1>
          <p>
            Are you ready for the night?
          </p></a>
        </section>
        {this.props.children}
      </section>
    );
  }

});

module.exports = App;
