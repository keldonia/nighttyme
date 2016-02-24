var BusinessStore = require('../stores/business');
var ReviewsStore = require('../stores/reviews');
var ErrorStore = require('../stores/errors');
var ApiActions = require('../actions/api_actions');
var ApiUtil = require('../util/api_util');
var React = require('react');

var ReviewIndexItem = require('./review_index_item');
var ReviewDetail = require('./review_detail');

var Reviews = React.createClass({
  getInitialState: function () {
    return({ reviews: ReviewsStore.all() });
  },
  componentDidMount: function() {
    this.reviewListener = ReviewsStore.addListener(this._onChange);
    ApiUtil.fetchAllReviews();
  },
  componentWillUnmount: function () {
    this.reviewListener.remove();
  },
  _onChange: function () {
    this.setState({ reviews: ReviewsStore.all() });
  },
  render: function() {
    var reviews = this.state.reviews.map( function(review) {
        return <ReviewIndexItem key={review.id} review={review} />;
    });

    return (
      <section className="reviews">
        {this.props.children}
        <ul>
          {reviews}
        </ul>
      </section>
    );
  }

});

module.exports = Reviews;
