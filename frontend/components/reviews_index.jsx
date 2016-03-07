var BusinessStore = require('../stores/business');
var ReviewsStore = require('../stores/reviews');
var ErrorStore = require('../stores/errors');
var Reviews = require('./reviews');
var ReviewActions = require('../actions/reviews_api_action_creators');
var BusinessActions = require('../actions/business_api_action_creators');
var TopFiveBusinesses = require('./top_five_businesses');
var FilterParamsStore = require('../stores/filter');
var TopReview = require('./top_review');
var React = require('react');

var ReviewsIndex = React.createClass({
  getInitialState: function () {
    return({
      reviews: ReviewsStore.all(),
      topReview: ReviewsStore.topReview(),
      businesses: BusinessStore.all(),
      filters: FilterParamsStore.params(),
      scrollCount: 1
    });
  },
  componentDidMount: function() {
    this.reviewListener = ReviewsStore.addListener(this._onChange);
    this.businessListener = BusinessStore.addListener(this._Top5Change);
    this.infiniteScrollToken = window.addEventListener("scroll", this.addNewReviews);
    ReviewActions.fetchTopReview();
    BusinessActions.fetchTopFiveBusinesses();
    ReviewActions.fetchAllReviews(this.state.scrollCount);
  },
  componentWillUnmount: function () {
    this.reviewListener.remove();
    this.businessListener.remove();
  },


  addNewReviews: function() {
   if ((window.innerHeight + window.scrollY - 10000 * this.state.scrollCount) >= 0 && ReviewsStore.all().length < ReviewsStore.count() ) {
     this.state.scrollCount += 1;
     ReviewActions.fetchAllReviews(this.state.scrollCount);
   }
 },
  _onChange: function () {
    this.setState({
      reviews: ReviewsStore.all(),
      topReview: ReviewsStore.topReview()
    });
  },
  _filterChange: function () {
    this.setState({
      filters: FilterParamsStore.params()
    });
  },
  _Top5Change: function() {
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
