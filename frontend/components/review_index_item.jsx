var React = require('react');
var History = require('react-router').History;

var ReviewIndexItem = React.createClass({
  mixins: [History],

  showDetail: function() {

    if (window.location.hash.includes('business')) {
      if (window.location.hash.includes('reviews')) {
        var pushLocation = /#(\/businesses\/\d*\/reviews\/)*/.exec(window.location.hash)[0].slice(1)
        this.history.push(pushLocation + this.props.review.id);
      } else {
        var pushLocation = /#([^\?])*/.exec(window.location.hash)[0].slice(1) + "/reviews/"
        this.history.push(pushLocation + this.props.review.id);
      }
    } else {
      this.history.push('/reviews/' + this.props.review.id);
    }
  },
  businessFocusId: function () {
    var businessFocusId;
    debugger
    if (window.location.hash.includes('business')) {
      businessFocusId = this.props.businessId;
    } else {
      businessFocusId = 1;
    }
    return businessFocusId;
  },

  render: function() {
    var review = this.props.review;

    return (
      <li onClick={this.showDetail} className="review-index-item">
        <article className="review">
          <h4 className="review-index-title"> {review.title} </h4>
            <div className="rating" data-rating={review.stars}>
              <i className="star-1">★</i>
              <i className="star-2">★</i>
              <i className="star-3">★</i>
              <i className="star-4">★</i>
              <i className="star-5">★</i>
            </div>
          <h5 className="review-index-author"> {review.author} wrote about:</h5>
          <h5 className="review-index-business"> {review.business} </h5>
          <p className="review-index-body"> {review.body.substring(0,140)}</p>
        </article>
      </li>
    );
  }

});

module.exports = ReviewIndexItem;
