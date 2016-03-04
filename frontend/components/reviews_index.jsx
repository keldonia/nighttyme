var BusinessStore = require('../stores/business');
var ReviewsStore = require('../stores/reviews');
var ErrorStore = require('../stores/errors');
var Reviews = require('./reviews');
var ReviewActions = require('../actions/reviews_api_action_creators');
var BusinessActions = require('../actions/business_api_action_creators');
var TopFiveBusinesses = require('./top_five_businesses');
var TopReview = require('./top_review');
var React = require('react');

var ReviewsIndex = React.createClass({
  getInitialState: function () {
    return({
      reviews: ReviewsStore.all(),
      topReview: ReviewsStore.topReview(),
      businesses: BusinessStore.all()
    });
  },
  componentDidMount: function() {
    this.reviewListener = ReviewsStore.addListener(this._onChange);
    this.businessListener = BusinessStore.addListener(this._Top3Change);
    ReviewActions.fetchTopReview();
    BusinessActions.fetchTopFiveBusinesses();
    ReviewActions.fetchAllReviews();
  },
  componentWillUnmount: function () {
    this.reviewListener.remove();
    this.businessListener.remove();
  },
  _onChange: function () {
    this.setState({
      reviews: ReviewsStore.all(),
      topReview: ReviewsStore.topReview()
    });
  },
  _Top3Change: function() {
    this.setState({ businesses: BusinessStore.all() })
  },

  render: function () {

    return (
      <section className="reviews-index-holder">
        <h1 className="review-index-header">Your Guide to Night Life in SF</h1>
        <section className="reviews-index">
          <Reviews reviews={this.state.reviews} reviewId={this.props.params.id} businessId={1}/>
        </section>
        <section className="other-info-reviews">
        <TopReview review={this.state.topReview} />
        <TopFiveBusinesses businesses={this.state.businesses} />
        </section>
      </section>
    );

  }
});


module.exports = ReviewsIndex;
