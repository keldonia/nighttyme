var BusinessStore = require('../stores/business');
var ReviewsStore = require('../stores/reviews');
var ErrorStore = require('../stores/errors');
var Reviews = require('./reviews');
var ReviewActions = require('../actions/reviews_api_action_creators');
var React = require('react');

var ReviewsIndex = React.createClass({
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

  render: function () {

    return (
      <section className="reviews-index-holder">
        <h1 className="review-index-header">Your Guide to Night Life in SF</h1>
        <section className="reviews-index">
          <Reviews reviews={this.state.reviews} reviewId={this.props.params.id} businessId={1}/>
        </section>
      </section>
    );

  }
});


module.exports = ReviewsIndex;
