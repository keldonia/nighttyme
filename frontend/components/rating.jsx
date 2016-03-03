var React = require('react');
var PropTypes = React.PropTypes;

var Rating = React.createClass({

  render: function() {
    return (
      <div className="rating" data-rating={this.props.stars}>
        <i className="star-1">★</i>
        <i className="star-2">★</i>
        <i className="star-3">★</i>
        <i className="star-4">★</i>
        <i className="star-5">★</i>
      </div>
    );
  }

});

module.exports = Rating;
