var BusinessStore = require('../stores/business');
var ReviewsStore = require('../stores/reviews');
var ErrorStore = require('../stores/errors');
var ReviewActions = require('../actions/reviews_api_action_creators');
var React = require('react');

var ReviewIndexItem = require('./review_index_item');
var ReviewDetail = require('./review_detail');
var ReviewForm = require('./review_form');
var ReviewPrompt = require('./review_prompt');

var Reviews = React.createClass({
  reviews: function () {
    if (this.props.reviews === undefined) {
      return <li></li>
    } else {
      return this.orderReviews(this.props.reviews);
    }
  },
  reviewForm: function () {
    var reviewForm;
    var businessId = this.businessId();
    if (window.user) {
      reviewForm = <ReviewForm businessId={businessId}/>;
    } else {
      if (!window.location.hash.includes('business')) {
        reviewForm = <ReviewPrompt />
      } else {
        <div></div>
      }
    }
    return reviewForm;
  },
  reviewCleanUp: function () {
    var reviewsClean = this.props.reviews;

    if (Array.isArray(reviewsClean) === false) {
      reviewsClean = Object.keys(reviewsClean).map( function (id) {
        return reviewsClean[id];
      });
    }
    return reviewsClean;
  },
  orderReviews: function() {
    var reviews = this.reviewCleanUp();
    var that = this;

    return reviews.map( function(currentReview) {
      if (currentReview.id !== parseInt(this.props.reviewId)) {
        return <ReviewIndexItem key={currentReview.id} review={currentReview} />;
      } else {
        return <ReviewDetail key={currentReview.id} review={currentReview} />;
      }
    }, this);
  },
  businessId: function () {
    var businessFocusId;
    if (window.location.hash.includes('business')) {
      businessFocusId = this.props.businessId;
    } else {
      businessFocusId = 1;
    }
    return businessFocusId;
  },
  render: function() {
    var reviewItems = this.reviews();
    var reviewForm = this.reviewForm();

    return (
      <section className="reviews group">
        <div className="spacer group"></div>
        {reviewForm}
        <h2 className="reviews-collection">Fresh Reviews</h2>
        <section className="reviews-collection-index">
          <ul>
            {reviewItems}
          </ul>
        </section>
      </section>
    );
  }  
});


module.exports = Reviews;
