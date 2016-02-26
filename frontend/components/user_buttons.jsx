var React = require('react');
var Link = require('react-router').Link;

var UserButtons = React.createClass({

  userButtons: function () {
    if (window.user) {
      var userStuff = (
        <ul className="userbuttons-collection">
          <a className="userbutton" href="#" onClick={this.signOut}>Sign Out</a>
        </ul>
      )
    } else {
      var userStuff = (
        <ul className="userbuttons-collection">
          <a className="userbutton" href="/session/new">Sign In</a>
          <a className="userbutton" href="/users/new">Sign Up</a>
        </ul>
      )
    }

    return userStuff;
  },


  render: function() {
    var userButtons = this.userButtons();

    return (
      <ul className="userbuttons-collection">
        {userButtons}
      </ul>
    );
  }

});

module.exports = UserButtons;
