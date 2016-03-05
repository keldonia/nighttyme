var React = require('react');
var History = require('react-router').History;
var Rating = require('./rating');

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
  showBusiness: function(businessIde) {
    this.history.push('/businesses/' + this.props.review.business_id);
    window.scrollTo(0, 0);
  },
  businessFocusId: function () {
    var businessFocusId;
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
          <Rating stars={review.stars} />
          <h5 className="review-index-author"> {review.author} wrote about:</h5>
          <h5 onClick={this.showBusiness.bind(this, this.props.businessId)} className="review-index-business"> {review.business} </h5>
          <p className="review-index-body"> {review.body}</p>
        </article>
      </li>
    );
  }

});

module.exports = ReviewIndexItem;
