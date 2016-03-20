var React = require('react');
var PropTypes = React.PropTypes;

var ReviewPrompt = React.createClass({
  newUser: function () {
    window.location.href = "/users/new";
  },
  render: function() {
    return (
      <section className="review-prompt">
        <h2 className="review-prompt-header">Review Your Favorite Night Spot</h2>
        <p className="review-prompt-body">People use Nighttyme to help them discover new places every night!  What will you find?</p>
        <button onClick={this.newUser} className="create-account-button">Create Your Free Account</button>
      </section>
    );
  }

});

module.exports = ReviewPrompt;
