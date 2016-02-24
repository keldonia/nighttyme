var ApiActions = require('../actions/api_actions');
var ApiUtil = require('../util/api_util');
var React = require('react');

var App = React.createClass({

  render: function() {
    return (
      <section className="App">
        App
        {this.props.children}
      </section>
    );
  }

});

module.exports = App;
