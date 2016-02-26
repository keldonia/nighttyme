var BusinessStore = require('../stores/business');
var ReviewsStore = require('../stores/reviews');
var ErrorStore = require('../stores/errors');
var ReviewActions = require('../actions/reviews_api_action_creators');
var React = require('react');

var ReviewIndexItem = require('./review_index_item');
var ReviewDetail = require('./review_detail');
var ReviewForm = require('./review_form');

var Reviews = React.createClass({
  getInitialState: function () {
    return({ reviews: ReviewsStore.all() });
  },
  componentDidMount: function() {
    this.reviewListener = ReviewsStore.addListener(this._onChange);
    ReviewActions.fetchAllReviews();
  },
  componentWillUnmount: function () {
    this.reviewListener.remove();
  },
  _onChange: function () {
    this.setState({ reviews: ReviewsStore.all() });
  },
  render: function() {
    var reviews = this.orderReviews();
    var reviewForm = this.reviewForm();

    return (
      <section className="reviews">
        {reviewForm}
        <section className="reviews-index">
          <h2 className="reviews-collection">Fresh Reviews</h2>
          <ul>
            {reviews}
          </ul>
        </section>
      </section>
    );
  },

  reviewForm: function () {
    var reviewForm;
    if (window.user) {
      reviewForm = <ReviewForm />;
    }
    return reviewForm;
  },

  orderReviews: function() {
    return this.state.reviews.map( function(review) {
      if (review.id !== parseInt(this.props.params.id)) {
        return <ReviewIndexItem key={review.id} review={review} />;
      } else {
        return <ReviewDetail key={review.id} review={review} />;
      }
    }, this);
  }
});


module.exports = Reviews;
